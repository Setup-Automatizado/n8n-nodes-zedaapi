import type { INodeProperties } from 'n8n-workflow';

export const queueDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['queue'],
			},
		},
		options: [
			{
				name: 'List Queue',
				value: 'listQueue',
				action: 'List queued messages',
				routing: {
					request: {
						method: 'GET',
						url: '/queue',
					},
				},
			},
			{
				name: 'Get Count',
				value: 'getCount',
				action: 'Get queue count',
				routing: {
					request: {
						method: 'GET',
						url: '/queue/count',
					},
				},
			},
			{
				name: 'Clear Queue',
				value: 'clearQueue',
				action: 'Clear all queued messages',
				routing: {
					request: {
						method: 'DELETE',
						url: '/queue',
					},
				},
			},
			{
				name: 'Cancel Message',
				value: 'cancelMessage',
				action: 'Cancel a queued message',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/queue/{{$parameter.zaapId}}',
					},
				},
			},
		],
		default: 'listQueue',
	},

	// --- List Queue ---
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['listQueue'],
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
				resource: ['queue'],
				operation: ['listQueue'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
		},
	},

	// --- Cancel Message ---
	{
		displayName: 'Zaap ID',
		name: 'zaapId',
		type: 'string',
		default: '',
		required: true,
		description: 'The Zaap ID of the queued message to cancel',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['cancelMessage'],
			},
		},
	},
];
