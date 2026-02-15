import type {
	IWebhookFunctions,
	IWebhookResponseData,
	INodeType,
	INodeTypeDescription,
	IHookFunctions,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class ZedaApiTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ze da API Trigger',
		name: 'zedaApiTrigger',
		icon: { light: 'file:../../icons/zedaapi.svg', dark: 'file:../../icons/zedaapi.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description:
			'Receive all WhatsApp webhook events via Ze da API (delivery, read, connection, groups, reactions, etc.)',
		defaults: {
			name: 'Ze da API Trigger',
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

		// --- Event type filtering ---
		const eventType = (body.event as string) || (body.type as string) || '';

		if (event !== 'all') {
			if (!eventType.toLowerCase().includes(event.toLowerCase())) {
				return { noWebhookResponse: true };
			}
		}

		return {
			workflowData: [
				this.helpers.returnJsonArray({
					// Event metadata
					event: eventType,
					phone: (body.phone as string) || '',
					messageId: (body.messageId as string) || '',
					instanceId: body.instanceId,
					timestamp: body.momment || body.timestamp || new Date().toISOString(),

					// Sender info
					senderName: (body.senderName as string) || (body.chatName as string) || '',
					isGroup: body.isGroup || false,
					fromMe: body.fromMe || false,

					// Group context
					chatName: (body.chatName as string) || '',
					participantPhone: (body.participantPhone as string) || '',

					// Full original payload
					...body,

					// Request headers for debugging
					headers: {
						'x-forwarded-for': req.headers['x-forwarded-for'],
						'user-agent': req.headers['user-agent'],
					},
				}),
			],
		};
	}
}
