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
		displayName: 'Poll Question',
		name: 'message',
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
				property: 'message',
			},
		},
	},
	{
		displayName: 'Poll Options',
		name: 'poll',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		required: true,
		description: 'Poll options (minimum 2)',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		options: [
			{
				displayName: 'Option',
				name: 'optionValues',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						description: 'Option text',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'poll',
			},
		},
	},
	{
		displayName: 'Max Options',
		name: 'pollMaxOptions',
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
				property: 'pollMaxOptions',
			},
		},
	},
	{
		displayName: 'Delay Message (Ms)',
		name: 'delayMessage',
		type: 'number',
		default: 0,
		description: 'Delay in milliseconds before sending',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'delayMessage',
			},
		},
	},
	{
		displayName: 'Delay Typing (Seconds)',
		name: 'delayTyping',
		type: 'number',
		default: 0,
		description: 'Show typing indicator before sending',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'delayTyping',
			},
		},
	},
	{
		displayName: 'Message ID (Reply)',
		name: 'messageId',
		type: 'string',
		default: '',
		description: 'Message ID to reply to',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPoll'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
	},

	// --- Send Poll Vote ---
	{
		displayName: 'Poll Message ID',
		name: 'pollMessageId',
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
				property: 'pollMessageId',
			},
		},
	},
	{
		displayName: 'Selected Options',
		name: 'options',
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
				property: 'options',
			},
		},
	},
	{
		displayName: 'Delay Message (Ms)',
		name: 'delayMessage',
		type: 'number',
		default: 0,
		description: 'Delay in milliseconds before sending',
		displayOptions: {
			show: {
				resource: ['poll'],
				operation: ['sendPollVote'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'delayMessage',
			},
		},
	},
];
