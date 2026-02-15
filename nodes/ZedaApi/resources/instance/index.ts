import type { INodeProperties } from 'n8n-workflow';

export const instanceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['instance'],
			},
		},
		options: [
			{
				name: 'Disconnect',
				value: 'disconnect',
				action: 'Disconnect instance',
				routing: {
					request: {
						method: 'POST',
						url: '/disconnect',
					},
				},
			},
			{
				name: 'Get Device Info',
				value: 'getDeviceInfo',
				action: 'Get device information',
				routing: {
					request: {
						method: 'GET',
						url: '/device',
					},
				},
			},
			{
				name: 'Get Phone Code',
				value: 'getPhoneCode',
				action: 'Get phone pairing code',
				routing: {
					request: {
						method: 'GET',
						url: '=/phone-code/{{$parameter.phone}}',
					},
				},
			},
			{
				name: 'Get QR Code',
				value: 'getQrCode',
				action: 'Get QR code data',
				routing: {
					request: {
						method: 'GET',
						url: '/qr-code',
					},
				},
			},
			{
				name: 'Get QR Code Image',
				value: 'getQrCodeImage',
				action: 'Get QR code as image',
				routing: {
					request: {
						method: 'GET',
						url: '/qr-code/image',
					},
				},
			},
			{
				name: 'Get Status',
				value: 'getStatus',
				action: 'Get instance status',
				routing: {
					request: {
						method: 'GET',
						url: '/status',
					},
				},
			},
			{
				name: 'Restart',
				value: 'restart',
				action: 'Restart instance',
				routing: {
					request: {
						method: 'POST',
						url: '/restart',
					},
				},
			},
			{
				name: 'Update Auto Read Message',
				value: 'updateAutoReadMessage',
				action: 'Enable or disable auto read messages',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-auto-read-message',
					},
				},
			},
			{
				name: 'Update Call Reject Auto',
				value: 'updateCallRejectAuto',
				action: 'Enable or disable auto reject calls',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-call-reject-auto',
					},
				},
			},
			{
				name: 'Update Call Reject Message',
				value: 'updateCallRejectMessage',
				action: 'Set auto reject call message',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-call-reject-message',
					},
				},
			},
		],
		default: 'getStatus',
	},

	// --- Get Phone Code ---
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: '5511999999999',
		description: 'Phone number to get the pairing code for',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['getPhoneCode'],
			},
		},
	},

	// --- Update Auto Read Message ---
	{
		displayName: 'Enable',
		name: 'value',
		type: 'boolean',
		default: false,
		required: true,
		description: 'Whether to automatically mark incoming messages as read',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['updateAutoReadMessage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Call Reject Auto ---
	{
		displayName: 'Enable',
		name: 'value',
		type: 'boolean',
		default: false,
		required: true,
		description: 'Whether to automatically reject all incoming calls',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['updateCallRejectAuto'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Call Reject Message ---
	{
		displayName: 'Message',
		name: 'value',
		type: 'string',
		default: '',
		placeholder: 'e.g. Sorry, I cannot take calls right now',
		description: 'Message to send when automatically rejecting calls. Leave empty to clear.',
		displayOptions: {
			show: {
				resource: ['instance'],
				operation: ['updateCallRejectMessage'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},
];
