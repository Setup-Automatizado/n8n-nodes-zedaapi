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
	if (body.isGroup && body.participantPhone) {
		return body.participantPhone as string;
	}
	return (body.phone as string) || '';
}

export class ZedaApiChatTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ze da API Chat Trigger',
		name: 'zedaApiChatTrigger',
		icon: { light: 'file:../../icons/zedaapi.svg', dark: 'file:../../icons/zedaapi.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: 'WhatsApp Chat for AI Agents',
		description:
			'Receive WhatsApp messages via Ze da API — outputs chatInput and sessionId for AI Agents',
		defaults: {
			name: 'Ze da API Chat Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'zedaApi',
				required: true,
			},
		],
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

		const rawBody = this.getBodyData();
		const body: IDataObject =
			rawBody && typeof rawBody === 'object' && Object.keys(rawBody).length > 0
				? rawBody
				: ((req.body as IDataObject) ?? {});

		if (!body || Object.keys(body).length === 0) {
			return {
				workflowData: [
					this.helpers.returnJsonArray({
						chatInput: '',
						sessionId: '',
						messageType: 'empty',
						event: 'unknown',
						error: 'Empty webhook body received',
					}),
				],
			};
		}

		const ignoreFromMe = this.getNodeParameter('ignoreFromMe', true) as boolean;
		const ignoreGroups = this.getNodeParameter('ignoreGroups', false) as boolean;
		const ignoreStatusReply = this.getNodeParameter('ignoreStatusReply', true) as boolean;

		// --- Filters ---

		if (ignoreFromMe && body.fromMe === true) {
			return { noWebhookResponse: true };
		}

		if (ignoreGroups && body.isGroup === true) {
			return { noWebhookResponse: true };
		}

		if (ignoreStatusReply && body.isStatusReply === true) {
			return { noWebhookResponse: true };
		}

		// Only process message-type events (skip delivery, read, connection, etc.)
		const eventType = (body.event as string) || (body.type as string) || '';
		const isMessageEvent =
			!eventType ||
			eventType.toLowerCase().includes('message') ||
			eventType.toLowerCase() === 'chat';

		if (!isMessageEvent) {
			return { noWebhookResponse: true };
		}

		// --- Extract chatInput for AI Agent integration ---
		const { chatInput, messageType } = extractMessageContent(body);
		const senderPhone = extractSenderPhone(body);

		return {
			workflowData: [
				this.helpers.returnJsonArray({
					// AI Agent primary fields
					chatInput,
					sessionId: senderPhone,

					// Message context
					messageType,
					senderPhone,
					senderName: (body.senderName as string) || (body.chatName as string) || senderPhone,
					isGroup: body.isGroup || false,
					fromMe: body.fromMe || false,
					messageId: (body.messageId as string) || '',
					phone: (body.phone as string) || '',
					timestamp: body.momment || body.timestamp || new Date().toISOString(),

					// Group context
					chatName: (body.chatName as string) || '',
					participantPhone: (body.participantPhone as string) || '',
				}),
			],
		};
	}
}
