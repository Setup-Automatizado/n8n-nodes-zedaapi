import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	IHookFunctions,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

// ---------------------------------------------------------------------------
// HTML Templates
// ---------------------------------------------------------------------------

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

const BASE_STYLES = `
	* { box-sizing: border-box; margin: 0; padding: 0; }
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #f5f5f5; color: #333; min-height: 100vh;
		display: flex; justify-content: center; align-items: center; padding: 20px;
	}
	.card {
		background: white; border-radius: 16px; padding: 32px;
		max-width: 480px; width: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.08);
	}
	h2 { font-size: 20px; margin-bottom: 8px; color: #111; }
	.message { margin: 16px 0 24px; padding: 16px; background: #f9fafb; border-radius: 10px; line-height: 1.6; white-space: pre-wrap; }
	.buttons { display: flex; gap: 12px; flex-wrap: wrap; }
	.btn {
		display: inline-flex; align-items: center; justify-content: center;
		padding: 12px 28px; border-radius: 10px; font-size: 15px; font-weight: 600;
		text-decoration: none; border: none; cursor: pointer; transition: all 0.15s;
	}
	.btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
	.btn-primary { background: #22c55e; color: white; }
	.btn-secondary { background: #ef4444; color: white; }
	.btn-neutral { background: #6b7280; color: white; }
	textarea {
		width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 10px;
		font-size: 15px; font-family: inherit; resize: vertical; min-height: 120px;
		margin-bottom: 16px;
	}
	textarea:focus { outline: none; border-color: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,0.15); }
	.footer { margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center; }
`;

function renderApprovalPage(
	message: string,
	webhookUrl: string,
	approveLabel: string,
	disapproveLabel: string | null,
): string {
	const disapproveBtn = disapproveLabel
		? `<a href="${webhookUrl}?approved=false" class="btn btn-secondary">${escapeHtml(disapproveLabel)}</a>`
		: '';

	return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Approval Required</title>
<style>${BASE_STYLES}</style>
</head><body>
<div class="card">
	<h2>Approval Required</h2>
	<div class="message">${escapeHtml(message)}</div>
	<div class="buttons">
		<a href="${webhookUrl}?approved=true" class="btn btn-primary">${escapeHtml(approveLabel)}</a>
		${disapproveBtn}
	</div>
	<div class="footer">Powered by Ze da API + n8n</div>
</div>
</body></html>`;
}

function renderFreeTextPage(
	message: string,
	webhookUrl: string,
	formTitle: string,
	formDescription: string,
	submitLabel: string,
): string {
	return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(formTitle)}</title>
<style>${BASE_STYLES}</style>
</head><body>
<div class="card">
	<h2>${escapeHtml(formTitle)}</h2>
	${formDescription ? `<p style="margin: 8px 0 16px; color: #6b7280;">${escapeHtml(formDescription)}</p>` : ''}
	<div class="message">${escapeHtml(message)}</div>
	<form method="POST" action="${webhookUrl}">
		<textarea name="response" placeholder="Type your response here..." required></textarea>
		<div class="buttons">
			<button type="submit" class="btn btn-primary">${escapeHtml(submitLabel)}</button>
		</div>
	</form>
	<div class="footer">Powered by Ze da API + n8n</div>
</div>
</body></html>`;
}

