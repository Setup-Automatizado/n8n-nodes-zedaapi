import type { INodeProperties } from 'n8n-workflow';

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Block/Unblock',
				value: 'modifyBlocked',
				description: 'Block or unblock a contact',
				action: 'Block or unblock contact',
				routing: {
					request: {
						method: 'POST',
						url: '/modify-blocked',
					},
				},
			},
			{
				name: 'Get Metadata',
				value: 'getMetadata',
				description: 'Get metadata for a contact',
				action: 'Get contact metadata',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.phone}}/metadata',
					},
				},
			},
			{
				name: 'Get Profile Picture',
				value: 'getProfilePicture',
				description: 'Get the profile picture of a contact',
				action: 'Get profile picture',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.phone}}/profile-picture',
					},
				},
			},
			{
				name: 'List Contacts',
				value: 'listContacts',
				description: 'List all contacts',
				action: 'List contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Phone Exists',
				value: 'phoneExists',
				description: 'Check if a phone number exists on WhatsApp',
				action: 'Check if phone exists',
				routing: {
					request: {
						method: 'GET',
						url: '=/phone-exists/{{$parameter.phone}}',
					},
				},
			},
			{
				name: 'Phone Exists Batch',
				value: 'phoneExistsBatch',
				description: 'Check if multiple phone numbers exist on WhatsApp',
				action: 'Check if phones exist batch',
				routing: {
					request: {
						method: 'POST',
						url: '/phone-exists-batch',
					},
				},
			},
		],
		default: 'listContacts',
	},

	// ------ List Contacts fields ------
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['listContacts'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		default: 100,
		description: 'Number of items per page',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['listContacts'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
		},
	},

	// ------ Phone Exists fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['phoneExists'],
			},
		},
	},

	// ------ Phone Exists Batch fields ------
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to check',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['phoneExistsBatch'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phones',
				value: '={{$value.split(",").map(p => p.trim())}}',
			},
		},
	},

	// ------ Get Metadata fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['getMetadata'],
			},
		},
	},

	// ------ Get Profile Picture fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['getProfilePicture'],
			},
		},
	},

	// ------ Block/Unblock fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['modifyBlocked'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Block', value: 'block', action: 'Block a contact' },
			{ name: 'Unblock', value: 'unblock', action: 'Unblock a contact' },
		],
		default: 'block',
		required: true,
		description: 'Whether to block or unblock the contact',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['modifyBlocked'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
	},
];
