<div align="center">

# @setup-automatizado/n8n-nodes-zedaapi

**The most complete WhatsApp integration for n8n**

131 operations &middot; 18 resources &middot; AI Agent ready

[![npm version](https://img.shields.io/npm/v/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=CB3837)](https://www.npmjs.com/package/@setup-automatizado/n8n-nodes-zedaapi)
[![license](https://img.shields.io/npm/l/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=blue)](LICENSE)
[![n8n](https://img.shields.io/badge/n8n-community%20node-FF6D5A?style=flat-square)](https://n8n.io)
[![node](https://img.shields.io/badge/node-%3E%3D22-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

[Portugues](README.pt-BR.md) &middot; [Espanol](README.es.md) &middot; **English**

---

</div>

## Overview

n8n community node for [Ze da API](https://github.com/Setup-Automatizado/zedaapi) — a high-performance WhatsApp API built on [whatsmeow](https://github.com/tulir/whatsmeow). Send messages, manage groups, communities, newsletters, configure webhooks, and more — all from your n8n workflows.

**Key highlights:**

- **131 operations** across **18 resources** — the most comprehensive WhatsApp node available
- **AI Agent compatible** — `usableAsTool: true` for seamless LLM integration
- **Webhook trigger** — receive 13 event types in real-time
- **Declarative routing** — zero custom code, pure n8n-native implementation
- **Dual-token auth** — path-based instance token + `Client-Token` header

## Installation

### Via n8n UI

1. Go to **Settings > Community Nodes**
2. Select **Install a community node**
3. Enter: `@setup-automatizado/n8n-nodes-zedaapi`
4. Accept the risks and install

### Via CLI

```bash
cd ~/.n8n
npm install @setup-automatizado/n8n-nodes-zedaapi
```

> Restart n8n after installation.

## Configuration

### Credentials

Create a new **Ze da API** credential with the following fields:

| Field | Description |
|---|---|
| **Base URL** | Your Ze da API server URL (default: `http://localhost:8080`) |
| **Instance ID** | UUID of your WhatsApp instance |
| **Instance Token** | Per-instance authentication token |
| **Client Token** | Global `CLIENT_AUTH_TOKEN` from your server configuration |

### AI Agent Usage

To use this node as an AI Agent tool, set the environment variable:

```bash
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Resources & Operations

<details>
<summary><strong>Message</strong> — 12 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Text | POST | `/send-text` |
| Send Image | POST | `/send-image` |
| Send Video | POST | `/send-video` |
| Send Audio | POST | `/send-audio` |
| Send Sticker | POST | `/send-sticker` |
| Send GIF | POST | `/send-gif` |
| Send Document | POST | `/send-document` |
| Send PTV | POST | `/send-ptv` |
| Send Location | POST | `/send-location` |
| Send Contact | POST | `/send-contact` |
| Send Contacts | POST | `/send-contacts` |
| Send Link | POST | `/send-link` |

</details>

<details>
<summary><strong>Interactive Message</strong> — 6 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Button List | POST | `/send-button-list` |
| Send Button Actions | POST | `/send-button-actions` |
| Send Option List | POST | `/send-option-list` |
| Send Carousel | POST | `/send-carousel` |
| Send Button PIX | POST | `/send-button-pix` |
| Send Button OTP | POST | `/send-button-otp` |

</details>

<details>
<summary><strong>Message Action</strong> — 7 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Reaction | POST | `/send-reaction` |
| Remove Reaction | POST | `/send-remove-reaction` |
| Forward Message | POST | `/forward-message` |
| Delete Message | DELETE | `/messages` |
| Read Message | POST | `/read-message` |
| Pin Message | POST | `/pin-message` |
| Modify Chat | POST | `/modify-chat` |

</details>

<details>
<summary><strong>Poll</strong> — 2 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Poll | POST | `/send-poll` |
| Send Poll Vote | POST | `/send-poll-vote` |

</details>

<details>
<summary><strong>Event</strong> — 3 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Event | POST | `/send-event` |
| Edit Event | POST | `/send-edit-event` |
| Send Event Response | POST | `/send-event-response` |

</details>

<details>
<summary><strong>Status/Story</strong> — 4 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Send Text Status | POST | `/send-text-status` |
| Send Image Status | POST | `/send-image-status` |
| Send Audio Status | POST | `/send-audio-status` |
| Send Video Status | POST | `/send-video-status` |

</details>

<details>
<summary><strong>Contact</strong> — 6 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List Contacts | GET | `/contacts` |
| Phone Exists | GET | `/phone-exists/{phone}` |
| Phone Exists Batch | POST | `/phone-exists-batch` |
| Get Metadata | GET | `/contacts/{phone}/metadata` |
| Get Profile Picture | GET | `/contacts/{phone}/profile-picture` |
| Block/Unblock | POST | `/modify-blocked` |

</details>

<details>
<summary><strong>Chat</strong> — 1 operation</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List Chats | GET | `/chats` |

</details>

<details>
<summary><strong>Group</strong> — 19 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List Groups | GET | `/groups` |
| Create Group | POST | `/create-group` |
| Update Name | POST | `/update-group-name` |
| Update Photo | POST | `/update-group-photo` |
| Update Description | POST | `/update-group-description` |
| Update Settings | POST | `/update-group-settings` |
| Add Participant | POST | `/add-participant` |
| Remove Participant | POST | `/remove-participant` |
| Approve Participant | POST | `/approve-participant` |
| Reject Participant | POST | `/reject-participant` |
| Add Admin | POST | `/add-admin` |
| Remove Admin | POST | `/remove-admin` |
| Leave Group | POST | `/leave-group` |
| Get Metadata | GET | `/group-metadata/{id}` |
| Get Light Metadata | GET | `/light-group-metadata/{id}` |
| Get Invitation Link | POST | `/group-invitation-link/{id}` |
| Redefine Invitation Link | POST | `/redefine-invitation-link/{id}` |
| Get Invitation Metadata | GET | `/group-invitation-metadata` |
| Accept Invite | GET | `/accept-invite-group` |

</details>

<details>
<summary><strong>Community</strong> — 9 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List | GET | `/communities` |
| Create | POST | `/communities` |
| Delete | DELETE | `/communities/{id}` |
| Link Groups | POST | `/communities/link` |
| Unlink Groups | POST | `/communities/unlink` |
| Get Metadata | GET | `/communities-metadata/{id}` |
| Update Description | POST | `/update-community-description` |
| Update Settings | POST | `/communities/settings` |
| Redefine Invitation Link | POST | `/redefine-invitation-link/{id}` |

</details>

<details>
<summary><strong>Newsletter</strong> — 18 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List | GET | `/newsletter` |
| Create | POST | `/create-newsletter` |
| Delete | DELETE | `/delete-newsletter` |
| Follow | PUT | `/follow-newsletter` |
| Unfollow | PUT | `/unfollow-newsletter` |
| Mute | PUT | `/mute-newsletter` |
| Unmute | PUT | `/unmute-newsletter` |
| Get Metadata | GET | `/newsletter/metadata/{id}` |
| Update Name | POST | `/update-newsletter-name` |
| Update Description | POST | `/update-newsletter-description` |
| Update Picture | POST | `/update-newsletter-picture` |
| Update Settings | POST | `/newsletter/settings/{id}` |
| Search | POST | `/search-newsletter` |
| Send Admin Invite | POST | `/send-newsletter-admin-invite` |
| Accept Admin Invite | POST | `/newsletter/accept-admin-invite/{id}` |
| Remove Admin | POST | `/newsletter/remove-admin/{id}` |
| Revoke Admin Invite | POST | `/newsletter/revoke-admin-invite/{id}` |
| Transfer Ownership | POST | `/newsletter/transfer-ownership/{id}` |

</details>

<details>
<summary><strong>Instance</strong> — 10 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Get Status | GET | `/status` |
| Get QR Code | GET | `/qr-code` |
| Get QR Code Image | GET | `/qr-code/image` |
| Get Device Info | GET | `/device` |
| Get Phone Code | GET | `/phone-code/{phone}` |
| Restart | POST | `/restart` |
| Disconnect | POST | `/disconnect` |
| Update Auto Read Message | PUT | `/update-auto-read-message` |
| Update Call Reject Auto | PUT | `/update-call-reject-auto` |
| Update Call Reject Message | PUT | `/update-call-reject-message` |

</details>

<details>
<summary><strong>Profile</strong> — 3 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Update Name | PUT | `/profile-name` |
| Update Picture | PUT | `/profile-picture` |
| Update Description | PUT | `/profile-description` |

</details>

<details>
<summary><strong>Privacy</strong> — 8 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Get Settings | GET | `/privacy-settings` |
| Update Group Add | PUT | `/privacy-settings/group-add` |
| Update Last Seen | PUT | `/privacy-settings/last-seen` |
| Update Status | PUT | `/privacy-settings/status` |
| Update Profile Photo | PUT | `/privacy-settings/profile-photo` |
| Update Read Receipts | PUT | `/privacy-settings/read-receipts` |
| Update Online | PUT | `/privacy-settings/online` |
| Update Call Add | PUT | `/privacy-settings/call-add` |

</details>

<details>
<summary><strong>Proxy</strong> — 6 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Get Config | GET | `/proxy` |
| Get Health | GET | `/proxy/health` |
| Remove | DELETE | `/proxy` |
| Swap | POST | `/proxy/swap` |
| Test | POST | `/proxy/test` |
| Update | PUT | `/update-proxy` |

</details>

<details>
<summary><strong>Queue</strong> — 4 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| List Queue | GET | `/queue` |
| Get Count | GET | `/queue/count` |
| Clear Queue | DELETE | `/queue` |
| Cancel Message | DELETE | `/queue/{zaapId}` |

</details>

<details>
<summary><strong>Message Status</strong> — 4 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Get Messages Status | GET | `/messages-status` |
| Get Stats | GET | `/messages-status/stats` |
| Flush Status | POST | `/messages-status/flush` |
| Clear Cache | DELETE | `/messages-status/cache` |

</details>

<details>
<summary><strong>Webhook</strong> — 9 operations</summary>

| Operation | Method | Endpoint |
|---|---|---|
| Update All Webhooks | PUT | `/update-every-webhooks` |
| Update Chat Presence Webhook | PUT | `/update-webhook-chat-presence` |
| Update Connected Webhook | PUT | `/update-webhook-connected` |
| Update Delivery Webhook | PUT | `/update-webhook-delivery` |
| Update Disconnected Webhook | PUT | `/update-webhook-disconnected` |
| Update Message Status Webhook | PUT | `/update-webhook-message-status` |
| Update Notify Sent By Me | PUT | `/update-notify-sent-by-me` |
| Update Received and Delivery Webhook | PUT | `/update-webhook-received-delivery` |
| Update Received Webhook | PUT | `/update-webhook-received` |

</details>

## Trigger Events

The **Ze da API Trigger** node receives real-time webhook events:

| Event | Description |
|---|---|
| Message Received | Incoming messages |
| Message Sent | Outgoing messages |
| Message Delivery | Delivery confirmations |
| Message Read | Read receipts |
| Message Reaction | Emoji reactions |
| Message Revoked | Deleted messages |
| Call | Incoming calls |
| Chat Presence | Typing indicators |
| Connection Status | Online/offline status |
| Group Update | Group metadata changes |
| Poll Vote | Poll vote events |
| Status/Stories | Status updates |

## Architecture

```
@setup-automatizado/n8n-nodes-zedaapi
├── credentials/
│   └── ZedaApi.credentials.ts        # Dual-token auth (path + header)
├── nodes/ZedaApi/
│   ├── ZedaApi.node.ts                # Main declarative node (18 resources)
│   ├── ZedaApiTrigger.node.ts         # Webhook trigger (13 events)
│   ├── types.ts                       # TypeScript interfaces
│   ├── resources/                     # 18 resource modules
│   └── shared/                        # Reusable descriptions & transport
└── icons/
    ├── zedaapi.svg                    # Light theme
    └── zedaapi.dark.svg               # Dark theme
```

## Tech Stack

| Technology | Purpose |
|---|---|
| **TypeScript** | Strict mode, full type safety |
| **n8n Declarative API** | Zero custom execute code — pure routing |
| **n8n Node CLI** | Build, lint, release tooling |
| **whatsmeow** | Go-based WhatsApp Web API (backend) |
| **chi-router** | HTTP routing on the API side |

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start n8n with hot reload
npm run build        # Build for production
npm run lint         # Lint (strict n8n rules)
npm run release      # Create a release
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit using [Conventional Commits](https://www.conventionalcommits.org)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## Links

- [Ze da API](https://github.com/Setup-Automatizado/zedaapi) — WhatsApp API backend
- [n8n Documentation](https://docs.n8n.io) — Workflow automation platform
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/) — Installation guide

## License

[MIT](LICENSE) &copy; [Setup Automatizado](https://github.com/Setup-Automatizado)
