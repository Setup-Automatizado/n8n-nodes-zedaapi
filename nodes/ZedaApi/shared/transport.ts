import type {
	IHookFunctions,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IDataObject,
	IHttpRequestOptions,
} from 'n8n-workflow';

export async function zedaApiRequest(
	this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject | undefined = undefined,
	qs: IDataObject = {},
) {
	const credentials = await this.getCredentials('zedaApi');
	const baseUrl = credentials.baseUrl as string;
	const instanceId = credentials.instanceId as string;
	const token = credentials.token as string;

	const options: IHttpRequestOptions = {
		method,
		url: `${baseUrl}/instances/${instanceId}/token/${token}${resource}`,
		qs,
		body,
		json: true,
	};

	return this.helpers.httpRequestWithAuthentication.call(this, 'zedaApi', options);
}
