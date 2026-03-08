import type { INodeProperties } from 'n8n-workflow';

export const businessDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['business'],
			},
		},
		options: [
			{
				name: 'Add Product to Collection',
				value: 'addProductToCollection',
				description: 'Add products to an existing collection',
				action: 'Add product to collection',
				routing: {
					request: {
						method: 'POST',
						url: '/catalogs/collection/add-product',
					},
				},
			},
			{
				name: 'Add Tag to Chat',
				value: 'addTagToChat',
				description: 'Add a tag/label to a chat',
				action: 'Add tag to chat',
				routing: {
					request: {
						method: 'PUT',
						url: '=/chats/{{$parameter.phone}}/tags/{{$parameter.tag}}/add',
					},
				},
			},
			{
				name: 'Create Collection',
				value: 'createCollection',
				description: 'Create a new product collection',
				action: 'Create a collection',
				routing: {
					request: {
						method: 'POST',
						url: '/catalogs/collection',
					},
				},
			},
			{
				name: 'Create Product',
				value: 'createProduct',
				description: 'Create a new product in the catalog',
				action: 'Create a product',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
					},
				},
			},
			{
				name: 'Create Tag',
				value: 'createTag',
				description: 'Create a new tag/label',
				action: 'Create a tag',
				routing: {
					request: {
						method: 'POST',
						url: '/business/create-tag',
					},
				},
			},
			{
				name: 'Delete Collection',
				value: 'deleteCollection',
				description: 'Delete a product collection',
				action: 'Delete a collection',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/catalogs/collection/{{$parameter.collectionId}}',
					},
				},
			},
			{
				name: 'Delete Product',
				value: 'deleteProduct',
				description: 'Delete a product from the catalog',
				action: 'Delete a product',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Delete Tag',
				value: 'deleteTag',
				description: 'Delete a tag/label',
				action: 'Delete a tag',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/business/tag/{{$parameter.tagId}}',
					},
				},
			},
			{
				name: 'Edit Collection',
				value: 'editCollection',
				description: 'Edit an existing collection name',
				action: 'Edit a collection',
				routing: {
					request: {
						method: 'POST',
						url: '=/catalogs/collection-edit/{{$parameter.collectionId}}',
					},
				},
			},
			{
				name: 'Edit Tag',
				value: 'editTag',
				description: 'Edit an existing tag/label',
				action: 'Edit a tag',
				routing: {
					request: {
						method: 'POST',
						url: '=/business/edit-tag/{{$parameter.tagId}}',
					},
				},
			},
			{
				name: 'Get Available Categories',
				value: 'getAvailableCategories',
				description: 'Get list of available business categories',
				action: 'Get available categories',
				routing: {
					request: {
						method: 'GET',
						url: '/business/available-categories',
					},
				},
			},
			{
				name: 'Get Business Profile',
				value: 'getBusinessProfile',
				description: 'Get the business profile information',
				action: 'Get business profile',
				routing: {
					request: {
						method: 'GET',
						url: '/business/profile',
					},
				},
			},
			{
				name: 'Get Product',
				value: 'getProduct',
				description: 'Get a single product by ID',
				action: 'Get a product',
				routing: {
					request: {
						method: 'GET',
						url: '=/products/{{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get Products By Phone',
				value: 'getProductsByPhone',
				description: 'Get products from a catalog by phone number',
				action: 'Get products by phone',
				routing: {
					request: {
						method: 'GET',
						url: '=/catalogs/{{$parameter.phone}}',
					},
				},
			},
			{
				name: 'Get Tag Colors',
				value: 'getTagColors',
				description: 'Get available tag color options',
				action: 'Get tag colors',
				routing: {
					request: {
						method: 'GET',
						url: '/business/tags/colors',
					},
				},
			},
			{
				name: 'List Collection Products',
				value: 'listCollectionProducts',
				description: 'List products in collections by phone number',
				action: 'List collection products',
				routing: {
					request: {
						method: 'GET',
						url: '=/catalogs/collection-products/{{$parameter.phone}}',
					},
				},
			},
			{
				name: 'List Collections',
				value: 'listCollections',
				description: 'List all product collections',
				action: 'List collections',
				routing: {
					request: {
						method: 'GET',
						url: '/catalogs/collection',
					},
				},
			},
			{
				name: 'List Products',
				value: 'listProducts',
				description: 'List all products in the catalog',
				action: 'List products',
				routing: {
					request: {
						method: 'GET',
						url: '/catalogs',
					},
				},
			},
			{
				name: 'List Tags',
				value: 'listTags',
				description: 'List all tags/labels',
				action: 'List tags',
				routing: {
					request: {
						method: 'GET',
						url: '/tags',
					},
				},
			},
			{
				name: 'Remove Product From Collection',
				value: 'removeProductFromCollection',
				description: 'Remove products from a collection',
				action: 'Remove product from collection',
				routing: {
					request: {
						method: 'POST',
						url: '/catalogs/collection/remove-product',
					},
				},
			},
			{
				name: 'Remove Tag From Chat',
				value: 'removeTagFromChat',
				description: 'Remove a tag/label from a chat',
				action: 'Remove tag from chat',
				routing: {
					request: {
						method: 'PUT',
						url: '=/chats/{{$parameter.phone}}/tags/{{$parameter.tag}}/remove',
					},
				},
			},
			{
				name: 'Save Catalog Config',
				value: 'saveCatalogConfig',
				description: 'Save catalog configuration settings',
				action: 'Save catalog config',
				routing: {
					request: {
						method: 'POST',
						url: '/catalogs/config',
					},
				},
			},
			{
				name: 'Set Business Hours',
				value: 'setBusinessHours',
				description: 'Set business operating hours',
				action: 'Set business hours',
				routing: {
					request: {
						method: 'POST',
						url: '/business/hours',
					},
				},
			},
			{
				name: 'Set Categories',
				value: 'setCategories',
				description: 'Set business categories (1-3 items)',
				action: 'Set business categories',
				routing: {
					request: {
						method: 'POST',
						url: '/business/categories',
					},
				},
			},
			{
				name: 'Set Company Address',
				value: 'setCompanyAddress',
				description: 'Set the company address',
				action: 'Set company address',
				routing: {
					request: {
						method: 'POST',
						url: '/business/company-address',
					},
				},
			},
			{
				name: 'Set Company Description',
				value: 'setCompanyDescription',
				description: 'Set the company description',
				action: 'Set company description',
				routing: {
					request: {
						method: 'POST',
						url: '/business/company-description',
					},
				},
			},
			{
				name: 'Set Company Email',
				value: 'setCompanyEmail',
				description: 'Set the company email address',
				action: 'Set company email',
				routing: {
					request: {
						method: 'POST',
						url: '/business/company-email',
					},
				},
			},
			{
				name: 'Set Company Websites',
				value: 'setCompanyWebsites',
				description: 'Set company website URLs (max 2)',
				action: 'Set company websites',
				routing: {
					request: {
						method: 'POST',
						url: '/business/company-websites',
					},
				},
			},
		],
		default: 'getBusinessProfile',
	},

	// ====== Business Profile fields ======

	// ------ Set Business Hours fields ------
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. America/Sao_Paulo',
		description: 'The timezone for business hours (IANA format)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setBusinessHours'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'timezone',
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		options: [
			{ name: 'Always Open', value: 'always_open' },
			{ name: 'Appointment Only', value: 'appointment_only' },
			{ name: 'Specific Hours', value: 'specific_hours' },
		],
		default: 'specific_hours',
		required: true,
		description: 'The business hours mode',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setBusinessHours'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'mode',
			},
		},
	},
	{
		displayName: 'Days JSON',
		name: 'daysJson',
		type: 'json',
		default: '[]',
		description: 'JSON array of day configurations with open/close hours',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setBusinessHours'],
				mode: ['specific_hours'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'days',
			},
		},
	},

	// ------ Set Categories fields ------
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. Restaurant,Food,Delivery',
		description: 'Comma-separated list of categories (1-3 items)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setCategories'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'categories',
				value: '={{$value.split(",").map(c => c.trim())}}',
			},
		},
	},

	// ------ Set Company Address fields ------
	{
		displayName: 'Address',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		description: 'The company address',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setCompanyAddress'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// ------ Set Company Description fields ------
	{
		displayName: 'Description',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		typeOptions: {
			rows: 4,
		},
		description: 'The company description',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setCompanyDescription'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// ------ Set Company Email fields ------
	{
		displayName: 'Email',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. contact@company.com',
		description: 'The company email address',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setCompanyEmail'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},

	// ------ Set Company Websites fields ------
	{
		displayName: 'Websites',
		name: 'websites',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. https://company.com,https://shop.company.com',
		description: 'Comma-separated list of website URLs (max 2)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['setCompanyWebsites'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'websites',
				value: '={{$value.split(",").map(w => w.trim())}}',
			},
		},
	},

	// ====== Tags/Labels fields ======

	// ------ Create Tag fields ------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The tag name',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createTag'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Color',
		name: 'color',
		type: 'number',
		default: 0,
		required: true,
		description: 'The tag color index (0-19)',
		typeOptions: {
			minValue: 0,
			maxValue: 19,
		},
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createTag'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'color',
			},
		},
	},

	// ------ Edit Tag fields ------
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the tag to edit',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['editTag'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new tag name',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['editTag'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Color',
		name: 'color',
		type: 'number',
		default: 0,
		required: true,
		description: 'The new tag color index (0-19)',
		typeOptions: {
			minValue: 0,
			maxValue: 19,
		},
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['editTag'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'color',
			},
		},
	},

	// ------ Delete Tag fields ------
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the tag to delete',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['deleteTag'],
			},
		},
	},

	// ------ Add Tag to Chat fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number of the chat in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['addTagToChat'],
			},
		},
	},
	{
		displayName: 'Tag',
		name: 'tag',
		type: 'string',
		default: '',
		required: true,
		description: 'The tag name or ID to add',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['addTagToChat'],
			},
		},
	},

	// ------ Remove Tag From Chat fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number of the chat in E.164 format (without + sign)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['removeTagFromChat'],
			},
		},
	},
	{
		displayName: 'Tag',
		name: 'tag',
		type: 'string',
		default: '',
		required: true,
		description: 'The tag name or ID to remove',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['removeTagFromChat'],
			},
		},
	},

	// ====== Products/Catalog fields ======

	// ------ Create Product fields ------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The product name',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 3,
		},
		description: 'The product description',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The product price',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'price',
			},
		},
	},
	{
		displayName: 'Sale Price',
		name: 'salePrice',
		type: 'number',
		default: 0,
		description: 'The product sale/discount price',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'salePrice',
			},
		},
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		default: 'BRL',
		placeholder: 'e.g. BRL, USD',
		description: 'The currency code (ISO 4217)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'currency',
			},
		},
	},
	{
		displayName: 'Images',
		name: 'images',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://example.com/img1.jpg,https://example.com/img2.jpg',
		description: 'Comma-separated list of image URLs',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'images',
				value: '={{$value.split(",").map(i => i.trim())}}',
			},
		},
	},
	{
		displayName: 'Is Hidden',
		name: 'isHidden',
		type: 'boolean',
		default: false,
		description: 'Whether the product is hidden from the catalog',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'isHidden',
			},
		},
	},
	{
		displayName: 'Retailer ID',
		name: 'retailerId',
		type: 'string',
		default: '',
		description: 'Custom retailer product ID',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'retailerId',
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		placeholder: 'e.g. https://shop.example.com/product',
		description: 'The product page URL',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createProduct'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},

	// ------ Get Product fields ------
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the product to retrieve',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['getProduct'],
			},
		},
	},

	// ------ Delete Product fields ------
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		description: 'The product ID to delete',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['deleteProduct'],
			},
		},
	},

	// ------ Get Products By Phone fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number to get products from',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['getProductsByPhone'],
			},
		},
	},

	// ------ Save Catalog Config fields ------
	{
		displayName: 'Cart Enabled',
		name: 'cartEnabled',
		type: 'boolean',
		default: true,
		required: true,
		description: 'Whether the shopping cart is enabled',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['saveCatalogConfig'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'cartEnabled',
			},
		},
	},

	// ====== Collections fields ======

	// ------ Create Collection fields ------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The collection name',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Product IDs',
		name: 'productIds',
		type: 'string',
		default: '',
		placeholder: 'e.g. prod1,prod2,prod3',
		description: 'Comma-separated list of product IDs to add (optional)',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['createCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'productIds',
				value: '={{$value ? $value.split(",").map(p => p.trim()) : []}}',
			},
		},
	},

	// ------ Edit Collection fields ------
	{
		displayName: 'Collection ID',
		name: 'collectionId',
		type: 'string',
		default: '',
		required: true,
		description: 'The collection ID to edit',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['editCollection'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new collection name',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['editCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},

	// ------ Delete Collection fields ------
	{
		displayName: 'Collection ID',
		name: 'collectionId',
		type: 'string',
		default: '',
		required: true,
		description: 'The collection ID to delete',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['deleteCollection'],
			},
		},
	},

	// ------ Add Product to Collection fields ------
	{
		displayName: 'Collection ID',
		name: 'collectionId',
		type: 'string',
		default: '',
		required: true,
		description: 'The collection ID to add products to',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['addProductToCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'collectionId',
			},
		},
	},
	{
		displayName: 'Product IDs',
		name: 'productIds',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. prod1,prod2,prod3',
		description: 'Comma-separated list of product IDs to add',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['addProductToCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'productIds',
				value: '={{$value.split(",").map(p => p.trim())}}',
			},
		},
	},

	// ------ Remove Product From Collection fields ------
	{
		displayName: 'Collection ID',
		name: 'collectionId',
		type: 'string',
		default: '',
		required: true,
		description: 'The collection ID to remove products from',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['removeProductFromCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'collectionId',
			},
		},
	},
	{
		displayName: 'Product IDs',
		name: 'productIds',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. prod1,prod2,prod3',
		description: 'Comma-separated list of product IDs to remove',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['removeProductFromCollection'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'productIds',
				value: '={{$value.split(",").map(p => p.trim())}}',
			},
		},
	},

	// ------ List Collection Products fields ------
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. 5511999999999',
		description: 'The phone number to list collection products from',
		displayOptions: {
			show: {
				resource: ['business'],
				operation: ['listCollectionProducts'],
			},
		},
	},
];
