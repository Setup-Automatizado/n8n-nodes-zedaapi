import type { INodeProperties } from 'n8n-workflow';

export const newsletterDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['newsletter'],
			},
		},
		options: [
			{
				name: 'Accept Admin Invite',
				value: 'acceptAdminInvite',
				description: 'Accept an admin invite for a newsletter',
				action: 'Accept admin invite',
				routing: {
					request: {
						method: 'POST',
						url: '=/newsletter/accept-admin-invite/{{$parameter.newsletterId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new newsletter',
				action: 'Create newsletter',
				routing: {
					request: {
						method: 'POST',
						url: '/create-newsletter',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a newsletter',
				action: 'Delete newsletter',
				routing: {
					request: {
						method: 'DELETE',
						url: '/delete-newsletter',
					},
				},
			},
			{
				name: 'Follow',
				value: 'follow',
				description: 'Follow a newsletter',
				action: 'Follow newsletter',
				routing: {
					request: {
						method: 'PUT',
						url: '/follow-newsletter',
					},
				},
			},
			{
				name: 'Get Metadata',
				value: 'getMetadata',
				description: 'Get metadata of a newsletter',
				action: 'Get newsletter metadata',
				routing: {
					request: {
						method: 'GET',
						url: '=/newsletter/metadata/{{$parameter.newsletterId}}',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all newsletters',
				action: 'List newsletters',
				routing: {
					request: {
						method: 'GET',
						url: '/newsletter',
					},
				},
			},
			{
				name: 'Mute',
				value: 'mute',
				description: 'Mute a newsletter',
				action: 'Mute newsletter',
				routing: {
					request: {
						method: 'PUT',
						url: '/mute-newsletter',
					},
				},
			},
			{
				name: 'Remove Admin',
				value: 'removeAdmin',
				description: 'Remove an admin from a newsletter',
				action: 'Remove newsletter admin',
				routing: {
					request: {
						method: 'POST',
						url: '=/newsletter/remove-admin/{{$parameter.newsletterId}}',
					},
				},
			},
			{
				name: 'Revoke Admin Invite',
				value: 'revokeAdminInvite',
				description: 'Revoke an admin invite for a newsletter',
				action: 'Revoke admin invite',
				routing: {
					request: {
						method: 'POST',
						url: '=/newsletter/revoke-admin-invite/{{$parameter.newsletterId}}',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search for newsletters',
				action: 'Search newsletters',
				routing: {
					request: {
						method: 'POST',
						url: '/search-newsletter',
					},
				},
			},
			{
				name: 'Send Admin Invite',
				value: 'sendAdminInvite',
				description: 'Send an admin invite for a newsletter',
				action: 'Send admin invite',
				routing: {
					request: {
						method: 'POST',
						url: '/send-newsletter-admin-invite',
					},
				},
			},
			{
				name: 'Transfer Ownership',
				value: 'transferOwnership',
				description: 'Transfer ownership of a newsletter',
				action: 'Transfer newsletter ownership',
				routing: {
					request: {
						method: 'POST',
						url: '=/newsletter/transfer-ownership/{{$parameter.newsletterId}}',
					},
				},
			},
			{
				name: 'Unfollow',
				value: 'unfollow',
				description: 'Unfollow a newsletter',
				action: 'Unfollow newsletter',
				routing: {
					request: {
						method: 'PUT',
						url: '/unfollow-newsletter',
					},
				},
			},
			{
				name: 'Unmute',
				value: 'unmute',
				description: 'Unmute a newsletter',
				action: 'Unmute newsletter',
				routing: {
					request: {
						method: 'PUT',
						url: '/unmute-newsletter',
					},
				},
			},
			{
				name: 'Update Description',
				value: 'updateDescription',
				description: 'Update the description of a newsletter',
				action: 'Update newsletter description',
				routing: {
					request: {
						method: 'POST',
						url: '/update-newsletter-description',
					},
				},
			},
			{
				name: 'Update Name',
				value: 'updateName',
				description: 'Update the name of a newsletter',
				action: 'Update newsletter name',
				routing: {
					request: {
						method: 'POST',
						url: '/update-newsletter-name',
					},
				},
			},
			{
				name: 'Update Picture',
				value: 'updatePicture',
				description: 'Update the picture of a newsletter',
				action: 'Update newsletter picture',
				routing: {
					request: {
						method: 'POST',
						url: '/update-newsletter-picture',
					},
				},
			},
			{
				name: 'Update Settings',
				value: 'updateSettings',
				description: 'Update newsletter settings',
				action: 'Update newsletter settings',
				routing: {
					request: {
						method: 'POST',
						url: '=/newsletter/settings/{{$parameter.newsletterId}}',
					},
				},
			},
		],
		default: 'list',
	},

	// ------ List fields ------
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['list'],
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
				resource: ['newsletter'],
				operation: ['list'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
		},
	},

	// ------ Create fields ------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['create'],
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
		description: 'The description of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['create'],
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
		displayName: 'Picture',
		name: 'picture',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'URL or base64-encoded image for the newsletter picture',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'picture',
			},
		},
	},

	// ------ Search fields ------
	{
		displayName: 'Search Text',
		name: 'searchText',
		type: 'string',
		default: '',
		required: true,
		description: 'Text to search for in newsletters',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['search'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'searchText',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['search'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'View',
		name: 'view',
		type: 'string',
		default: '',
		description: 'View filter for the search',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['search'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'view',
			},
		},
	},
	{
		displayName: 'Country Codes',
		name: 'countryCodes',
		type: 'string',
		default: '',
		placeholder: 'e.g. BR,US',
		description: 'Comma-separated list of country codes to filter by',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['search'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'countryCodes',
				value: '={{$value.split(",").map(c => c.trim())}}',
			},
		},
	},

	// ------ Delete fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter to delete',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['delete'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},

	// ------ Update Picture fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['updatePicture'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Picture',
		name: 'picture',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. https://example.com/image.jpg',
		description: 'URL or base64-encoded image for the newsletter picture',
		displayOptions: {
			show: {
				resource: ['newsletter'],
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

	// ------ Update Name fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['updateName'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
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

	// ------ Update Description fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['updateDescription'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		description: 'The new description for the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
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

	// ------ Update Settings fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['updateSettings'],
			},
		},
	},
	{
		displayName: 'Reaction Codes',
		name: 'reactionCodes',
		type: 'string',
		default: '',
		description: 'Reaction codes setting for the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'reactionCodes',
			},
		},
	},

	// ------ Follow fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter to follow',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['follow'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},

	// ------ Unfollow fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter to unfollow',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['unfollow'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},

	// ------ Mute fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter to mute',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['mute'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},

	// ------ Unmute fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter to unmute',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['unmute'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},

	// ------ Get Metadata fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['getMetadata'],
			},
		},
	},

	// ------ Send Admin Invite fields ------
	{
		displayName: 'Newsletter ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['sendAdminInvite'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number to invite as admin',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['sendAdminInvite'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// ------ Accept Admin Invite fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['acceptAdminInvite'],
			},
		},
	},

	// ------ Remove Admin fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['removeAdmin'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number of the admin to remove',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['removeAdmin'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// ------ Revoke Admin Invite fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['revokeAdminInvite'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number whose admin invite to revoke',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['revokeAdminInvite'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},

	// ------ Transfer Ownership fields ------
	{
		displayName: 'Newsletter ID',
		name: 'newsletterId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the newsletter',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['transferOwnership'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number to transfer ownership to',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['transferOwnership'],
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
		displayName: 'Quit Admin',
		name: 'quitAdmin',
		type: 'boolean',
		default: false,
		description: 'Whether to quit admin role after transferring ownership',
		displayOptions: {
			show: {
				resource: ['newsletter'],
				operation: ['transferOwnership'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'quitAdmin',
			},
		},
	},
];
