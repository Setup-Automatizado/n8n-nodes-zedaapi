import type { INodeProperties } from 'n8n-workflow';

export const proxyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['proxy'],
			},
		},
		options: [
			{
				name: 'Get Config',
				value: 'getConfig',
				action: 'Get proxy configuration',
				routing: {
					request: {
						method: 'GET',
						url: '/proxy',
					},
				},
			},
			{
				name: 'Get Health',
				value: 'getHealth',
				action: 'Get proxy health status and logs',
				routing: {
					request: {
						method: 'GET',
						url: '/proxy/health',
					},
				},
			},
			{
				name: 'Remove',
				value: 'remove',
				action: 'Remove proxy configuration',
				routing: {
					request: {
						method: 'DELETE',
						url: '/proxy',
					},
				},
			},
			{
				name: 'Swap',
				value: 'swap',
				action: 'Hot swap to a different proxy',
				routing: {
					request: {
						method: 'POST',
						url: '/proxy/swap',
					},
				},
			},
			{
				name: 'Test',
				value: 'test',
				action: 'Test proxy connectivity',
				routing: {
					request: {
						method: 'POST',
						url: '/proxy/test',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Set or update proxy configuration',
				routing: {
					request: {
						method: 'PUT',
						url: '/update-proxy',
					},
				},
			},
		],
		default: 'getConfig',
	},

	// ------ Proxy URL (shared by Update, Test, Swap) ------
	{
		displayName: 'Proxy URL',
		name: 'proxyUrl',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. http://proxy.example.com:8080',
		description: 'The proxy URL (http://, https://, or socks5://)',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['update', 'test', 'swap'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'proxyUrl',
			},
		},
	},

	// ------ Update proxy options ------
	{
		displayName: 'No Websocket',
		name: 'noWebsocket',
		type: 'boolean',
		default: false,
		description: 'Whether to disable websocket connections through the proxy',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'noWebsocket',
			},
		},
	},
	{
		displayName: 'Only Login',
		name: 'onlyLogin',
		type: 'boolean',
		default: false,
		description: 'Whether to only use the proxy during the login/pairing phase',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'onlyLogin',
			},
		},
	},
	{
		displayName: 'No Media',
		name: 'noMedia',
		type: 'boolean',
		default: false,
		description: 'Whether to skip proxying media downloads and uploads',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'noMedia',
			},
		},
	},
];
