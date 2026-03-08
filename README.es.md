<div align="center">

# @setup-automatizado/n8n-nodes-zedaapi

**La integración WhatsApp más completa para n8n**

163 operaciones &middot; 19 recursos &middot; Compatible con AI Agent

[![npm version](https://img.shields.io/npm/v/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=CB3837)](https://www.npmjs.com/package/@setup-automatizado/n8n-nodes-zedaapi)
[![license](https://img.shields.io/npm/l/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=blue)](LICENSE)
[![n8n](https://img.shields.io/badge/n8n-community%20node-FF6D5A?style=flat-square)](https://n8n.io)
[![node](https://img.shields.io/badge/node-%3E%3D22-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

[Portugues](README.pt-BR.md) &middot; **Espanol** &middot; [English](README.md)

---

</div>

## Descripción General

Nodo comunitario para n8n que integra con [Zé da API](https://github.com/Setup-Automatizado/zedaapi) — una API WhatsApp de alto rendimiento construida con [whatsmeow](https://github.com/tulir/whatsmeow). Envía mensajes, gestiona grupos, comunidades, newsletters, configura webhooks y mucho más — todo desde tus workflows de n8n.

**Características principales:**

- **163 operaciones** en **19 recursos** — el nodo WhatsApp más completo disponible
- **Compatible con AI Agent** — `usableAsTool: true` para integración con LLMs
- **Trigger por webhook** — recibe 13 tipos de eventos en tiempo real
- **Enrutamiento declarativo** — cero código personalizado, implementación 100% nativa de n8n
- **Autenticación dual** — token de instancia en la ruta + encabezado `Client-Token`

## Instalación

### Vía Interfaz de n8n

1. Ve a **Configuración > Nodos de la Comunidad**
2. Selecciona **Instalar un nodo de la comunidad**
3. Ingresa: `@setup-automatizado/n8n-nodes-zedaapi`
4. Acepta los riesgos e instala

### Vía CLI

```bash
cd ~/.n8n
npm install @setup-automatizado/n8n-nodes-zedaapi
```

> Reinicia n8n después de la instalación.

## Configuración

### Credenciales

Crea una nueva credencial **Zé da API** con los siguientes campos:

| Campo | Descripción |
|---|---|
| **Base URL** | URL de tu servidor Zé da API (por defecto: `http://localhost:8080`) |
| **Instance ID** | UUID de tu instancia de WhatsApp |
| **Instance Token** | Token de autenticación de la instancia |
| **Client Token** | `CLIENT_AUTH_TOKEN` global de la configuración del servidor |

### Uso con AI Agent

Para usar este nodo como herramienta de AI Agent, define la variable de entorno:

```bash
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Recursos & Operaciones

<details>
<summary><strong>Mensaje</strong> — 12 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Texto | POST | `/send-text` |
| Enviar Imagen | POST | `/send-image` |
| Enviar Video | POST | `/send-video` |
| Enviar Audio | POST | `/send-audio` |
| Enviar Sticker | POST | `/send-sticker` |
| Enviar GIF | POST | `/send-gif` |
| Enviar Documento | POST | `/send-document` |
| Enviar PTV | POST | `/send-ptv` |
| Enviar Ubicación | POST | `/send-location` |
| Enviar Contacto | POST | `/send-contact` |
| Enviar Contactos | POST | `/send-contacts` |
| Enviar Enlace | POST | `/send-link` |

</details>

<details>
<summary><strong>Mensaje Interactivo</strong> — 6 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Lista de Botones | POST | `/send-button-list` |
| Enviar Botones de Acción | POST | `/send-button-actions` |
| Enviar Lista de Opciones | POST | `/send-option-list` |
| Enviar Carrusel | POST | `/send-carousel` |
| Enviar Botón PIX | POST | `/send-button-pix` |
| Enviar Botón OTP | POST | `/send-button-otp` |

</details>

<details>
<summary><strong>Acción de Mensaje</strong> — 7 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Reacción | POST | `/send-reaction` |
| Eliminar Reacción | POST | `/send-remove-reaction` |
| Reenviar Mensaje | POST | `/forward-message` |
| Eliminar Mensaje | DELETE | `/messages` |
| Marcar como Leído | POST | `/read-message` |
| Fijar Mensaje | POST | `/pin-message` |
| Modificar Chat | POST | `/modify-chat` |

</details>

<details>
<summary><strong>Encuesta</strong> — 2 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Encuesta | POST | `/send-poll` |
| Votar en Encuesta | POST | `/send-poll-vote` |

</details>

<details>
<summary><strong>Evento</strong> — 3 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Evento | POST | `/send-event` |
| Editar Evento | POST | `/send-edit-event` |
| Responder Evento | POST | `/send-event-response` |

</details>

<details>
<summary><strong>Estado/Stories</strong> — 4 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Enviar Estado Texto | POST | `/send-text-status` |
| Enviar Estado Imagen | POST | `/send-image-status` |
| Enviar Estado Audio | POST | `/send-audio-status` |
| Enviar Estado Video | POST | `/send-video-status` |

</details>

<details>
<summary><strong>Business</strong> — 28 operaciones</summary>

**Perfil (8):**

| Operación | Método | Endpoint |
|---|---|---|
| Obtener Categorías Disponibles | GET | `/business/available-categories` |
| Obtener Perfil del Negocio | GET | `/business/profile` |
| Establecer Horario de Atención | POST | `/business/hours` |
| Establecer Categorías | POST | `/business/categories` |
| Establecer Dirección de la Empresa | POST | `/business/company-address` |
| Establecer Descripción de la Empresa | POST | `/business/company-description` |
| Establecer Email de la Empresa | POST | `/business/company-email` |
| Establecer Sitios Web de la Empresa | POST | `/business/company-websites` |

**Tags/Etiquetas (7):**

| Operación | Método | Endpoint |
|---|---|---|
| Agregar Tag al Chat | PUT | `/chats/{phone}/tags/{tag}/add` |
| Crear Tag | POST | `/business/create-tag` |
| Eliminar Tag | DELETE | `/business/tag/{tagId}` |
| Editar Tag | POST | `/business/edit-tag/{tagId}` |
| Obtener Colores de Tags | GET | `/business/tags/colors` |
| Listar Tags | GET | `/tags` |
| Quitar Tag del Chat | PUT | `/chats/{phone}/tags/{tag}/remove` |

**Productos/Catálogo (6):**

| Operación | Método | Endpoint |
|---|---|---|
| Crear Producto | POST | `/products` |
| Eliminar Producto | DELETE | `/products/{productId}` |
| Obtener Producto | GET | `/products/{productId}` |
| Obtener Productos por Teléfono | GET | `/catalogs/{phone}` |
| Listar Productos | GET | `/catalogs` |
| Guardar Config del Catálogo | POST | `/catalogs/config` |

**Colecciones (7):**

| Operación | Método | Endpoint |
|---|---|---|
| Agregar Producto a Colección | POST | `/catalogs/collection/add-product` |
| Crear Colección | POST | `/catalogs/collection` |
| Eliminar Colección | DELETE | `/catalogs/collection/{collectionId}` |
| Editar Colección | POST | `/catalogs/collection-edit/{collectionId}` |
| Listar Productos de Colección | GET | `/catalogs/collection-products/{phone}` |
| Listar Colecciones | GET | `/catalogs/collection` |
| Quitar Producto de Colección | POST | `/catalogs/collection/remove-product` |

</details>

<details>
<summary><strong>Contacto</strong> — 9 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Agregar Contacto | POST | `/add-contact` |
| Bloquear/Desbloquear | POST | `/modify-blocked` |
| Obtener Metadatos | GET | `/contacts/{phone}/metadata` |
| Obtener Foto de Perfil | GET | `/contacts/{phone}/profile-picture` |
| Listar Contactos | GET | `/contacts` |
| Verificar Teléfono | GET | `/phone-exists/{phone}` |
| Verificar Teléfonos por Lote | POST | `/phone-exists-batch` |
| Eliminar Contacto | POST | `/remove-contact` |
| Resolver LIDs | POST | `/resolve-lids` |

</details>

<details>
<summary><strong>Chat</strong> — 2 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Listar Chats | GET | `/chats` |
| Guardar Notas del Chat | POST | `/chats/{phone}/notes` |

</details>

<details>
<summary><strong>Grupo</strong> — 19 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Listar Grupos | GET | `/groups` |
| Crear Grupo | POST | `/create-group` |
| Actualizar Nombre | POST | `/update-group-name` |
| Actualizar Foto | POST | `/update-group-photo` |
| Actualizar Descripción | POST | `/update-group-description` |
| Actualizar Configuración | POST | `/update-group-settings` |
| Agregar Participante | POST | `/add-participant` |
| Eliminar Participante | POST | `/remove-participant` |
| Aprobar Participante | POST | `/approve-participant` |
| Rechazar Participante | POST | `/reject-participant` |
| Agregar Admin | POST | `/add-admin` |
| Eliminar Admin | POST | `/remove-admin` |
| Salir del Grupo | POST | `/leave-group` |
| Obtener Metadatos | GET | `/group-metadata/{id}` |
| Obtener Metadatos Light | GET | `/light-group-metadata/{id}` |
| Obtener Enlace de Invitación | POST | `/group-invitation-link/{id}` |
| Redefinir Enlace de Invitación | POST | `/redefine-invitation-link/{id}` |
| Obtener Metadatos de Invitación | GET | `/group-invitation-metadata` |
| Aceptar Invitación | GET | `/accept-invite-group` |

</details>

<details>
<summary><strong>Comunidad</strong> — 9 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Listar | GET | `/communities` |
| Crear | POST | `/communities` |
| Eliminar | DELETE | `/communities/{id}` |
| Vincular Grupos | POST | `/communities/link` |
| Desvincular Grupos | POST | `/communities/unlink` |
| Obtener Metadatos | GET | `/communities-metadata/{id}` |
| Actualizar Descripción | POST | `/update-community-description` |
| Actualizar Configuración | POST | `/communities/settings` |
| Redefinir Enlace de Invitación | POST | `/redefine-invitation-link/{id}` |

</details>

<details>
<summary><strong>Newsletter</strong> — 18 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Listar | GET | `/newsletter` |
| Crear | POST | `/create-newsletter` |
| Eliminar | DELETE | `/delete-newsletter` |
| Seguir | PUT | `/follow-newsletter` |
| Dejar de Seguir | PUT | `/unfollow-newsletter` |
| Silenciar | PUT | `/mute-newsletter` |
| Reactivar | PUT | `/unmute-newsletter` |
| Obtener Metadatos | GET | `/newsletter/metadata/{id}` |
| Actualizar Nombre | POST | `/update-newsletter-name` |
| Actualizar Descripción | POST | `/update-newsletter-description` |
| Actualizar Imagen | POST | `/update-newsletter-picture` |
| Actualizar Configuración | POST | `/newsletter/settings/{id}` |
| Buscar | POST | `/search-newsletter` |
| Enviar Invitación Admin | POST | `/send-newsletter-admin-invite` |
| Aceptar Invitación Admin | POST | `/newsletter/accept-admin-invite/{id}` |
| Eliminar Admin | POST | `/newsletter/remove-admin/{id}` |
| Revocar Invitación Admin | POST | `/newsletter/revoke-admin-invite/{id}` |
| Transferir Propiedad | POST | `/newsletter/transfer-ownership/{id}` |

</details>

<details>
<summary><strong>Instancia</strong> — 10 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Obtener Estado | GET | `/status` |
| Obtener Código QR | GET | `/qr-code` |
| Obtener Imagen QR | GET | `/qr-code/image` |
| Obtener Info del Dispositivo | GET | `/device` |
| Obtener Código de Teléfono | GET | `/phone-code/{phone}` |
| Reiniciar | POST | `/restart` |
| Desconectar | POST | `/disconnect` |
| Actualizar Lectura Automática | PUT | `/update-auto-read-message` |
| Actualizar Rechazo Automático de Llamadas | PUT | `/update-call-reject-auto` |
| Actualizar Mensaje de Rechazo | PUT | `/update-call-reject-message` |

</details>

<details>
<summary><strong>Perfil</strong> — 3 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Actualizar Nombre | PUT | `/profile-name` |
| Actualizar Foto | PUT | `/profile-picture` |
| Actualizar Descripción | PUT | `/profile-description` |

</details>

<details>
<summary><strong>Privacidad</strong> — 8 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Obtener Configuración | GET | `/privacy-settings` |
| Actualizar Agregar a Grupo | PUT | `/privacy-settings/group-add` |
| Actualizar Última Conexión | PUT | `/privacy-settings/last-seen` |
| Actualizar Estado | PUT | `/privacy-settings/status` |
| Actualizar Foto de Perfil | PUT | `/privacy-settings/profile-photo` |
| Actualizar Confirmación de Lectura | PUT | `/privacy-settings/read-receipts` |
| Actualizar En Línea | PUT | `/privacy-settings/online` |
| Actualizar Llamadas | PUT | `/privacy-settings/call-add` |

</details>

<details>
<summary><strong>Proxy</strong> — 6 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Obtener Config | GET | `/proxy` |
| Obtener Salud | GET | `/proxy/health` |
| Eliminar | DELETE | `/proxy` |
| Intercambiar | POST | `/proxy/swap` |
| Probar | POST | `/proxy/test` |
| Actualizar | PUT | `/update-proxy` |

</details>

<details>
<summary><strong>Cola</strong> — 4 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Listar Cola | GET | `/queue` |
| Obtener Conteo | GET | `/queue/count` |
| Limpiar Cola | DELETE | `/queue` |
| Cancelar Mensaje | DELETE | `/queue/{zaapId}` |

</details>

<details>
<summary><strong>Estado de Mensaje</strong> — 4 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Obtener Estado de Mensajes | GET | `/messages-status` |
| Obtener Estadísticas | GET | `/messages-status/stats` |
| Flush Estado | POST | `/messages-status/flush` |
| Limpiar Caché | DELETE | `/messages-status/cache` |

</details>

<details>
<summary><strong>Webhook</strong> — 9 operaciones</summary>

| Operación | Método | Endpoint |
|---|---|---|
| Actualizar Todos los Webhooks | PUT | `/update-every-webhooks` |
| Actualizar Webhook de Presencia | PUT | `/update-webhook-chat-presence` |
| Actualizar Webhook de Conexión | PUT | `/update-webhook-connected` |
| Actualizar Webhook de Entrega | PUT | `/update-webhook-delivery` |
| Actualizar Webhook de Desconexión | PUT | `/update-webhook-disconnected` |
| Actualizar Webhook de Estado | PUT | `/update-webhook-message-status` |
| Actualizar Notificar Enviados | PUT | `/update-notify-sent-by-me` |
| Actualizar Webhook Recibido+Entrega | PUT | `/update-webhook-received-delivery` |
| Actualizar Webhook de Recepción | PUT | `/update-webhook-received` |

</details>

## Eventos del Trigger

El nodo **Zé da API Trigger** recibe eventos en tiempo real vía webhook:

| Evento | Descripción |
|---|---|
| Mensaje Recibido | Mensajes entrantes |
| Mensaje Enviado | Mensajes salientes |
| Entrega de Mensaje | Confirmaciones de entrega |
| Lectura de Mensaje | Confirmaciones de lectura |
| Reacción a Mensaje | Reacciones con emoji |
| Mensaje Revocado | Mensajes eliminados |
| Llamada | Llamadas entrantes |
| Presencia en Chat | Indicadores de escritura |
| Estado de Conexión | En línea/desconectado |
| Actualización de Grupo | Cambios en metadatos |
| Voto en Encuesta | Eventos de votación |
| Estado/Stories | Actualizaciones de estado |

## Arquitectura

```
@setup-automatizado/n8n-nodes-zedaapi
├── credentials/
│   └── ZedaApi.credentials.ts        # Auth dual (ruta + encabezado)
├── nodes/ZedaApi/
│   ├── ZedaApi.node.ts                # Nodo declarativo principal (19 recursos)
│   ├── ZedaApiTrigger.node.ts         # Trigger webhook (13 eventos)
│   ├── types.ts                       # Interfaces TypeScript
│   ├── resources/                     # 19 módulos de recursos
│   └── shared/                        # Descripciones reutilizables & transporte
└── icons/
    ├── zedaapi.svg                    # Tema claro
    └── zedaapi.dark.svg               # Tema oscuro
```

## Stack Técnico

| Tecnología | Propósito |
|---|---|
| **TypeScript** | Modo strict, seguridad total de tipos |
| **n8n Declarative API** | Cero código personalizado — enrutamiento puro |
| **n8n Node CLI** | Herramientas de build, lint y release |
| **whatsmeow** | API WhatsApp Web en Go (backend) |
| **chi-router** | Enrutamiento HTTP en el lado de la API |

## Desarrollo

```bash
npm install          # Instalar dependencias
npm run dev          # Iniciar n8n con hot reload
npm run build        # Build para producción
npm run lint         # Lint (reglas strict de n8n)
npm run release      # Crear release
```

## Contribuir

1. Haz fork del repositorio
2. Crea tu rama (`git checkout -b feat/feature-increible`)
3. Commit con [Conventional Commits](https://www.conventionalcommits.org)
4. Push a la rama (`git push origin feat/feature-increible`)
5. Abre un Pull Request

## Enlaces

- [Zé da API](https://github.com/Setup-Automatizado/zedaapi) — Backend de la API WhatsApp
- [Documentación n8n](https://docs.n8n.io) — Plataforma de automatización
- [Nodos de la Comunidad](https://docs.n8n.io/integrations/community-nodes/) — Guía de instalación

## Licencia

[MIT](LICENSE) &copy; [Setup Automatizado](https://github.com/Setup-Automatizado)
