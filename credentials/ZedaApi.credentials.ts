import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class ZedaApi implements ICredentialType {
	name = 'zedaApi';

	displayName = 'Zeda API';

	icon: Icon = { light: 'file:../icons/zedaapi.svg', dark: 'file:../icons/zedaapi.dark.svg' };

	documentationUrl = 'https://github.com/Setup-Automatizado/zedaapi';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8080',
			placeholder: 'e.g. https://api.zedaapi.com',
			description: 'The base URL of your Zeda API instance',
		},
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			placeholder: 'e.g. 550e8400-e29b-41d4-a716-446655440000',
			description: 'The UUID of your WhatsApp instance',
		},
		{
			displayName: 'Instance Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The authentication token for your instance',
		},
		{
			displayName: 'Client Token',
			name: 'clientToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'The global client authentication token (CLIENT_AUTH_TOKEN from your server config)',
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
	};
}
