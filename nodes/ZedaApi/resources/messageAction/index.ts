import type { INodeProperties } from 'n8n-workflow';

export const messageActionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messageAction'],
			},
		},
		options: [
			{
				name: 'Delete Message',
				value: 'deleteMessage',
				action: 'Delete a message',
				routing: {
					request: {
						method: 'DELETE',
						url: '/messages',
					},
				},
			},
			{
				name: 'Forward Message',
				value: 'forwardMessage',
				action: 'Forward a message to another chat',
				routing: {
					request: {
						method: 'POST',
						url: '/forward-message',
					},
				},
			},
			{
				name: 'Modify Chat',
				value: 'modifyChat',
				action: 'Modify chat state',
				routing: {
					request: {
						method: 'POST',
						url: '/modify-chat',
					},
				},
			},
			{
				name: 'Pin Message',
				value: 'pinMessage',
				action: 'Pin or unpin a message',
				routing: {
					request: {
						method: 'POST',
						url: '/pin-message',
					},
				},
			},
			{
				name: 'Read Message',
				value: 'readMessage',
				action: 'Mark a message as read',
				routing: {
					request: {
						method: 'POST',
						url: '/read-message',
					},
				},
			},
			{
				name: 'Remove Reaction',
				value: 'removeReaction',
				action: 'Remove a reaction from a message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-remove-reaction',
					},
				},
			},
			{
				name: 'Send Reaction',
				value: 'sendReaction',
				action: 'Send a reaction emoji to a message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-reaction',
					},
				},
			},
		],
		default: 'sendReaction',
	},

	// Phone field (all operations)
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: '5511999999999',
		description: 'Phone number with country code',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: [
					'sendReaction',
					'removeReaction',
					'forwardMessage',
					'deleteMessage',
					'readMessage',
					'pinMessage',
					'modifyChat',
				],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// Message ID (shared by most operations)
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the message to act on',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: [
					'sendReaction',
					'removeReaction',
					'forwardMessage',
					'deleteMessage',
					'readMessage',
					'pinMessage',
				],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
	},

	// --- Send Reaction ---
	{
		displayName: 'Reaction',
		name: 'reaction',
		type: 'string',
		default: '',
		required: true,
		placeholder: '👍',
		description: 'Emoji to react with',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: ['sendReaction'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'reaction',
			},
		},
	},

	// --- Forward Message ---
	{
		displayName: 'From Phone',
		name: 'fromPhone',
		type: 'string',
		default: '',
		required: true,
		description: 'Source phone number where the message originated',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: ['forwardMessage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'fromPhone',
			},
		},
	},

	// --- Delete Message ---
	{
		displayName: 'From Me',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'Whether the message was sent by you',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: ['deleteMessage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'fromMe',
			},
		},
	},

	// --- Pin Message ---
	{
		displayName: 'Pin',
		name: 'pin',
		type: 'boolean',
		default: true,
		description: 'Whether to pin (true) or unpin (false) the message',
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: ['pinMessage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'pin',
			},
		},
	},

	// --- Modify Chat ---
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Archive', value: 'archive', action: 'Archive a chat' },
			{ name: 'Clear', value: 'clear', action: 'Clear a chat' },
			{ name: 'Delete', value: 'delete', action: 'Delete a chat' },
			{ name: 'Mute', value: 'mute', action: 'Mute a chat' },
			{ name: 'Pin', value: 'pin', action: 'Pin a chat' },
			{ name: 'Read', value: 'read', action: 'Read a chat' },
		],
		default: 'read',
		required: true,
		displayOptions: {
			show: {
				resource: ['messageAction'],
				operation: ['modifyChat'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
	},
];
