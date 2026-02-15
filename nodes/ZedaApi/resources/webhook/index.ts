import type { INodeProperties } from 'n8n-workflow';

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
			},
		},
		options: [
			{
				name: 'Update All Webhooks',
				value: 'updateEveryWebhooks',
				action: 'Set same URL for all webhook events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-every-webhooks',
					},
				},
			},
			{
				name: 'Update Chat Presence Webhook',
				value: 'updateWebhookChatPresence',
				action: 'Set webhook URL for chat presence events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-chat-presence',
					},
				},
			},
			{
				name: 'Update Connected Webhook',
				value: 'updateWebhookConnected',
				action: 'Set webhook URL for connection events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-connected',
					},
				},
			},
			{
				name: 'Update Delivery Webhook',
				value: 'updateWebhookDelivery',
				action: 'Set webhook URL for delivery events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-delivery',
					},
				},
			},
			{
				name: 'Update Disconnected Webhook',
				value: 'updateWebhookDisconnected',
				action: 'Set webhook URL for disconnection events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-disconnected',
					},
				},
			},
			{
				name: 'Update History Sync Webhook',
				value: 'updateWebhookHistorySync',
				action: 'Set webhook URL for history sync events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-history-sync',
					},
				},
			},
			{
				name: 'Update Message Status Webhook',
				value: 'updateWebhookMessageStatus',
				action: 'Set webhook URL for message status events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-message-status',
					},
				},
			},
			{
				name: 'Update Notify Sent By Me',
				value: 'updateNotifySentByMe',
				action: 'Enable or disable webhooks for sent messages',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-notify-sent-by-me',
					},
				},
			},
			{
				name: 'Update Received and Delivery Webhook',
				value: 'updateWebhookReceivedDelivery',
				action: 'Set webhook URL for received and delivery events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-received-delivery',
					},
				},
			},
			{
				name: 'Update Received Webhook',
				value: 'updateWebhookReceived',
				action: 'Set webhook URL for received message events',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-webhook-received',
					},
				},
			},
		],
		default: 'updateEveryWebhooks',
	},

	// ------ Webhook URL field (shared by most operations) ------
	{
		displayName: 'Webhook URL',
		name: 'value',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://your-server.com/webhook',
		description:
			'The webhook URL to receive events. Must start with http:// or https://. Leave empty to clear.',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: [
					'updateWebhookDelivery',
					'updateWebhookHistorySync',
					'updateWebhookReceived',
					'updateWebhookReceivedDelivery',
					'updateWebhookMessageStatus',
					'updateWebhookDisconnected',
					'updateWebhookConnected',
					'updateWebhookChatPresence',
					'updateEveryWebhooks',
				],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// ------ Notify Sent By Me (for Update All Webhooks) ------
	{
		displayName: 'Notify Sent By Me',
		name: 'notifySentByMe',
		type: 'boolean',
		default: false,
		description: 'Whether to also receive webhook notifications for messages sent by this instance',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateEveryWebhooks'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'notifySentByMe',
			},
		},
	},

	// ------ Notify Sent By Me (standalone operation) ------
	{
		displayName: 'Enable',
		name: 'notifySentByMe',
		type: 'boolean',
		default: false,
		required: true,
		description: 'Whether to receive webhook notifications for messages sent by this instance',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateNotifySentByMe'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'notifySentByMe',
			},
		},
	},
];
