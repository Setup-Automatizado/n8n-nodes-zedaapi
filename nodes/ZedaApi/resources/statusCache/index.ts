import type { INodeProperties } from 'n8n-workflow';

export const statusCacheDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['statusCache'],
			},
		},
		options: [
			{
				name: 'Get Messages Status',
				value: 'getMessagesStatus',
				action: 'Get messages delivery status',
				routing: {
					request: {
						method: 'GET',
						url: '/messages-status',
					},
				},
			},
			{
				name: 'Get Stats',
				value: 'getStats',
				action: 'Get message status statistics',
				routing: {
					request: {
						method: 'GET',
						url: '/messages-status/stats',
					},
				},
			},
			{
				name: 'Flush Status',
				value: 'flushStatus',
				action: 'Flush message status cache',
				routing: {
					request: {
						method: 'POST',
						url: '/messages-status/flush',
					},
				},
			},
			{
				name: 'Clear Cache',
				value: 'clearCache',
				action: 'Clear message status cache',
				routing: {
					request: {
						method: 'DELETE',
						url: '/messages-status/cache',
					},
				},
			},
		],
		default: 'getMessagesStatus',
	},

	// --- Get Messages Status ---
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		description: 'Filter by specific message ID',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'messageId',
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		description: 'Filter by group ID',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		description: 'Filter by phone number',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		description: 'Number of results to skip',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'offset',
			},
		},
	},
	{
		displayName: 'Include Participants',
		name: 'includeParticipants',
		type: 'boolean',
		default: false,
		description: 'Whether to include participant details in the response',
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'includeParticipants',
			},
		},
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		default: 'aggregated',
		description: 'Response format',
		options: [
			{ name: 'Aggregated', value: 'aggregated' },
			{ name: 'Raw', value: 'raw' },
		],
		displayOptions: {
			show: {
				resource: ['statusCache'],
				operation: ['getMessagesStatus'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'format',
			},
		},
	},
];
