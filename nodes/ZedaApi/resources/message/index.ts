import type { INodeProperties } from 'n8n-workflow';

const phoneField = (resource: string, operations: string[]): INodeProperties => ({
	displayName: 'Phone',
	name: 'phone',
	type: 'string',
	default: '',
	required: true,
	placeholder: '5511999999999',
	description: 'Recipient phone number with country code',
	displayOptions: {
		show: {
			resource: [resource],
			operation: operations,
		},
	},
	routing: {
		send: {
			type: 'body',
			property: 'phone',
		},
	},
});

const delayMessageField = (resource: string, operations: string[]): INodeProperties => ({
	displayName: 'Delay Message (Ms)',
	name: 'delayMessage',
	type: 'number',
	default: 0,
	description: 'Delay in milliseconds before sending the message',
	displayOptions: {
		show: {
			resource: [resource],
			operation: operations,
		},
	},
	routing: {
		send: {
			type: 'body',
			property: 'delayMessage',
		},
	},
});

const allOps = [
	'sendText',
	'sendImage',
	'sendVideo',
	'sendAudio',
	'sendSticker',
	'sendGif',
	'sendDocument',
	'sendPtv',
	'sendLocation',
	'sendContact',
	'sendContacts',
	'sendLink',
];

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Send Audio',
				value: 'sendAudio',
				action: 'Send an audio file',
				routing: {
					request: {
						method: 'POST',
						url: '/send-audio',
					},
				},
			},
			{
				name: 'Send Contact',
				value: 'sendContact',
				action: 'Send a contact card',
				routing: {
					request: {
						method: 'POST',
						url: '/send-contact',
					},
				},
			},
			{
				name: 'Send Contacts',
				value: 'sendContacts',
				action: 'Send multiple contact cards',
				routing: {
					request: {
						method: 'POST',
						url: '/send-contacts',
					},
				},
			},
			{
				name: 'Send Document',
				value: 'sendDocument',
				action: 'Send a document',
				routing: {
					request: {
						method: 'POST',
						url: '/send-document',
					},
				},
			},
			{
				name: 'Send GIF',
				value: 'sendGif',
				action: 'Send a GIF',
				routing: {
					request: {
						method: 'POST',
						url: '/send-gif',
					},
				},
			},
			{
				name: 'Send Image',
				value: 'sendImage',
				action: 'Send an image',
				routing: {
					request: {
						method: 'POST',
						url: '/send-image',
					},
				},
			},
			{
				name: 'Send Link',
				value: 'sendLink',
				action: 'Send a link with preview',
				routing: {
					request: {
						method: 'POST',
						url: '/send-link',
					},
				},
			},
			{
				name: 'Send Location',
				value: 'sendLocation',
				action: 'Send a location',
				routing: {
					request: {
						method: 'POST',
						url: '/send-location',
					},
				},
			},
			{
				name: 'Send PTV',
				value: 'sendPtv',
				action: 'Send a PTV video',
				routing: {
					request: {
						method: 'POST',
						url: '/send-ptv',
					},
				},
			},
			{
				name: 'Send Sticker',
				value: 'sendSticker',
				action: 'Send a sticker',
				routing: {
					request: {
						method: 'POST',
						url: '/send-sticker',
					},
				},
			},
			{
				name: 'Send Text',
				value: 'sendText',
				action: 'Send a text message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-text',
					},
				},
			},
			{
				name: 'Send Video',
				value: 'sendVideo',
				action: 'Send a video',
				routing: {
					request: {
						method: 'POST',
						url: '/send-video',
					},
				},
			},
		],
		default: 'sendText',
	},

	// Phone field (all operations)
	phoneField('message', allOps),

	// Delay field (all operations)
	delayMessageField('message', allOps),

	// --- Send Text ---
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendText'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},

	// --- Send Image ---
	{
		displayName: 'Image',
		name: 'image',
		type: 'string',
		default: '',
		required: true,
		description: 'Image URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendImage'],
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
				resource: ['message'],
				operation: ['sendImage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Send Video ---
	{
		displayName: 'Video',
		name: 'video',
		type: 'string',
		default: '',
		required: true,
		description: 'Video URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendVideo'],
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
				resource: ['message'],
				operation: ['sendVideo'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Send Audio ---
	{
		displayName: 'Audio',
		name: 'audio',
		type: 'string',
		default: '',
		required: true,
		description: 'Audio URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendAudio'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'audio',
			},
		},
	},

	// --- Send Sticker ---
	{
		displayName: 'Sticker',
		name: 'sticker',
		type: 'string',
		default: '',
		required: true,
		description: 'Sticker URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendSticker'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'sticker',
			},
		},
	},

	// --- Send GIF ---
	{
		displayName: 'GIF',
		name: 'gif',
		type: 'string',
		default: '',
		required: true,
		description: 'GIF URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendGif'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'gif',
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
				resource: ['message'],
				operation: ['sendGif'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Send Document ---
	{
		displayName: 'Document',
		name: 'document',
		type: 'string',
		default: '',
		required: true,
		description: 'Document URL or base64 encoded data',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendDocument'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'document',
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendDocument'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'fileName',
			},
		},
	},
	{
		displayName: 'MIME Type',
		name: 'mimeType',
		type: 'string',
		default: '',
		placeholder: 'application/pdf',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendDocument'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'mimeType',
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
				resource: ['message'],
				operation: ['sendDocument'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},

	// --- Send PTV ---
	{
		displayName: 'Video',
		name: 'video',
		type: 'string',
		default: '',
		required: true,
		description: 'Video URL or base64 encoded data for PTV (video note)',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendPtv'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'video',
			},
		},
	},

	// --- Send Location ---
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'number',
		typeOptions: { numberPrecision: 8 },
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'latitude',
			},
		},
	},
	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'number',
		typeOptions: { numberPrecision: 8 },
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'longitude',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Location name',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
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
		displayName: 'Address',
		name: 'address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'address',
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},

	// --- Send Contact ---
	{
		displayName: 'Contact Name',
		name: 'contactName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendContact'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'contactName',
			},
		},
	},
	{
		displayName: 'Contact Phone',
		name: 'contactPhone',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendContact'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'contactPhone',
			},
		},
	},

	// --- Send Contacts ---
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendContacts'],
			},
		},
		options: [
			{
				displayName: 'Contact',
				name: 'contactValues',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'contacts',
			},
		},
	},

	// --- Send Link ---
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLink'],
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
		displayName: 'Image',
		name: 'image',
		type: 'string',
		default: '',
		description: 'Preview image URL',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLink'],
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
		displayName: 'Link URL',
		name: 'linkUrl',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLink'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'linkUrl',
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLink'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLink'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
];
