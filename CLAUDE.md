# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**n8n-nodes-zedaapi** is a complete n8n community node package that integrates with the [Zeda API](https://github.com/Setup-Automatizado/zedaapi) (whatsmeow-based WhatsApp API). It provides **163 operations across 19 resources** plus a webhook trigger node for receiving WhatsApp events.

**Linked repository**: `git@github.com:Setup-Automatizado/zedaapi.git` (the WhatsApp API backend this node integrates with)

## Commands

```bash
npm run dev          # Start n8n with nodes loaded + hot reload (http://localhost:5678)
npm run build        # Compile TypeScript to dist/ via n8n-node build
npm run build:watch  # Build with file watching
npm run lint         # Check code with n8n node linter (strict)
npm run lint:fix     # Auto-fix linting issues
npm run release      # Create a new release via release-it
```

CI runs `lint` then `build` on Node.js v22.

## Architecture

### Nodes

1. **ZedaApi** (`nodes/ZedaApi/ZedaApi.node.ts`) — Main declarative node with 19 resources, `usableAsTool: true` for AI Agents
2. **ZedaApiTrigger** (`nodes/ZedaApi/ZedaApiTrigger.node.ts`) — Webhook trigger for receiving WhatsApp events (messages, delivery, read receipts, reactions, etc.)

### Authentication

Path-based token auth. The `baseURL` in `requestDefaults` resolves to:
```
{baseUrl}/instances/{instanceId}/token/{token}
```
All operation URLs are relative suffixes (e.g., `/send-text`, `/groups`).

Credential: `credentials/ZedaApi.credentials.ts` — fields: `baseUrl`, `instanceId`, `token`

### Resources & Operations (163 total)

| Resource | Operations | Key Endpoints |
|---|---|---|
| Message | 12 | send-text, send-image, send-video, send-audio, send-sticker, send-gif, send-document, send-ptv, send-location, send-contact, send-contacts, send-link |
| Interactive Message | 6 | send-button-list, send-button-actions, send-option-list, send-carousel, send-button-pix, send-button-otp |
| Message Action | 7 | send-reaction, send-remove-reaction, forward-message, delete messages, read-message, pin-message, modify-chat |
| Poll | 2 | send-poll, send-poll-vote |
| Event | 3 | send-event, send-edit-event, send-event-response |
| Status/Stories | 4 | send-text-status, send-image-status, send-audio-status, send-video-status |
| Business | 28 | profile, hours, categories, address, description, email, websites, tags CRUD, products CRUD, catalog config, collections CRUD |
| Contact | 9 | contacts, phone-exists, phone-exists-batch, contact metadata, profile-picture, modify-blocked, add-contact, remove-contact, resolve-lids |
| Chat | 2 | chats, save-chat-notes |
| Group | 19 | CRUD, participants, admins, invitations, metadata, settings |
| Community | 9 | CRUD, link/unlink groups, metadata, settings, invitations |
| Newsletter | 18 | CRUD, follow/unfollow, mute/unmute, admin management, search, transfer ownership |
| Instance | 10 | status, qr-code, device, phone-code, restart, disconnect, auto-read, call-reject-auto, call-reject-message |
| Profile | 3 | update name, picture, description |
| Privacy | 8 | get/update all privacy settings |
| Proxy | 6 | get-config, get-health, remove, swap, test, update |
| Queue | 4 | list, count, clear, cancel |
| Message Status | 4 | get status, stats, flush, clear cache |
| Webhook | 9 | update delivery/received/received-delivery/message-status/disconnected/connected/chat-presence webhooks, update-all, notify-sent-by-me |

### File Structure

```
nodes/ZedaApi/
├── ZedaApi.node.ts                 # Main declarative node
├── ZedaApiTrigger.node.ts          # Webhook trigger node
├── types.ts                        # TypeScript interfaces
├── resources/
│   ├── message/index.ts            # 12 message operations
│   ├── interactiveMessage/index.ts # 6 interactive message operations
│   ├── messageAction/index.ts      # 7 message action operations
│   ├── poll/index.ts               # 2 poll operations
│   ├── event/index.ts              # 3 event operations
│   ├── status/index.ts             # 4 status/stories operations
│   ├── business/index.ts            # 28 business operations
│   ├── contact/index.ts            # 9 contact operations
│   ├── chat/index.ts               # 2 chat operations
│   ├── group/index.ts              # 19 group operations
│   ├── community/index.ts          # 9 community operations
│   ├── newsletter/index.ts         # 18 newsletter operations
│   ├── instance/index.ts           # 10 instance operations
│   ├── profile/index.ts            # 3 profile operations
│   ├── privacy/index.ts            # 8 privacy operations
│   ├── proxy/index.ts              # 6 proxy operations
│   ├── queue/index.ts              # 4 queue operations
│   ├── statusCache/index.ts        # 4 message status operations
│   └── webhook/index.ts            # 9 webhook configuration operations
└── shared/
    ├── descriptions.ts             # Reusable field definitions (phone, message, etc.)
    └── transport.ts                # Manual API request helper
```

### Key Patterns

- **Declarative routing**: All operations use `routing: { request: { method, url } }` — n8n handles HTTP calls automatically
- **Body params**: `routing: { send: { type: 'body', property: 'fieldName' } }`
- **Query params**: `routing: { send: { type: 'query', property: 'paramName' } }`
- **Dynamic URLs**: `url: '=/endpoint/{{$parameter.paramName}}'` for path parameters
- **displayOptions.show**: Controls field visibility per resource/operation
- **Alphabetical ordering**: n8n linter requires all `options` arrays sorted alphabetically by `name`

### Zeda API Endpoint Pattern

All endpoints follow: `POST|GET|PUT|DELETE /instances/{instanceId}/token/{token}/{endpoint}`

The `baseURL` in `requestDefaults` already includes the instance/token prefix, so operation URLs are just `/{endpoint}`.

## TypeScript

- Strict mode: `noImplicitAny`, `strictNullChecks`, `noImplicitReturns`, `noUnusedLocals`
- Target: ES2019, Module: CommonJS
- Core types from `n8n-workflow`: `INodeType`, `INodeTypeDescription`, `INodeProperties`, `ICredentialType`
- ESLint extends `@n8n/node-cli/eslint`

## n8n Linter Rules

- Options must be alphabetically sorted by `name`
- Operations need `action` field
- `displayName` in title case, `action` in sentence case
- `limit` fields need `typeOptions: { minValue: 1 }` and default 50
- Resource options should use singular names
