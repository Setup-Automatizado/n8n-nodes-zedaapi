import type {
	IWebhookFunctions,
	IWebhookResponseData,
	INodeType,
	INodeTypeDescription,
	IHookFunctions,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

/**
 * Extract readable text from any incoming WhatsApp message type.
 * Returns the text content and the detected message type.
 */
function extractMessageContent(body: IDataObject): { chatInput: string; messageType: string } {
	// Text message
	if (body.text && typeof body.text === 'object') {
		const text = body.text as IDataObject;
		return { chatInput: (text.message as string) || '', messageType: 'text' };
	}

	// Image with caption
	if (body.image && typeof body.image === 'object') {
		const image = body.image as IDataObject;
		return {
			chatInput: (image.caption as string) || '[image]',
			messageType: 'image',
		};
	}

	// Video with caption
	if (body.video && typeof body.video === 'object') {
		const video = body.video as IDataObject;
		return {
			chatInput: (video.caption as string) || '[video]',
			messageType: 'video',
		};
	}

	// Audio message
	if (body.audio && typeof body.audio === 'object') {
		return { chatInput: '[audio]', messageType: 'audio' };
	}

	// Document with caption
	if (body.document && typeof body.document === 'object') {
		const doc = body.document as IDataObject;
		return {
			chatInput: (doc.caption as string) || (doc.title as string) || '[document]',
			messageType: 'document',
		};
	}

	// Location
	if (body.location && typeof body.location === 'object') {
		const loc = body.location as IDataObject;
		const name = (loc.name as string) || '';
		const address = (loc.address as string) || '';
		return {
			chatInput: name || address || '[location]',
			messageType: 'location',
		};
	}

	// Contact
	if (body.contact && typeof body.contact === 'object') {
		const contact = body.contact as IDataObject;
		return {
			chatInput: (contact.displayName as string) || '[contact]',
			messageType: 'contact',
		};
	}

	// Sticker
	if (body.sticker) {
		return { chatInput: '[sticker]', messageType: 'sticker' };
	}

	// Reaction
	if (body.reaction && typeof body.reaction === 'object') {
		const reaction = body.reaction as IDataObject;
		return {
			chatInput: (reaction.value as string) || '[reaction]',
			messageType: 'reaction',
		};
	}

	// Poll
	if (body.poll && typeof body.poll === 'object') {
		const poll = body.poll as IDataObject;
		return {
			chatInput: (poll.question as string) || '[poll]',
			messageType: 'poll',
		};
	}

	// Poll vote
	if (body.pollVote && typeof body.pollVote === 'object') {
		return { chatInput: '[poll vote]', messageType: 'pollVote' };
	}

	// Button response
	if (body.buttonsResponseMessage && typeof body.buttonsResponseMessage === 'object') {
		const btn = body.buttonsResponseMessage as IDataObject;
		return {
			chatInput: (btn.message as string) || '[button response]',
			messageType: 'buttonResponse',
		};
	}

	// List response
	if (body.listResponseMessage && typeof body.listResponseMessage === 'object') {
		const list = body.listResponseMessage as IDataObject;
		return {
			chatInput: (list.message as string) || (list.title as string) || '[list response]',
			messageType: 'listResponse',
		};
	}

	// Event
	if (body.event && typeof body.event === 'object') {
		const event = body.event as IDataObject;
		return {
			chatInput: (event.name as string) || '[event]',
			messageType: 'event',
		};
	}

	// Event response
	if (body.eventResponse && typeof body.eventResponse === 'object') {
		const er = body.eventResponse as IDataObject;
		return {
			chatInput: (er.response as string) || '[event response]',
			messageType: 'eventResponse',
		};
	}

	// Hydrated template (interactive buttons from business)
	if (body.hydratedTemplate && typeof body.hydratedTemplate === 'object') {
		const tmpl = body.hydratedTemplate as IDataObject;
		return {
			chatInput: (tmpl.message as string) || '[template]',
			messageType: 'hydratedTemplate',
		};
	}

	// Carousel message
	if (body.carouselMessage && typeof body.carouselMessage === 'object') {
		const carousel = body.carouselMessage as IDataObject;
		return {
			chatInput: (carousel.text as string) || '[carousel]',
			messageType: 'carousel',
		};
	}

	// Fallback: try common field names
	if (typeof body.message === 'string') {
		return { chatInput: body.message, messageType: 'unknown' };
	}

	return { chatInput: '', messageType: (body.type as string) || 'unknown' };
}

/**
 * Extract sender phone number (without @s.whatsapp.net suffix).
 * For group messages, uses participantPhone (the actual sender).
 */
function extractSenderPhone(body: IDataObject): string {
	// In groups, participantPhone is the actual sender
	if (body.isGroup && body.participantPhone) {
		return body.participantPhone as string;
	}
	return (body.phone as string) || '';
}

export class ZedaApiTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ze da API Trigger',
		name: 'zedaApiTrigger',
		icon: { light: 'file:../../icons/zedaapi.svg', dark: 'file:../../icons/zedaapi.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Receive WhatsApp events via Ze da API webhooks — outputs chatInput for AI Agents',
		defaults: {
			name: 'Ze da API Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: 'all',
				options: [
					{ name: 'All Events', value: 'all' },
					{ name: 'Call', value: 'call' },
					{ name: 'Chat Presence', value: 'chat-presence' },
					{ name: 'Connection Status', value: 'connection' },
					{ name: 'Group Update', value: 'group' },
					{ name: 'History Sync', value: 'history-sync' },
					{ name: 'Message Delivery', value: 'delivery' },
					{ name: 'Message Reaction', value: 'reaction' },
					{ name: 'Message Read', value: 'read' },
					{ name: 'Message Received', value: 'message' },
					{ name: 'Message Revoked', value: 'revoked' },
					{ name: 'Message Sent', value: 'message-sent' },
					{ name: 'Poll Vote', value: 'poll-vote' },
					{ name: 'Status/Stories', value: 'status-stories' },
				],
				description: 'The event type to listen for',
			},
			{
				displayName: 'Ignore Messages From Me',
				name: 'ignoreFromMe',
				type: 'boolean',
				default: true,
				description:
					'Whether to ignore messages sent by this instance (useful to avoid loops in AI chatbot flows)',
			},
			{
				displayName: 'Ignore Group Messages',
				name: 'ignoreGroups',
				type: 'boolean',
				default: false,
				description: 'Whether to ignore messages from group chats',
			},
			{
				displayName: 'Ignore Status/Story Replies',
				name: 'ignoreStatusReply',
				type: 'boolean',
				default: true,
				description: 'Whether to ignore replies to status/story posts',
			},
		],
		usableAsTool: true,
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return true;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();

		// getBodyData() can return undefined when the request body is empty,
		// malformed, or has an unsupported content-type. Fallback to req.body.
		const rawBody = this.getBodyData();
		const body: IDataObject =
			rawBody && typeof rawBody === 'object' && Object.keys(rawBody).length > 0
				? rawBody
				: ((req.body as IDataObject) ?? {});

		// If body is still empty, return the raw payload for debugging
		if (!body || Object.keys(body).length === 0) {
			return {
				workflowData: [
					this.helpers.returnJsonArray({
						chatInput: '',
						sessionId: '',
						messageType: 'empty',
						event: 'unknown',
						error: 'Empty webhook body received',
						headers: {
							'content-type': req.headers['content-type'],
							'x-forwarded-for': req.headers['x-forwarded-for'],
							'user-agent': req.headers['user-agent'],
						},
					}),
				],
			};
		}

		const event = this.getNodeParameter('event') as string;
		const ignoreFromMe = this.getNodeParameter('ignoreFromMe', true) as boolean;
		const ignoreGroups = this.getNodeParameter('ignoreGroups', false) as boolean;
		const ignoreStatusReply = this.getNodeParameter('ignoreStatusReply', true) as boolean;

		// --- Filters ---

		// Ignore messages from self (prevents chatbot loops)
		if (ignoreFromMe && body.fromMe === true) {
			return { noWebhookResponse: true };
		}

		// Ignore group messages if configured
		if (ignoreGroups && body.isGroup === true) {
			return { noWebhookResponse: true };
		}

		// Ignore status/story replies
		if (ignoreStatusReply && body.isStatusReply === true) {
			return { noWebhookResponse: true };
		}

		// --- Event type filtering ---
		const eventType = (body.event as string) || (body.type as string) || '';

		if (event !== 'all') {
			const matchesEvent =
				eventType.toLowerCase().includes(event.toLowerCase()) ||
				(body.isStatusReply && event === 'message');

			if (!matchesEvent) {
				return { noWebhookResponse: true };
			}
		}

		// --- Extract chatInput for AI Agent integration ---
		const { chatInput, messageType } = extractMessageContent(body);
		const senderPhone = extractSenderPhone(body);

		const returnData = {
			// AI Agent integration fields
			chatInput,
			sessionId: senderPhone,
			messageType,

			// Sender info
			senderPhone,
			senderName: (body.senderName as string) || (body.chatName as string) || senderPhone,
			senderPhoto: (body.senderPhoto as string) || '',
			isGroup: body.isGroup || false,
			fromMe: body.fromMe || false,

			// Message metadata
			event: eventType,
			messageId: (body.messageId as string) || '',
			phone: (body.phone as string) || '',
			instanceId: body.instanceId,
			timestamp: body.momment || body.timestamp || new Date().toISOString(),

			// Group context
			chatName: (body.chatName as string) || '',
			participantPhone: (body.participantPhone as string) || '',

			// Full original payload (for advanced use)
			...body,

			// Request headers for debugging
			headers: {
				'x-forwarded-for': req.headers['x-forwarded-for'],
				'user-agent': req.headers['user-agent'],
			},
		};

		return {
			workflowData: [this.helpers.returnJsonArray(returnData)],
		};
	}
}
