<div align="center">

# @setup-automatizado/n8n-nodes-zedaapi

**La integración WhatsApp más completa para n8n**

131 operaciones &middot; 18 recursos &middot; Compatible con AI Agent

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

- **131 operaciones** en **18 recursos** — el nodo WhatsApp más completo disponible
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
<summary><strong>Encuesta</strong> — 2 | <strong>Evento</strong> — 3 | <strong>Estado/Stories</strong> — 4</summary>

**Encuesta:** Enviar Encuesta, Votar &middot; **Evento:** Enviar, Editar, Responder &middot; **Estado:** Texto, Imagen, Audio, Video

</details>

<details>
<summary><strong>Contacto</strong> — 6 | <strong>Chat</strong> — 1</summary>

**Contacto:** Listar, Verificar Teléfono, Verificar por Lote, Metadatos, Foto de Perfil, Bloquear/Desbloquear &middot; **Chat:** Listar Chats

</details>

<details>
<summary><strong>Grupo</strong> — 19 operaciones</summary>

Listar, Crear, Actualizar Nombre/Foto/Descripción/Configuración, Agregar/Eliminar/Aprobar/Rechazar Participante, Agregar/Eliminar Admin, Salir del Grupo, Obtener Metadatos/Metadatos Light, Obtener/Redefinir Enlace de Invitación, Obtener Metadatos de Invitación, Aceptar Invitación

</details>

<details>
<summary><strong>Comunidad</strong> — 9 | <strong>Newsletter</strong> — 18</summary>

**Comunidad:** Listar, Crear, Eliminar, Vincular/Desvincular Grupos, Metadatos, Descripción, Configuración, Enlace de Invitación

**Newsletter:** Listar, Crear, Eliminar, Seguir/Dejar de Seguir, Silenciar/Reactivar, Metadatos, Actualizar Nombre/Descripción/Imagen/Configuración, Buscar, Gestionar Admins (Invitar/Aceptar/Eliminar/Revocar), Transferir Propiedad

</details>

<details>
<summary><strong>Instancia</strong> — 10 | <strong>Perfil</strong> — 3 | <strong>Privacidad</strong> — 8</summary>

**Instancia:** Estado, Código QR, Imagen QR, Info Dispositivo, Código Teléfono, Reiniciar, Desconectar, Lectura Automática, Rechazo Automático de Llamadas, Mensaje de Rechazo

**Perfil:** Actualizar Nombre, Foto, Descripción

**Privacidad:** Obtener Configuración, Actualizar Grupos/Última Conexión/Estado/Foto/Confirmación de Lectura/En Línea/Llamadas

</details>

<details>
<summary><strong>Proxy</strong> — 6 | <strong>Cola</strong> — 4 | <strong>Estado de Mensaje</strong> — 4 | <strong>Webhook</strong> — 9</summary>

**Proxy:** Obtener Config, Obtener Salud, Eliminar, Intercambiar, Probar, Actualizar

**Cola:** Listar, Conteo, Limpiar, Cancelar

**Estado de Mensaje:** Obtener Estado, Estadísticas, Flush, Limpiar Caché

**Webhook:** Actualizar Todos, Presencia, Conexión, Entrega, Desconexión, Estado de Mensaje, Notificar Enviados, Recibido+Entrega, Recepción

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
