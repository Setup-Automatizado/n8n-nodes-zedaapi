import type { INodeProperties } from 'n8n-workflow';

export const interactiveMessageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
			},
		},
		options: [
			{
				name: 'Send Button Actions',
				value: 'sendButtonActions',
				action: 'Send button actions message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-button-actions',
					},
				},
			},
			{
				name: 'Send Button List',
				value: 'sendButtonList',
				action: 'Send a button list message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-button-list',
					},
				},
			},
			{
				name: 'Send Button OTP',
				value: 'sendButtonOtp',
				action: 'Send an OTP button',
				routing: {
					request: {
						method: 'POST',
						url: '/send-button-otp',
					},
				},
			},
			{
				name: 'Send Button PIX',
				value: 'sendButtonPix',
				action: 'Send a PIX payment button',
				routing: {
					request: {
						method: 'POST',
						url: '/send-button-pix',
					},
				},
			},
			{
				name: 'Send Carousel',
				value: 'sendCarousel',
				action: 'Send a carousel message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-carousel',
					},
				},
			},
			{
				name: 'Send Option List',
				value: 'sendOptionList',
				action: 'Send an option list message',
				routing: {
					request: {
						method: 'POST',
						url: '/send-option-list',
					},
				},
			},
		],
		default: 'sendButtonList',
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
				resource: ['interactiveMessage'],
				operation: [
					'sendButtonList',
					'sendButtonActions',
					'sendOptionList',
					'sendButtonPix',
					'sendButtonOtp',
					'sendCarousel',
				],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// ============ Send Button List ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonList'],
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonList'],
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
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonList'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},
	{
		displayName: 'Image',
		name: 'image',
		type: 'string',
		default: '',
		description: 'Image URL or base64',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonList'],
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
		displayName: 'Buttons',
		name: 'buttonList',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		description: 'Buttons to display (max 3)',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonList'],
			},
		},
		options: [
			{
				displayName: 'Button',
				name: 'buttons',
				values: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Label',
						name: 'label',
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
				property: 'buttonList',
			},
		},
	},

	// ============ Send Button Actions ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonActions'],
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonActions'],
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
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonActions'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},
	{
		displayName: 'Buttons',
		name: 'buttonActions',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonActions'],
			},
		},
		options: [
			{
				displayName: 'Button',
				name: 'buttons',
				values: [
					{
						displayName: 'Copy Code',
						name: 'copyCode',
						type: 'string',
						default: '',
						description: 'Code to copy for cta_copy type buttons',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Label',
						name: 'label',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						description: 'Phone number for cta_call type buttons',
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Quick Reply',
								value: 'quick_reply',
							},
							{
								name: 'CTA URL',
								value: 'cta_url',
							},
							{
								name: 'CTA Call',
								value: 'cta_call',
							},
							{
								name: 'CTA Copy',
								value: 'cta_copy',
							},
						],
						default: 'quick_reply',
						required: true,
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL for cta_url type buttons',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'buttonActions',
			},
		},
	},

	// ============ Send Option List ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendOptionList'],
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendOptionList'],
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
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendOptionList'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},
	{
		displayName: 'Button Label',
		name: 'buttonLabel',
		type: 'string',
		default: '',
		description: 'Label for the list open button',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendOptionList'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'buttonLabel',
			},
		},
	},
	{
		displayName: 'Sections',
		name: 'optionList',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendOptionList'],
			},
		},
		options: [
			{
				displayName: 'Section',
				name: 'sections',
				values: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Rows',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								displayName: 'Row',
								name: 'rowValues',
								values: [
									{
										displayName: 'ID',
										name: 'id',
										type: 'string',
										default: '',
										required: true,
									},
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'optionList',
			},
		},
	},

	// ============ Send Button PIX ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
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
		displayName: 'PIX Key',
		name: 'pixKey',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'pixKey',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{ name: 'CNPJ', value: 'CNPJ' },
			{ name: 'CPF', value: 'CPF' },
			{ name: 'Email', value: 'EMAIL' },
			{ name: 'EVP', value: 'EVP' },
			{ name: 'Phone', value: 'PHONE' },
		],
		default: 'CPF',
		required: true,
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Recipient name for PIX',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
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
		displayName: 'Transaction ID',
		name: 'transactionId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'transactionId',
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		typeOptions: { numberPrecision: 2 },
		default: 0,
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'amount',
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
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
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
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonPix'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},

	// ============ Send Button OTP ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonOtp'],
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
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		required: true,
		description: 'OTP code to send',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonOtp'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'code',
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
				resource: ['interactiveMessage'],
				operation: ['sendButtonOtp'],
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
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendButtonOtp'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},

	// ============ Send Carousel ============
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendCarousel'],
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
		displayName: 'Card Type',
		name: 'cardType',
		type: 'options',
		options: [
			{ name: 'Horizontal Scroll Cards', value: 'HSCROLL_CARDS' },
			{ name: 'Album Image', value: 'ALBUM_IMAGE' },
		],
		default: 'HSCROLL_CARDS',
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendCarousel'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'cardType',
			},
		},
	},
	{
		displayName: 'Cards',
		name: 'cards',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['interactiveMessage'],
				operation: ['sendCarousel'],
			},
		},
		options: [
			{
				displayName: 'Card',
				name: 'cardValues',
				values: [
					{
						displayName: 'Body Text',
						name: 'bodyText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Media URL',
						name: 'mediaUrl',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Media Type',
						name: 'mediaType',
						type: 'options',
						options: [
							{ name: 'Image', value: 'image' },
							{ name: 'Video', value: 'video' },
						],
						default: 'image',
					},
					{
						displayName: 'Buttons',
						name: 'buttons',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								displayName: 'Button',
								name: 'buttonValues',
								values: [
									{
										displayName: 'ID',
										name: 'id',
										type: 'string',
										default: '',
										required: true,
									},
									{
										displayName: 'Label',
										name: 'label',
										type: 'string',
										default: '',
										required: true,
									},
									{
										displayName: 'Type',
										name: 'type',
										type: 'options',
										options: [
											{ name: 'Quick Reply', value: 'quick_reply' },
											{ name: 'CTA URL', value: 'cta_url' },
										],
										default: 'quick_reply',
									},
									{
										displayName: 'URL',
										name: 'url',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'cards',
			},
		},
	},
];
