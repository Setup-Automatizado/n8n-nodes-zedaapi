import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { chatDescription } from './resources/chat';
import { communityDescription } from './resources/community';
import { contactDescription } from './resources/contact';
import { eventDescription } from './resources/event';
import { groupDescription } from './resources/group';
import { instanceDescription } from './resources/instance';
import { interactiveMessageDescription } from './resources/interactiveMessage';
import { messageDescription } from './resources/message';
import { messageActionDescription } from './resources/messageAction';
import { newsletterDescription } from './resources/newsletter';
import { pollDescription } from './resources/poll';
import { privacyDescription } from './resources/privacy';
import { profileDescription } from './resources/profile';
import { proxyDescription } from './resources/proxy';
import { queueDescription } from './resources/queue';
import { statusDescription } from './resources/status';
import { statusCacheDescription } from './resources/statusCache';
import { webhookDescription } from './resources/webhook';

export class ZedaApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Zeda API',
		name: 'zedaApi',
		icon: {
			light: 'file:../../icons/zedaapi.svg',
			dark: 'file:../../icons/zedaapi.dark.svg',
		},
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'WhatsApp API powered by Zé da API - Send messages, manage groups, contacts and more',
		defaults: {
			name: 'Zé da API',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'zedaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL:
				'={{$credentials.baseUrl}}/instances/{{$credentials.instanceId}}/token/{{$credentials.token}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Chat', value: 'chat' },
					{ name: 'Community', value: 'community' },
					{ name: 'Contact', value: 'contact' },
					{ name: 'Event', value: 'event' },
					{ name: 'Group', value: 'group' },
					{ name: 'Instance', value: 'instance' },
					{ name: 'Interactive Message', value: 'interactiveMessage' },
					{ name: 'Message', value: 'message' },
					{ name: 'Message Action', value: 'messageAction' },
					{ name: 'Message Status', value: 'statusCache' },
					{ name: 'Newsletter', value: 'newsletter' },
					{ name: 'Poll', value: 'poll' },
					{ name: 'Privacy', value: 'privacy' },
					{ name: 'Profile', value: 'profile' },
					{ name: 'Proxy', value: 'proxy' },
					{ name: 'Queue', value: 'queue' },
					{ name: 'Status/Story', value: 'status' },
					{ name: 'Webhook', value: 'webhook' },
				],
				default: 'message',
			},
			...messageDescription,
			...interactiveMessageDescription,
			...messageActionDescription,
			...pollDescription,
			...eventDescription,
			...statusDescription,
			...contactDescription,
			...chatDescription,
			...groupDescription,
			...communityDescription,
			...newsletterDescription,
			...instanceDescription,
			...profileDescription,
			...privacyDescription,
			...proxyDescription,
			...queueDescription,
			...statusCacheDescription,
			...webhookDescription,
		],
	};
}
