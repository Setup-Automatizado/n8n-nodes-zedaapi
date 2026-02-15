import type { INodeProperties } from 'n8n-workflow';

export const communityDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['community'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new community',
				action: 'Create community',
				routing: {
					request: {
						method: 'POST',
						url: '/communities',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a community',
				action: 'Delete community',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/communities/{{$parameter.communityId}}',
					},
				},
			},
			{
				name: 'Get Metadata',
				value: 'getMetadata',
				description: 'Get metadata of a community',
				action: 'Get community metadata',
				routing: {
					request: {
						method: 'GET',
						url: '=/communities-metadata/{{$parameter.communityId}}',
					},
				},
			},
			{
				name: 'Link Groups',
				value: 'linkGroups',
				description: 'Link groups to a community',
				action: 'Link groups to community',
				routing: {
					request: {
						method: 'POST',
						url: '/communities/link',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all communities',
				action: 'List communities',
				routing: {
					request: {
						method: 'GET',
						url: '/communities',
					},
				},
			},
			{
				name: 'Redefine Invitation Link',
				value: 'redefineInvitationLink',
				description: 'Redefine the invitation link of a community',
				action: 'Redefine community invitation link',
				routing: {
					request: {
						method: 'POST',
						url: '=/redefine-invitation-link/{{$parameter.communityId}}',
					},
				},
			},
			{
				name: 'Unlink Groups',
				value: 'unlinkGroups',
				description: 'Unlink groups from a community',
				action: 'Unlink groups from community',
				routing: {
					request: {
						method: 'POST',
						url: '/communities/unlink',
					},
				},
			},
			{
				name: 'Update Description',
				value: 'updateDescription',
				description: 'Update the description of a community',
				action: 'Update community description',
				routing: {
					request: {
						method: 'POST',
						url: '/update-community-description',
					},
				},
			},
			{
				name: 'Update Settings',
				value: 'updateSettings',
				description: 'Update community settings',
				action: 'Update community settings',
				routing: {
					request: {
						method: 'POST',
						url: '/communities/settings',
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
				resource: ['community'],
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
				resource: ['community'],
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
		description: 'The name of the community',
		displayOptions: {
			show: {
				resource: ['community'],
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
		description: 'The description of the community',
		displayOptions: {
			show: {
				resource: ['community'],
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

	// ------ Delete fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['delete'],
			},
		},
	},

	// ------ Link Groups fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['linkGroups'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'communityId',
			},
		},
	},
	{
		displayName: 'Group IDs',
		name: 'groupIds',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. groupId1,groupId2',
		description: 'Comma-separated list of group IDs to link',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['linkGroups'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupIds',
				value: '={{$value.split(",").map(g => g.trim())}}',
			},
		},
	},

	// ------ Unlink Groups fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['unlinkGroups'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'communityId',
			},
		},
	},
	{
		displayName: 'Group IDs',
		name: 'groupIds',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. groupId1,groupId2',
		description: 'Comma-separated list of group IDs to unlink',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['unlinkGroups'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupIds',
				value: '={{$value.split(",").map(g => g.trim())}}',
			},
		},
	},

	// ------ Get Metadata fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['getMetadata'],
			},
		},
	},

	// ------ Update Settings fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'communityId',
			},
		},
	},
	{
		displayName: 'Who Can Add New Groups',
		name: 'whoCanAddNewGroups',
		type: 'string',
		default: '',
		required: true,
		description: 'Setting for who can add new groups to the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'whoCanAddNewGroups',
			},
		},
	},

	// ------ Update Description fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['updateDescription'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'communityId',
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
		description: 'The new description for the community',
		displayOptions: {
			show: {
				resource: ['community'],
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

	// ------ Redefine Invitation Link fields ------
	{
		displayName: 'Community ID',
		name: 'communityId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the community',
		displayOptions: {
			show: {
				resource: ['community'],
				operation: ['redefineInvitationLink'],
			},
		},
	},
];
