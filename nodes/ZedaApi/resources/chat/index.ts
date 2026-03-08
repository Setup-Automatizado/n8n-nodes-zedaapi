import type { INodeProperties } from 'n8n-workflow';

export const chatDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chat'],
			},
		},
		options: [
			{
				name: 'List Chats',
				value: 'listChats',
				description: 'List all chats',
				action: 'List chats',
				routing: {
					request: {
						method: 'GET',
						url: '/chats',
					},
				},
			},
			{
				name: 'Save Chat Notes',
				value: 'saveChatNotes',
				description: 'Save notes for a chat',
				action: 'Save chat notes',
				routing: {
					request: {
						method: 'POST',
						url: '=/chats/{{$parameter.phone}}/notes',
					},
				},
			},
		],
		default: 'listChats',
	},

	// ------ List Chats fields ------
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['listChats'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		default: 100,
		description: 'Number of items per page',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['listChats'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
		},
	},

	// ------ Save Chat Notes fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number of the chat in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['saveChatNotes'],
			},
		},
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		required: true,
		typeOptions: {
			rows: 4,
		},
		description: 'The notes to save for the chat',
		displayOptions: {
			show: {
				resource: ['chat'],
				operation: ['saveChatNotes'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'notes',
			},
		},
	},
];
