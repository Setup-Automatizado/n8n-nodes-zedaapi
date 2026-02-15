import type { INodeProperties } from 'n8n-workflow';

export const groupDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'Accept Invite',
				value: 'acceptInvite',
				description: 'Accept a group invitation via URL',
				action: 'Accept group invite',
				routing: {
					request: {
						method: 'GET',
						url: '/accept-invite-group',
					},
				},
			},
			{
				name: 'Add Admin',
				value: 'addAdmin',
				description: 'Promote participants to admin',
				action: 'Add admin',
				routing: {
					request: {
						method: 'POST',
						url: '/add-admin',
					},
				},
			},
			{
				name: 'Add Participant',
				value: 'addParticipant',
				description: 'Add participants to a group',
				action: 'Add participant',
				routing: {
					request: {
						method: 'POST',
						url: '/add-participant',
					},
				},
			},
			{
				name: 'Approve Participant',
				value: 'approveParticipant',
				description: 'Approve pending participants',
				action: 'Approve participant',
				routing: {
					request: {
						method: 'POST',
						url: '/approve-participant',
					},
				},
			},
			{
				name: 'Create Group',
				value: 'createGroup',
				description: 'Create a new group',
				action: 'Create group',
				routing: {
					request: {
						method: 'POST',
						url: '/create-group',
					},
				},
			},
			{
				name: 'Get Invitation Link',
				value: 'getInvitationLink',
				description: 'Get the invitation link of a group',
				action: 'Get invitation link',
				routing: {
					request: {
						method: 'POST',
						url: '=/group-invitation-link/{{$parameter.groupId}}',
					},
				},
			},
			{
				name: 'Get Invitation Metadata',
				value: 'getInvitationMetadata',
				description: 'Get metadata of a group invitation link',
				action: 'Get invitation metadata',
				routing: {
					request: {
						method: 'GET',
						url: '/group-invitation-metadata',
					},
				},
			},
			{
				name: 'Get Light Metadata',
				value: 'getLightMetadata',
				description: 'Get light metadata of a group',
				action: 'Get light group metadata',
				routing: {
					request: {
						method: 'GET',
						url: '=/light-group-metadata/{{$parameter.groupId}}',
					},
				},
			},
			{
				name: 'Get Metadata',
				value: 'getMetadata',
				description: 'Get full metadata of a group',
				action: 'Get group metadata',
				routing: {
					request: {
						method: 'GET',
						url: '=/group-metadata/{{$parameter.groupId}}',
					},
				},
			},
			{
				name: 'Leave Group',
				value: 'leaveGroup',
				description: 'Leave a group',
				action: 'Leave group',
				routing: {
					request: {
						method: 'POST',
						url: '/leave-group',
					},
				},
			},
			{
				name: 'List Groups',
				value: 'listGroups',
				description: 'List all groups',
				action: 'List groups',
				routing: {
					request: {
						method: 'GET',
						url: '/groups',
					},
				},
			},
			{
				name: 'Redefine Invitation Link',
				value: 'redefineInvitationLink',
				description: 'Redefine the invitation link of a group',
				action: 'Redefine invitation link',
				routing: {
					request: {
						method: 'POST',
						url: '=/redefine-invitation-link/{{$parameter.groupId}}',
					},
				},
			},
			{
				name: 'Reject Participant',
				value: 'rejectParticipant',
				description: 'Reject pending participants',
				action: 'Reject participant',
				routing: {
					request: {
						method: 'POST',
						url: '/reject-participant',
					},
				},
			},
			{
				name: 'Remove Admin',
				value: 'removeAdmin',
				description: 'Demote admins to regular participants',
				action: 'Remove admin',
				routing: {
					request: {
						method: 'POST',
						url: '/remove-admin',
					},
				},
			},
			{
				name: 'Remove Participant',
				value: 'removeParticipant',
				description: 'Remove participants from a group',
				action: 'Remove participant',
				routing: {
					request: {
						method: 'POST',
						url: '/remove-participant',
					},
				},
			},
			{
				name: 'Update Description',
				value: 'updateDescription',
				description: 'Update the description of a group',
				action: 'Update group description',
				routing: {
					request: {
						method: 'POST',
						url: '/update-group-description',
					},
				},
			},
			{
				name: 'Update Name',
				value: 'updateName',
				description: 'Update the name of a group',
				action: 'Update group name',
				routing: {
					request: {
						method: 'POST',
						url: '/update-group-name',
					},
				},
			},
			{
				name: 'Update Photo',
				value: 'updatePhoto',
				description: 'Update the photo of a group',
				action: 'Update group photo',
				routing: {
					request: {
						method: 'POST',
						url: '/update-group-photo',
					},
				},
			},
			{
				name: 'Update Settings',
				value: 'updateSettings',
				description: 'Update group settings',
				action: 'Update group settings',
				routing: {
					request: {
						method: 'POST',
						url: '/update-group-settings',
					},
				},
			},
		],
		default: 'listGroups',
	},

	// ------ List Groups fields ------
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['listGroups'],
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
				resource: ['group'],
				operation: ['listGroups'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'pageSize',
			},
		},
	},

	// ------ Create Group fields ------
	{
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the group to create',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createGroup'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupName',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to add to the group',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createGroup'],
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
	{
		displayName: 'Auto Invite',
		name: 'autoInvite',
		type: 'boolean',
		default: true,
		description: 'Whether to automatically send invites to participants',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createGroup'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'autoInvite',
			},
		},
	},

	// ------ Update Name fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateName'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the group',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateName'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupName',
			},
		},
	},

	// ------ Update Photo fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updatePhoto'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Group Photo',
		name: 'groupPhoto',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. https://example.com/photo.jpg',
		description: 'URL or base64-encoded image for the group photo',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updatePhoto'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupPhoto',
			},
		},
	},

	// ------ Update Description fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateDescription'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Group Description',
		name: 'groupDescription',
		type: 'string',
		typeOptions: { rows: 3 },
		default: '',
		required: true,
		description: 'The new description for the group',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateDescription'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupDescription',
			},
		},
	},

	// ------ Update Settings fields ------
	{
		displayName: 'Group ID',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSettings'],
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
		displayName: 'Admin Only Message',
		name: 'adminOnlyMessage',
		type: 'boolean',
		default: false,
		description: 'Whether only admins can send messages',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'adminOnlyMessage',
			},
		},
	},
	{
		displayName: 'Admin Only Settings',
		name: 'adminOnlySettings',
		type: 'boolean',
		default: false,
		description: 'Whether only admins can change group settings',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'adminOnlySettings',
			},
		},
	},
	{
		displayName: 'Require Admin Approval',
		name: 'requireAdminApproval',
		type: 'boolean',
		default: false,
		description: 'Whether new members require admin approval',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'requireAdminApproval',
			},
		},
	},
	{
		displayName: 'Admin Only Add Member',
		name: 'adminOnlyAddMember',
		type: 'boolean',
		default: false,
		description: 'Whether only admins can add new members',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['updateSettings'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'adminOnlyAddMember',
			},
		},
	},

	// ------ Add Participant fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['addParticipant'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to add',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['addParticipant'],
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
	{
		displayName: 'Auto Invite',
		name: 'autoInvite',
		type: 'boolean',
		default: true,
		description: 'Whether to automatically send invites to participants',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['addParticipant'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'autoInvite',
			},
		},
	},

	// ------ Remove Participant fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['removeParticipant'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to remove',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['removeParticipant'],
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

	// ------ Approve Participant fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['approveParticipant'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to approve',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['approveParticipant'],
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

	// ------ Reject Participant fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['rejectParticipant'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to reject',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['rejectParticipant'],
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

	// ------ Add Admin fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['addAdmin'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to promote to admin',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['addAdmin'],
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

	// ------ Remove Admin fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['removeAdmin'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999,5511888888888',
		description: 'Comma-separated list of phone numbers to demote from admin',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['removeAdmin'],
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

	// ------ Leave Group fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['leaveGroup'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'groupId',
			},
		},
	},

	// ------ Get Metadata fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getMetadata'],
			},
		},
	},

	// ------ Get Light Metadata fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getLightMetadata'],
			},
		},
	},

	// ------ Get Invitation Metadata fields ------
	{
		displayName: 'Invite URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. https://chat.whatsapp.com/abc123',
		description: 'The WhatsApp group invitation URL',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getInvitationMetadata'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'url',
			},
		},
	},

	// ------ Get Invitation Link fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getInvitationLink'],
			},
		},
	},

	// ------ Redefine Invitation Link fields ------
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'The WhatsApp group ID',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['redefineInvitationLink'],
			},
		},
	},

	// ------ Accept Invite fields ------
	{
		displayName: 'Invite URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. https://chat.whatsapp.com/abc123',
		description: 'The WhatsApp group invitation URL',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['acceptInvite'],
			},
		},
		routing: {
			send: {
				type: 'query',
				property: 'url',
			},
		},
	},
];