function renderThankYouPage(approved?: boolean): string {
	const statusText =
		approved === undefined
			? 'Your response has been recorded.'
			: approved
				? 'You approved the request.'
				: 'You declined the request.';

	return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Response Recorded</title>
<style>${BASE_STYLES} .card { text-align: center; } .check { font-size: 48px; margin-bottom: 16px; }</style>
</head><body>
<div class="card">
	<div class="check">${approved === false ? '&#10060;' : '&#9989;'}</div>
	<h2>Thank you!</h2>
	<p style="margin-top: 8px; color: #6b7280;">${statusText}</p>
	<p style="margin-top: 16px; color: #9ca3af; font-size: 13px;">You can close this page now.</p>
</div>
</body></html>`;
}

// ---------------------------------------------------------------------------
// Wait time helper
// ---------------------------------------------------------------------------

function configureWaitTillDate(context: IExecuteFunctions): Date {
	const limitWaitTime = context.getNodeParameter('limitWaitTime', 0, {}) as {
		values?: {
			limitType?: string;
			resumeAmount?: number;
			resumeUnit?: string;
			maxDateAndTime?: string;
		};
	};

	const values = limitWaitTime?.values;
	if (!values) {
		// Default: wait 7 days
		const waitTill = new Date();
		waitTill.setDate(waitTill.getDate() + 7);
		return waitTill;
	}

	if (values.limitType === 'atSpecifiedTime' && values.maxDateAndTime) {
		return new Date(values.maxDateAndTime);
	}

	// afterTimeInterval (default)
	const amount = values.resumeAmount ?? 1;
	const unit = values.resumeUnit ?? 'hours';
	const waitTill = new Date();

	switch (unit) {
		case 'minutes':
			waitTill.setMinutes(waitTill.getMinutes() + amount);
			break;
		case 'hours':
			waitTill.setHours(waitTill.getHours() + amount);
			break;
		case 'days':
			waitTill.setDate(waitTill.getDate() + amount);
			break;
		default:
			waitTill.setHours(waitTill.getHours() + amount);
	}

	return waitTill;
}

// ---------------------------------------------------------------------------
// Node Definition
// ---------------------------------------------------------------------------

export class ZedaApiSendAndWait implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ze da API Chat',
		name: 'zedaApiSendAndWait',
		icon: { light: 'file:../../icons/zedaapi.svg', dark: 'file:../../icons/zedaapi.dark.svg' },
		group: ['output'],
		version: 1,
		subtitle: 'Send WhatsApp message and wait for response',
		description:
			'Send a WhatsApp message via Ze da API and wait for the recipient to respond (Human in the Loop)',
		defaults: {
			name: 'Ze da API Chat',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'zedaApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'GET',
				responseMode: 'onReceived',
				responseData: '',
				path: '={{ $nodeId }}',
				restartWebhook: true,
				isFullPath: true,
			},
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				responseData: '',
				path: '={{ $nodeId }}',
				restartWebhook: true,
				isFullPath: true,
			},
		],
		properties: [
			// --- Operation ---
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'hidden',
				default: 'sendAndWait',
				noDataExpression: true,
			},

			// --- Phone ---
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				required: true,
				placeholder: '5511999999999',
				description: 'Recipient phone number with country code',
			},

			// --- Message ---
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
				required: true,
				description:
					'The message to send via WhatsApp. A response link will be appended automatically.',
			},

			// --- Response Type ---
			{
				displayName: 'Response Type',
				name: 'responseType',
				type: 'options',
				default: 'approval',
				options: [
					{
						name: 'Approval',
						value: 'approval',
						description: 'User approves or declines via buttons',
					},
					{
						name: 'Free Text',
						value: 'freeText',
						description: 'User provides a free-form text response',
					},
				],
			},

			// --- Approval Options ---
			{
				displayName: 'Approval Type',
				name: 'approvalType',
				type: 'options',
				default: 'both',
				displayOptions: {
					show: {
						responseType: ['approval'],
					},
				},
				options: [
					{
						name: 'Approve and Disapprove',
						value: 'both',
					},
					{
						name: 'Approve Only',
						value: 'approveOnly',
					},
				],
			},
			{
				displayName: 'Approve Button Label',
				name: 'approveLabel',
				type: 'string',
				default: 'Approve',
				displayOptions: {
					show: {
						responseType: ['approval'],
					},
				},
			},
			{
				displayName: 'Disapprove Button Label',
				name: 'disapproveLabel',
				type: 'string',
				default: 'Decline',
				displayOptions: {
					show: {
						responseType: ['approval'],
						approvalType: ['both'],
					},
				},
			},

			// --- Free Text Options ---
			{
				displayName: 'Form Title',
				name: 'formTitle',
				type: 'string',
				default: 'Response Required',
				displayOptions: {
					show: {
						responseType: ['freeText'],
					},
				},
			},
			{
				displayName: 'Form Description',
				name: 'formDescription',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						responseType: ['freeText'],
					},
				},
			},
			{
				displayName: 'Submit Button Label',
				name: 'submitLabel',
				type: 'string',
				default: 'Submit',
				displayOptions: {
					show: {
						responseType: ['freeText'],
					},
				},
			},

			// --- Limit Wait Time ---
			{
				displayName: 'Limit Wait Time',
				name: 'limitWaitTime',
				type: 'fixedCollection',
				description: 'Whether to limit the time this node should wait for a user response',
				default: {
					values: {
						limitType: 'afterTimeInterval',
						resumeAmount: 45,
						resumeUnit: 'minutes',
					},
				},
				options: [
					{
						displayName: 'Values',
						name: 'values',
						values: [
							{
								displayName: 'Limit Type',
								name: 'limitType',
								type: 'options',
								default: 'afterTimeInterval',
								options: [
									{
										name: 'After Time Interval',
										value: 'afterTimeInterval',
										description: 'Waits for a certain amount of time',
									},
									{
										name: 'At Specified Time',
										value: 'atSpecifiedTime',
										description: 'Waits until the set date and time to continue',
									},
								],
							},
							{
								displayName: 'Amount',
								name: 'resumeAmount',
								type: 'number',
								displayOptions: {
									show: {
										limitType: ['afterTimeInterval'],
									},
								},
								typeOptions: {
									minValue: 0,
									numberPrecision: 2,
								},
								default: 45,
							},
							{
								displayName: 'Unit',
								name: 'resumeUnit',
								type: 'options',
								displayOptions: {
									show: {
										limitType: ['afterTimeInterval'],
									},
								},
								options: [
									{ name: 'Days', value: 'days' },
									{ name: 'Hours', value: 'hours' },
									{ name: 'Minutes', value: 'minutes' },
								],
								default: 'minutes',
							},
							{
								displayName: 'Max Date and Time',
								name: 'maxDateAndTime',
								type: 'dateTime',
								displayOptions: {
									show: {
										limitType: ['atSpecifiedTime'],
									},
								},
								default: '',
							},
						],
					},
				],
			},

			// --- Options ---
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Append Response Link',
						name: 'appendLink',
						type: 'boolean',
						default: true,
						description:
							'Whether to automatically append the response link to the WhatsApp message',
					},
					{
						displayName: 'Delay Message (Seconds)',
						name: 'delayMessage',
						type: 'number',
						default: 0,
						typeOptions: { minValue: 0 },
						description: 'Delay in seconds before sending (0 = API default 1-3s random)',
					},
					{
						displayName: 'Delay Typing (Seconds)',
						name: 'delayTyping',
						type: 'number',
						default: 0,
						typeOptions: { minValue: 0, maxValue: 15 },
						description:
							'Show typing indicator for this many seconds before sending (1-15, 0 = off)',
					},
					{
						displayName: 'Response Link Text',
						name: 'linkText',
						type: 'string',
						default: 'Click here to respond',
						description: 'The clickable text shown before the response URL',
					},
					{
						displayName: 'Scheduled For',
						name: 'scheduledFor',
						type: 'dateTime',
						default: '',
						description: 'ISO 8601 timestamp for scheduled delivery (overrides Delay Message)',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return true;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				return true;
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const phone = this.getNodeParameter('phone', 0) as string;
		const message = this.getNodeParameter('message', 0) as string;
		const options = this.getNodeParameter('options', 0, {}) as {
			appendLink?: boolean;
			delayMessage?: number;
			delayTyping?: number;
			scheduledFor?: string;
			linkText?: string;
		};

		// Build webhook URL for responses
		const instanceBaseUrl = this.getInstanceBaseUrl();
		const nodeId = this.getNode().id;
		const isManual = this.getMode() === 'manual';
		const webhookUrl = `${instanceBaseUrl}/${isManual ? 'webhook-test' : 'webhook'}/${nodeId}`;

		// Build WhatsApp message text
		const appendLink = options.appendLink !== false;
		const linkText = options.linkText || 'Click here to respond';
		const fullMessage = appendLink ? `${message}\n\n${linkText}: ${webhookUrl}` : message;

		// Get credentials and build API URL
		const credentials = await this.getCredentials('zedaApi');
		const baseUrl = `${credentials.baseUrl}/instances/${credentials.instanceId}/token/${credentials.token}`;

		// Send message via Ze da API
		const requestOptions: IHttpRequestOptions = {
			method: 'POST',
			url: `${baseUrl}/send-text`,
			body: {
				phone,
				message: fullMessage,
				...(options.delayMessage ? { delayMessage: options.delayMessage } : {}),
				...(options.delayTyping ? { delayTyping: options.delayTyping } : {}),
				...(options.scheduledFor ? { scheduledFor: options.scheduledFor } : {}),
			},
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Client-Token': credentials.clientToken as string,
			},
		};

		await this.helpers.httpRequest(requestOptions);

		// Pause execution and wait for response
		const waitTill = configureWaitTillDate(this);
		await this.putExecutionToWait(waitTill);

		return [items];
	}

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const res = this.getResponseObject();

		const message = this.getNodeParameter('message', '') as string;
		const responseType = this.getNodeParameter('responseType', 'approval') as string;

		const webhookUrl = this.getNodeWebhookUrl('default') as string;

		// --- Handle GET requests ---
		if (req.method === 'GET') {
			const query = this.getQueryData() as { approved?: string };

			// If approval query parameter present, record the response
			if (query.approved !== undefined) {
				const approved = query.approved === 'true';
				const html = renderThankYouPage(approved);
				res.status(200).send(html);

				return {
					webhookResponse: 'noData',
					workflowData: [
						this.helpers.returnJsonArray({
							approved,
							responseType: 'approval',
							respondedAt: new Date().toISOString(),
						}),
					],
				};
			}

			// Show the response form/approval page
			let html: string;

			if (responseType === 'freeText') {
				const formTitle = this.getNodeParameter('formTitle', 'Response Required') as string;
				const formDescription = this.getNodeParameter('formDescription', '') as string;
				const submitLabel = this.getNodeParameter('submitLabel', 'Submit') as string;

				html = renderFreeTextPage(message, webhookUrl, formTitle, formDescription, submitLabel);
			} else {
				const approveLabel = this.getNodeParameter('approveLabel', 'Approve') as string;
				const approvalType = this.getNodeParameter('approvalType', 'both') as string;
				const disapproveLabel =
					approvalType === 'both'
						? (this.getNodeParameter('disapproveLabel', 'Decline') as string)
						: null;

				html = renderApprovalPage(message, webhookUrl, approveLabel, disapproveLabel);
			}

			res.status(200).send(html);
			return { noWebhookResponse: true };
		}

		// --- Handle POST requests (free text form submission) ---
		if (req.method === 'POST') {
			const body = this.getBodyData() as { response?: string };
			const html = renderThankYouPage();
			res.status(200).send(html);

			return {
				webhookResponse: 'noData',
				workflowData: [
					this.helpers.returnJsonArray({
						response: body.response || '',
						responseType: 'freeText',
						respondedAt: new Date().toISOString(),
					}),
				],
			};
		}

		return { noWebhookResponse: true };
	}
}
