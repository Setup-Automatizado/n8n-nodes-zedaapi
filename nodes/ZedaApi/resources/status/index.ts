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
		displayName: 'Message',
		name: 'message',
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
				property: 'message',
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
		type: 'string',
		default: '',
		description: 'Font style for the text status',
		displayOptions: {
			show: {
				resource: ['status'],
				operation: ['sendTextStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'font',
			},
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
];
