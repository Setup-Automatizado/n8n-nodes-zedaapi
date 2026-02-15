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
