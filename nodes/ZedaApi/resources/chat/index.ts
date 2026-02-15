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
];
