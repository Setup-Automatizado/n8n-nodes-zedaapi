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
		displayName: 'Event Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the event',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.name',
			},
		},
	},
	{
		displayName: 'Date Time',
		name: 'dateTime',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Event date and time in ISO 8601 format',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.dateTime',
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
				property: 'event.description',
			},
		},
	},
	{
		displayName: 'Location Name',
		name: 'locationName',
		type: 'string',
		default: '',
		description: 'Name of the event location',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.location.name',
			},
		},
	},
	{
		displayName: 'Location Latitude',
		name: 'degreesLatitude',
		type: 'number',
		typeOptions: { numberPrecision: 8 },
		default: 0,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.location.degreesLatitude',
			},
		},
	},
	{
		displayName: 'Location Longitude',
		name: 'degreesLongitude',
		type: 'number',
		typeOptions: { numberPrecision: 8 },
		default: 0,
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.location.degreesLongitude',
			},
		},
	},
	{
		displayName: 'Call Link Type',
		name: 'callLinkType',
		type: 'options',
		options: [
			{ name: 'Video', value: 'video' },
			{ name: 'Voice', value: 'voice' },
		],
		default: 'voice',
		description: 'Type of call link for the event',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.callLinkType',
			},
		},
	},
	{
		displayName: 'Canceled',
		name: 'canceled',
		type: 'boolean',
		default: false,
		description: 'Whether the event is canceled',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'event.canceled',
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
				resource: ['event'],
				operation: ['sendEvent'],
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
				resource: ['event'],
				operation: ['sendEvent'],
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
				resource: ['event'],
				operation: ['sendEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messageId',
			},
		},
	},

	// --- Edit Event ---
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the event to edit',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'eventId',
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
		description: 'Updated start time in RFC3339 format',
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
		description: 'Updated end time in RFC3339 format',
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
		description: 'Updated event location',
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
	{
		displayName: 'Canceled',
		name: 'canceled',
		type: 'boolean',
		default: false,
		description: 'Whether to cancel the event',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'canceled',
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
				resource: ['event'],
				operation: ['editEvent'],
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
				resource: ['event'],
				operation: ['editEvent'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'delayTyping',
			},
		},
	},

	// --- Send Event Response ---
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID of the event to respond to',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEventResponse'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'eventId',
			},
		},
	},
	{
		displayName: 'Response',
		name: 'response',
		type: 'options',
		options: [
			{ name: 'Going', value: 'going' },
			{ name: 'Maybe', value: 'maybe' },
			{ name: 'Not Going', value: 'not_going' },
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
	{
		displayName: 'Extra Guest Count',
		name: 'extraGuestCount',
		type: 'number',
		default: 0,
		description: 'Number of extra guests',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['sendEventResponse'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'extraGuestCount',
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
				resource: ['event'],
				operation: ['sendEventResponse'],
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
				resource: ['event'],
				operation: ['sendEventResponse'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'delayTyping',
			},
		},
	},
];
