import type {
	IWebhookFunctions,
	IWebhookResponseData,
	INodeType,
	INodeTypeDescription,
	IHookFunctions,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class ZedaApiTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Zeda API Trigger',
		name: 'zedaApiTrigger',
		icon: { light: 'file:../../icons/zedaapi.svg', dark: 'file:../../icons/zedaapi.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Receive WhatsApp events via Zeda API webhooks',
		defaults: {
			name: 'Zeda API Trigger',
		},
		usableAsTool: true,
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
		const body = this.getBodyData();
		const event = this.getNodeParameter('event') as string;

		const eventType = (body.event as string) || (body.type as string) || '';

		if (event !== 'all') {
			const matchesEvent =
				eventType.toLowerCase().includes(event.toLowerCase()) ||
				(body.isStatusReply && event === 'message');

			if (!matchesEvent) {
				return { noWebhookResponse: true };
			}
		}

		const returnData = {
			event: eventType,
			timestamp: body.timestamp || new Date().toISOString(),
			instanceId: body.instanceId,
			...body,
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
