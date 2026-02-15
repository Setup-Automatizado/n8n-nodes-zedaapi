import type { INodeProperties } from 'n8n-workflow';

export const privacyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['privacy'],
			},
		},
		options: [
			{
				name: 'Get Settings',
				value: 'getSettings',
				action: 'Get privacy settings',
				routing: {
					request: {
						method: 'GET',
						url: '/privacy-settings',
					},
				},
			},
			{
				name: 'Update Call Add',
				value: 'updateCallAdd',
				action: 'Update who can call',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/call-add',
					},
				},
			},
			{
				name: 'Update Group Add',
				value: 'updateGroupAdd',
				action: 'Update who can add to groups',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/group-add',
					},
				},
			},
			{
				name: 'Update Last Seen',
				value: 'updateLastSeen',
				action: 'Update last seen visibility',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/last-seen',
					},
				},
			},
			{
				name: 'Update Online',
				value: 'updateOnline',
				action: 'Update online visibility',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/online',
					},
				},
			},
			{
				name: 'Update Profile Photo',
				value: 'updateProfilePhoto',
				action: 'Update profile photo visibility',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/profile-photo',
					},
				},
			},
			{
				name: 'Update Read Receipts',
				value: 'updateReadReceipts',
				action: 'Update read receipts setting',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/read-receipts',
					},
				},
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update status visibility',
				routing: {
					request: {
						method: 'PUT',
						url: '/privacy-settings/status',
					},
				},
			},
		],
		default: 'getSettings',
	},

	// --- Update Group Add ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Who can add you to groups',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateGroupAdd'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Last Seen ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Who can see your last seen',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateLastSeen'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Status ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Who can see your status',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateStatus'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Profile Photo ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Who can see your profile photo',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateProfilePhoto'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Read Receipts ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Read receipts setting',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'None', value: 'none' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateReadReceipts'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Online ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Online visibility setting',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Match Last Seen', value: 'match_last_seen' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateOnline'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// --- Update Call Add ---
	{
		displayName: 'Value',
		name: 'value',
		type: 'options',
		default: 'all',
		required: true,
		description: 'Who can call you',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Known', value: 'known' },
		],
		displayOptions: {
			show: {
				resource: ['privacy'],
				operation: ['updateCallAdd'],
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
