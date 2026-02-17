import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['status'],
			},
		},
		options: [
			{
				name: 'Send Audio Status',
				value: 'sendAudioStatus',
				action: 'Post an audio status story',
				routing: {
					request: {
						method: 'POST',
						url: '/send-audio-status',
					},
				},
			},
			{
				name: 'Send Image Status',
				value: 'sendImageStatus',
				action: 'Post an image status story',
				routing: {
					request: {
						method: 'POST',
						url: '/send-image-status',
					},
				},
			},
			{
				name: 'Send Text Status',
				value: 'sendTextStatus',
				action: 'Post a text status story',
				routing: {
					request: {
						method: 'POST',
						url: '/send-text-status',
					},
				},
			},
			{
				name: 'Send Video Status',
				value: 'sendVideoStatus',
				action: 'Post a video status story',
				routing: {
					request: {
						method: 'POST',
						url: '/send-video-status',
					},
				},
			},
		],
		default: 'sendTextStatus',
	},

	// --- Send Text Status ---
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendTextStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Background Color',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendTextStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'backgroundColor',
			},
		},
	},
	{
		displayName: 'Font',
		name: 'font',
		type: 'number',
		default: 0,
		description: 'Font style number (0-5)',
		typeOptions: {
			minValue: 0,
			maxValue: 5,
		},
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendTextStatus'],
			},
		},
		routing: {
			send: { type: 'body', property: 'font' },
		},
	},

	// --- Send Image Status ---
	{
		displayName: 'Image',
		name: 'image',
		type: 'string',
		default: '',
		required: true,
		description: 'Image URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendImageStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'image',
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		typeOptions: { rows: 2 },
		default: '',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendImageStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Send Audio Status ---
	{
		displayName: 'Audio',
		name: 'audio',
		type: 'string',
		default: '',
		required: true,
		description: 'Audio URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendAudioStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'audio',
			},
		},
	},

	// --- Send Video Status ---
	{
		displayName: 'Video',
		name: 'video',
		type: 'string',
		default: '',
		required: true,
		description: 'Video URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendVideoStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'video',
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		typeOptions: { rows: 2 },
		default: '',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendVideoStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Common fields for all status operations ---
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		description: 'Custom tracking message ID',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendAudioStatus', 'sendImageStatus', 'sendTextStatus', 'sendVideoStatus'],
			},
		},
		routing: {
			send: { type: 'body', property: 'messageId' },
		},
	},
	{
		displayName: 'Delay Message (Seconds)',
		name: 'delayMessage',
		type: 'number',
		default: 0,
		typeOptions: { minValue: 0 },
		description: 'Delay in seconds before posting status (0 = API default 1-3s random)',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendAudioStatus', 'sendImageStatus', 'sendTextStatus', 'sendVideoStatus'],
			},
		},
		routing: {
			send: { type: 'body', property: 'delayMessage' },
		},
	},
	{
		displayName: 'Scheduled For',
		name: 'scheduledFor',
		type: 'dateTime',
		default: '',
		description:
			'ISO 8601 timestamp for scheduled delivery (overrides Delay Message). Must be in the future.',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendAudioStatus', 'sendImageStatus', 'sendTextStatus', 'sendVideoStatus'],
			},
		},
		routing: {
			send: { type: 'body', property: 'scheduledFor' },
		},
	},
];
