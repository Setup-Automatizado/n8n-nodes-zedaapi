import type { INodeProperties } from 'n8n-workflow';

export const eventDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['event'],
			},
		},
		options: [
			{
				name: 'Send Event',
				value: 'sendEvent',
				action: 'Send an event invitation',
				routing: {
					request: {
						method: 'POST',
						url: '/send-event',
					},
				},
			},
			{
				name: 'Edit Event',
				value: 'editEvent',
				action: 'Edit an existing event',
				routing: {
					request: {
						method: 'POST',
						url: '/send-edit-event',
					},
				},
			},
			{
				name: 'Send Event Response',
				value: 'sendEventResponse',
				action: 'Respond to an event invitation',
				routing: {
					request: {
						method: 'POST',
						url: '/send-event-response',
					},
				},
			},
		],
		default: 'sendEvent',
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
				resource: ['event'],
				operation: ['sendEvent', 'editEvent', 'sendEventResponse'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// --- Send Event ---
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Event name',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Start Time',
		name: 'startTime',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'startTime',
			},
		},
	},
	{
		displayName: 'End Time',
		name: 'endTime',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'endTime',
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'location',
			},
		},
	},
	{
		displayName: 'Call Type',
		name: 'callType',
		type: 'string',
		default: '',
		description: 'Type of call (e.g., voice, video)',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'callType',
			},
		},
	},
	{
		displayName: 'Call URL',
		name: 'callUrl',
		type: 'string',
		default: '',
		description: 'URL for the call link',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'callUrl',
			},
		},
	},

	// --- Edit Event ---
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the event message to edit',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Start Time',
		name: 'startTime',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'startTime',
			},
		},
	},
	{
		displayName: 'End Time',
		name: 'endTime',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'endTime',
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'location',
			},
		},
	},

	// --- Send Event Response ---
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the event message to respond to',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEventResponse'],
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
		displayName: 'Response',
		name: 'response',
		type: 'options',
		options: [
			{ name: 'Going', value: 'going' },
			{ name: 'Not Going', value: 'not_going' },
			{ name: 'Maybe', value: 'maybe' },
		],
		default: 'going',
		required: true,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEventResponse'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'response',
			},
		},
	},
];
