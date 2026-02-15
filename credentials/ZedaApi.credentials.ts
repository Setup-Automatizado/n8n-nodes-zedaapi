import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class ZedaApi implements ICredentialType {
	name = 'zedaApi';

	displayName = 'Ze Da API';

	icon: Icon = { light: 'file:../icons/zedaapi.svg', dark: 'file:../icons/zedaapi.dark.svg' };

	documentationUrl = 'https://github.com/Setup-Automatizado/zedaapi';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8080',
			placeholder: 'e.g. https://api.zedaapi.com',
			description:
				'The base URL of your Ze da API server (not the dashboard URL). This is the direct API endpoint.',
		},
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			placeholder: 'e.g. 403679c1-ab53-4210-8981-6e4485068be3',
			description:
				'The UUID that identifies your WhatsApp instance. This is NOT the token — find it in your dashboard instance list.',
		},
		{
			displayName: 'Instance Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'e.g. f7fc72aa-b7c2-4a81-a0e8-b9cbad955f43',
			description:
				'The per-instance authentication token. This is different from the Instance ID — find it in your instance settings.',
		},
		{
			displayName: 'Client Token',
			name: 'clientToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'The global CLIENT_AUTH_TOKEN from your server configuration. Required for all API requests.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Client-Token': '={{$credentials.clientToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL:
				'={{$credentials.baseUrl}}/instances/{{$credentials.instanceId}}/token/{{$credentials.token}}',
			url: '/status',
			method: 'GET',
		},
		rules: [
			{
				type: 'responseCode',
				properties: {
					value: 404,
					message:
						'Instance not found. Please verify that the Instance ID is correct — it must be the instance UUID, not the token.',
				},
			},
			{
				type: 'responseCode',
				properties: {
					value: 401,
					message:
						'Invalid credentials. Please verify your Instance Token and Client Token are correct.',
				},
			},
		],
	};
}
