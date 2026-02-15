import type { INodeProperties } from 'n8n-workflow';

export const pollDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['poll'],
			},
		},
		options: [
			{
				name: 'Send Poll',
				value: 'sendPoll',
				action: 'Send a poll',
				routing: {
					request: {
						method: 'POST',
						url: '/send-poll',
					},
				},
			},
			{
				name: 'Send Poll Vote',
				value: 'sendPollVote',
				action: 'Vote on a poll',
				routing: {
					request: {
						method: 'POST',
						url: '/send-poll-vote',
					},
				},
			},
		],
		default: 'sendPoll',
	},

	// Phone field (all operations)
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: '5511999999999',
		description: 'Recipient phone number with country code',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll', 'sendPollVote'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// --- Send Poll ---
	{
		displayName: 'Poll Name',
		name: 'pollName',
		type: 'string',
		default: '',
		required: true,
		description: 'The poll question/title',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'pollName',
			},
		},
	},
	{
		displayName: 'Poll Options',
		name: 'pollOptions',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		description: 'Poll options (minimum 2)',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'pollOptions',
			},
		},
	},
	{
		displayName: 'Selectable Count',
		name: 'selectableCount',
		type: 'number',
		default: 0,
		description: 'Number of options a user can select (0 = multi-select)',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'selectableCount',
			},
		},
	},

	// --- Send Poll Vote ---
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the poll message to vote on',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPollVote'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
	},
	{
		displayName: 'Poll Vote',
		name: 'pollVote',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		description: 'Selected option(s) to vote for',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPollVote'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'pollVote',
			},
		},
	},
];
