import type { INodeProperties } from 'n8n-workflow';

export const profileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'Update Name',
				value: 'updateName',
				action: 'Update profile name',
				routing: {
					request: {
						method: 'PUT',
						url: '/profile-name',
					},
				},
			},
			{
				name: 'Update Picture',
				value: 'updatePicture',
				action: 'Update profile picture',
				routing: {
					request: {
						method: 'PUT',
						url: '/profile-picture',
					},
				},
			},
			{
				name: 'Update Description',
				value: 'updateDescription',
				action: 'Update profile description',
				routing: {
					request: {
						method: 'PUT',
						url: '/profile-description',
					},
				},
			},
		],
		default: 'updateName',
	},

	// --- Update Name ---
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new profile name',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updateName'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},

	// --- Update Picture ---
	{
		displayName: 'Picture',
		name: 'picture',
		type: 'string',
		default: '',
		required: true,
		description: 'Profile picture URL or base64 encoded image',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePicture'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'picture',
			},
		},
	},

	// --- Update Description ---
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		description: 'The new profile description (status/about)',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updateDescription'],
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
