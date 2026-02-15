import type { INodeProperties } from 'n8n-workflow';

export const phoneField: INodeProperties = {
	displayName: 'Phone',
	name: 'phone',
	type: 'string',
	default: '',
	required: true,
	placeholder: 'e.g. 5511999999999',
	description: 'The phone number in E.164 format (without + sign)',
};

export const messageField: INodeProperties = {
	displayName: 'Message',
	name: 'message',
	type: 'string',
	typeOptions: { rows: 4 },
	default: '',
	required: true,
	description: 'The text message to send (max 4096 characters)',
};

export const delayMessageField: INodeProperties = {
	displayName: 'Delay (Ms)',
	name: 'delayMessage',
	type: 'number',
	default: 0,
	description: 'Delay in milliseconds before sending the message',
};

export const messageIdField: INodeProperties = {
	displayName: 'Message ID',
	name: 'messageId',
	type: 'string',
	default: '',
	required: true,
	description: 'The ID of the message',
};

export const groupIdField: INodeProperties = {
	displayName: 'Group ID',
	name: 'groupId',
	type: 'string',
	default: '',
	required: true,
	placeholder: 'e.g. 5511999999999-1234567890@g.us',
	description: 'The WhatsApp group ID',
};

export const captionField: INodeProperties = {
	displayName: 'Caption',
	name: 'caption',
	type: 'string',
	typeOptions: { rows: 2 },
	default: '',
	description: 'Caption for the media',
};

export const mediaUrlField: INodeProperties = {
	displayName: 'Media URL',
	name: 'mediaUrl',
	type: 'string',
	default: '',
	required: true,
	placeholder: 'e.g. https://example.com/image.jpg',
	description: 'URL of the media file or base64 encoded data',
};

export const titleField: INodeProperties = {
	displayName: 'Title',
	name: 'title',
	type: 'string',
	default: '',
	description: 'Title text (max 60 characters)',
};

export const footerField: INodeProperties = {
	displayName: 'Footer',
	name: 'footer',
	type: 'string',
	default: '',
	description: 'Footer text (max 60 characters)',
};

export const paginationFields: INodeProperties[] = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		description: 'Page number for pagination',
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		default: 100,
		description: 'Number of items per page',
	},
];

// ---------------------------------------------------------------------------
// Additional Fields helper — generates a "collection" for optional body params
// ---------------------------------------------------------------------------

const additionalFieldDefs: Record<string, INodeProperties> = {
	delayTyping: {
		displayName: 'Delay Typing (Seconds)',
		name: 'delayTyping',
		type: 'number',
		default: 0,
		description: 'Show typing indicator for this many seconds before sending',
		routing: {
			send: { type: 'body', property: 'delayTyping' },
		},
	},
	duration: {
		displayName: 'Ephemeral Duration',
		name: 'duration',
		type: 'options',
		options: [
			{ name: '24 Hours', value: 86400 },
			{ name: '7 Days', value: 604800 },
			{ name: '90 Days', value: 7776000 },
			{ name: 'Off', value: 0 },
		],
		default: 0,
		description: 'Set ephemeral message duration',
		routing: {
			send: { type: 'body', property: 'duration' },
		},
	},
	groupMentioned: {
		displayName: 'Groups to Mention',
		name: 'groupMentioned',
		type: 'string',
		typeOptions: { multipleValues: true },
		default: [],
		placeholder: 'e.g. 5511999999999-1234567890@g.us',
		description: 'Group JIDs to mention in the message',
		routing: {
			send: { type: 'body', property: 'groupMentioned' },
		},
	},
	linkPreview: {
		displayName: 'Link Preview',
		name: 'linkPreview',
		type: 'boolean',
		default: true,
		description: 'Whether to show link preview in the message',
		routing: {
			send: { type: 'body', property: 'linkPreview' },
		},
	},
	mentioned: {
		displayName: 'Mentioned',
		name: 'mentioned',
		type: 'string',
		typeOptions: { multipleValues: true },
		default: [],
		placeholder: 'e.g. 5511999999999',
		description: 'Phone numbers to mention in the message',
		routing: {
			send: { type: 'body', property: 'mentioned' },
		},
	},
	mentionedAll: {
		displayName: 'Mention All',
		name: 'mentionedAll',
		type: 'boolean',
		default: false,
		description: 'Whether to mention all group members',
		routing: {
			send: { type: 'body', property: 'mentionedAll' },
		},
	},
	messageId: {
		displayName: 'Message ID (Reply)',
		name: 'messageId',
		type: 'string',
		default: '',
		description: 'Message ID to reply to',
		routing: {
			send: { type: 'body', property: 'messageId' },
		},
	},
	privateAnswer: {
		displayName: 'Private Answer',
		name: 'privateAnswer',
		type: 'boolean',
		default: false,
		description: 'Whether to reply privately in group chats',
		routing: {
			send: { type: 'body', property: 'privateAnswer' },
		},
	},
	viewOnce: {
		displayName: 'View Once',
		name: 'viewOnce',
		type: 'boolean',
		default: false,
		description: 'Whether the media can only be viewed once',
		routing: {
			send: { type: 'body', property: 'viewOnce' },
		},
	},
};

/**
 * Build an "Additional Fields" collection for the given resource/operations.
 * Only the fields whose keys are listed in `include` will be added.
 * Options are automatically sorted alphabetically (n8n linter requirement).
 */
export function makeAdditionalFields(
	resource: string,
	operations: string[],
	include: string[],
): INodeProperties {
	const selectedOptions = include
		.map((key) => additionalFieldDefs[key])
		.filter(Boolean)
		.sort((a, b) => a.name.localeCompare(b.name));

	return {
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [resource],
				operation: operations,
			},
		},
		options: selectedOptions,
	} as INodeProperties;
}
