export interface ZedaApiResponse {
	zaapId?: string;
	messageId?: string;
	id?: string;
	status?: string;
	queuedAt?: string;
	deliveredAt?: string;
}

export interface ZedaApiErrorResponse {
	error?: string;
	message?: string;
	statusCode?: number;
}

export interface PaginatedResponse<T> {
	data?: T[];
	items?: T[];
	total: number;
	page?: number;
	pageSize?: number;
}

export interface ValueResult {
	value: boolean;
}

export interface SuccessResult {
	success: boolean;
}

export interface OperationResult {
	value?: boolean;
	success?: boolean;
	message?: string;
}

export interface ButtonListItem {
	id: string;
	label: string;
}

export interface ActionButton {
	id: string;
	label: string;
	type: string;
	url?: string;
	phone?: string;
	copyCode?: string;
}

export interface OptionSection {
	title: string;
	rows: OptionRow[];
}

export interface OptionRow {
	id: string;
	title: string;
	description?: string;
}

export interface CarouselCard {
	header?: { text: string };
	body: { text: string };
	footer?: { text: string };
	buttons: ActionButton[];
	mediaUrl?: string;
	mediaType?: string;
}
