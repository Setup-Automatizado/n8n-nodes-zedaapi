<div align="center">

# @setup-automatizado/n8n-nodes-zedaapi

**A integração WhatsApp mais completa para n8n**

163 operações &middot; 19 recursos &middot; Compatível com AI Agent

[![npm version](https://img.shields.io/npm/v/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=CB3837)](https://www.npmjs.com/package/@setup-automatizado/n8n-nodes-zedaapi)
[![license](https://img.shields.io/npm/l/@setup-automatizado/n8n-nodes-zedaapi?style=flat-square&color=blue)](LICENSE)
[![n8n](https://img.shields.io/badge/n8n-community%20node-FF6D5A?style=flat-square)](https://n8n.io)
[![node](https://img.shields.io/badge/node-%3E%3D22-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**Portugues** &middot; [Espanol](README.es.md) &middot; [English](README.md)

---

</div>

## Visão Geral

Node comunitário para n8n que integra com o [Zé da API](https://github.com/Setup-Automatizado/zedaapi) — uma API WhatsApp de alta performance construída com [whatsmeow](https://github.com/tulir/whatsmeow). Envie mensagens, gerencie grupos, comunidades, newsletters, configure webhooks e muito mais — tudo direto nos seus workflows n8n.

**Destaques:**

- **163 operações** em **19 recursos** — o node WhatsApp mais completo disponível
- **Compatível com AI Agent** — `usableAsTool: true` para integração com LLMs
- **Trigger por webhook** — receba 13 tipos de eventos em tempo real
- **Roteamento declarativo** — zero código customizado, implementação 100% nativa do n8n
- **Autenticação dupla** — token da instância no path + header `Client-Token`

## Instalação

### Via Interface do n8n

1. Acesse **Configurações > Nodes da Comunidade**
2. Selecione **Instalar um node da comunidade**
3. Digite: `@setup-automatizado/n8n-nodes-zedaapi`
4. Aceite os riscos e instale

### Via CLI

```bash
cd ~/.n8n
npm install @setup-automatizado/n8n-nodes-zedaapi
```

> Reinicie o n8n após a instalação.

## Configuração

### Credenciais

Crie uma nova credencial **Zé da API** com os seguintes campos:

| Campo | Descrição |
|---|---|
| **Base URL** | URL do seu servidor Zé da API (padrão: `http://localhost:8080`) |
| **Instance ID** | UUID da sua instância WhatsApp |
| **Instance Token** | Token de autenticação da instância |
| **Client Token** | `CLIENT_AUTH_TOKEN` global da configuração do servidor |

### Uso com AI Agent

Para usar este node como ferramenta de AI Agent, defina a variável de ambiente:

```bash
N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true
```

## Recursos & Operações

<details>
<summary><strong>Mensagem</strong> — 12 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Texto | POST | `/send-text` |
| Enviar Imagem | POST | `/send-image` |
| Enviar Vídeo | POST | `/send-video` |
| Enviar Áudio | POST | `/send-audio` |
| Enviar Sticker | POST | `/send-sticker` |
| Enviar GIF | POST | `/send-gif` |
| Enviar Documento | POST | `/send-document` |
| Enviar PTV | POST | `/send-ptv` |
| Enviar Localização | POST | `/send-location` |
| Enviar Contato | POST | `/send-contact` |
| Enviar Contatos | POST | `/send-contacts` |
| Enviar Link | POST | `/send-link` |

</details>

<details>
<summary><strong>Mensagem Interativa</strong> — 6 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Lista de Botões | POST | `/send-button-list` |
| Enviar Botões de Ação | POST | `/send-button-actions` |
| Enviar Lista de Opções | POST | `/send-option-list` |
| Enviar Carrossel | POST | `/send-carousel` |
| Enviar Botão PIX | POST | `/send-button-pix` |
| Enviar Botão OTP | POST | `/send-button-otp` |

</details>

<details>
<summary><strong>Ação de Mensagem</strong> — 7 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Reação | POST | `/send-reaction` |
| Remover Reação | POST | `/send-remove-reaction` |
| Encaminhar Mensagem | POST | `/forward-message` |
| Deletar Mensagem | DELETE | `/messages` |
| Marcar como Lida | POST | `/read-message` |
| Fixar Mensagem | POST | `/pin-message` |
| Modificar Chat | POST | `/modify-chat` |

</details>

<details>
<summary><strong>Enquete</strong> — 2 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Enquete | POST | `/send-poll` |
| Votar em Enquete | POST | `/send-poll-vote` |

</details>

<details>
<summary><strong>Evento</strong> — 3 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Evento | POST | `/send-event` |
| Editar Evento | POST | `/send-edit-event` |
| Responder Evento | POST | `/send-event-response` |

</details>

<details>
<summary><strong>Status/Stories</strong> — 4 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Enviar Status Texto | POST | `/send-text-status` |
| Enviar Status Imagem | POST | `/send-image-status` |
| Enviar Status Áudio | POST | `/send-audio-status` |
| Enviar Status Vídeo | POST | `/send-video-status` |

</details>

<details>
<summary><strong>Business</strong> — 28 operações</summary>

**Perfil (8):**

| Operação | Método | Endpoint |
|---|---|---|
| Obter Categorias Disponíveis | GET | `/business/available-categories` |
| Obter Perfil do Negócio | GET | `/business/profile` |
| Definir Horário de Funcionamento | POST | `/business/hours` |
| Definir Categorias | POST | `/business/categories` |
| Definir Endereço da Empresa | POST | `/business/company-address` |
| Definir Descrição da Empresa | POST | `/business/company-description` |
| Definir Email da Empresa | POST | `/business/company-email` |
| Definir Websites da Empresa | POST | `/business/company-websites` |

**Tags/Etiquetas (7):**

| Operação | Método | Endpoint |
|---|---|---|
| Adicionar Tag ao Chat | PUT | `/chats/{phone}/tags/{tag}/add` |
| Criar Tag | POST | `/business/create-tag` |
| Deletar Tag | DELETE | `/business/tag/{tagId}` |
| Editar Tag | POST | `/business/edit-tag/{tagId}` |
| Obter Cores de Tags | GET | `/business/tags/colors` |
| Listar Tags | GET | `/tags` |
| Remover Tag do Chat | PUT | `/chats/{phone}/tags/{tag}/remove` |

**Produtos/Catálogo (6):**

| Operação | Método | Endpoint |
|---|---|---|
| Criar Produto | POST | `/products` |
| Deletar Produto | DELETE | `/products/{productId}` |
| Obter Produto | GET | `/products/{productId}` |
| Obter Produtos por Telefone | GET | `/catalogs/{phone}` |
| Listar Produtos | GET | `/catalogs` |
| Salvar Config do Catálogo | POST | `/catalogs/config` |

**Coleções (7):**

| Operação | Método | Endpoint |
|---|---|---|
| Adicionar Produto à Coleção | POST | `/catalogs/collection/add-product` |
| Criar Coleção | POST | `/catalogs/collection` |
| Deletar Coleção | DELETE | `/catalogs/collection/{collectionId}` |
| Editar Coleção | POST | `/catalogs/collection-edit/{collectionId}` |
| Listar Produtos da Coleção | GET | `/catalogs/collection-products/{phone}` |
| Listar Coleções | GET | `/catalogs/collection` |
| Remover Produto da Coleção | POST | `/catalogs/collection/remove-product` |

</details>

<details>
<summary><strong>Contato</strong> — 9 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Adicionar Contato | POST | `/add-contact` |
| Bloquear/Desbloquear | POST | `/modify-blocked` |
| Obter Metadados | GET | `/contacts/{phone}/metadata` |
| Obter Foto de Perfil | GET | `/contacts/{phone}/profile-picture` |
| Listar Contatos | GET | `/contacts` |
| Verificar Telefone | GET | `/phone-exists/{phone}` |
| Verificar Telefones em Lote | POST | `/phone-exists-batch` |
| Remover Contato | POST | `/remove-contact` |
| Resolver LIDs | POST | `/resolve-lids` |

</details>

<details>
<summary><strong>Chat</strong> — 2 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Listar Chats | GET | `/chats` |
| Salvar Notas do Chat | POST | `/chats/{phone}/notes` |

</details>

<details>
<summary><strong>Grupo</strong> — 19 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Listar Grupos | GET | `/groups` |
| Criar Grupo | POST | `/create-group` |
| Atualizar Nome | POST | `/update-group-name` |
| Atualizar Foto | POST | `/update-group-photo` |
| Atualizar Descrição | POST | `/update-group-description` |
| Atualizar Configurações | POST | `/update-group-settings` |
| Adicionar Participante | POST | `/add-participant` |
| Remover Participante | POST | `/remove-participant` |
| Aprovar Participante | POST | `/approve-participant` |
| Rejeitar Participante | POST | `/reject-participant` |
| Adicionar Admin | POST | `/add-admin` |
| Remover Admin | POST | `/remove-admin` |
| Sair do Grupo | POST | `/leave-group` |
| Obter Metadados | GET | `/group-metadata/{id}` |
| Obter Metadados Light | GET | `/light-group-metadata/{id}` |
| Obter Link de Convite | POST | `/group-invitation-link/{id}` |
| Redefinir Link de Convite | POST | `/redefine-invitation-link/{id}` |
| Obter Metadados do Convite | GET | `/group-invitation-metadata` |
| Aceitar Convite | GET | `/accept-invite-group` |

</details>

<details>
<summary><strong>Comunidade</strong> — 9 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Listar | GET | `/communities` |
| Criar | POST | `/communities` |
| Deletar | DELETE | `/communities/{id}` |
| Vincular Grupos | POST | `/communities/link` |
| Desvincular Grupos | POST | `/communities/unlink` |
| Obter Metadados | GET | `/communities-metadata/{id}` |
| Atualizar Descrição | POST | `/update-community-description` |
| Atualizar Configurações | POST | `/communities/settings` |
| Redefinir Link de Convite | POST | `/redefine-invitation-link/{id}` |

</details>

<details>
<summary><strong>Newsletter</strong> — 18 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Listar | GET | `/newsletter` |
| Criar | POST | `/create-newsletter` |
| Deletar | DELETE | `/delete-newsletter` |
| Seguir | PUT | `/follow-newsletter` |
| Deixar de Seguir | PUT | `/unfollow-newsletter` |
| Silenciar | PUT | `/mute-newsletter` |
| Reativar | PUT | `/unmute-newsletter` |
| Obter Metadados | GET | `/newsletter/metadata/{id}` |
| Atualizar Nome | POST | `/update-newsletter-name` |
| Atualizar Descrição | POST | `/update-newsletter-description` |
| Atualizar Imagem | POST | `/update-newsletter-picture` |
| Atualizar Configurações | POST | `/newsletter/settings/{id}` |
| Pesquisar | POST | `/search-newsletter` |
| Enviar Convite Admin | POST | `/send-newsletter-admin-invite` |
| Aceitar Convite Admin | POST | `/newsletter/accept-admin-invite/{id}` |
| Remover Admin | POST | `/newsletter/remove-admin/{id}` |
| Revogar Convite Admin | POST | `/newsletter/revoke-admin-invite/{id}` |
| Transferir Propriedade | POST | `/newsletter/transfer-ownership/{id}` |

</details>

<details>
<summary><strong>Instância</strong> — 10 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Obter Status | GET | `/status` |
| Obter QR Code | GET | `/qr-code` |
| Obter QR Code Imagem | GET | `/qr-code/image` |
| Obter Info do Dispositivo | GET | `/device` |
| Obter Código do Telefone | GET | `/phone-code/{phone}` |
| Reiniciar | POST | `/restart` |
| Desconectar | POST | `/disconnect` |
| Atualizar Leitura Automática | PUT | `/update-auto-read-message` |
| Atualizar Rejeição Automática de Chamadas | PUT | `/update-call-reject-auto` |
| Atualizar Mensagem de Rejeição | PUT | `/update-call-reject-message` |

</details>

<details>
<summary><strong>Perfil</strong> — 3 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Atualizar Nome | PUT | `/profile-name` |
| Atualizar Foto | PUT | `/profile-picture` |
| Atualizar Descrição | PUT | `/profile-description` |

</details>

<details>
<summary><strong>Privacidade</strong> — 8 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Obter Configurações | GET | `/privacy-settings` |
| Atualizar Adicionar em Grupo | PUT | `/privacy-settings/group-add` |
| Atualizar Visto por Último | PUT | `/privacy-settings/last-seen` |
| Atualizar Status | PUT | `/privacy-settings/status` |
| Atualizar Foto de Perfil | PUT | `/privacy-settings/profile-photo` |
| Atualizar Confirmação de Leitura | PUT | `/privacy-settings/read-receipts` |
| Atualizar Online | PUT | `/privacy-settings/online` |
| Atualizar Chamadas | PUT | `/privacy-settings/call-add` |

</details>

<details>
<summary><strong>Proxy</strong> — 6 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Obter Config | GET | `/proxy` |
| Obter Saúde | GET | `/proxy/health` |
| Remover | DELETE | `/proxy` |
| Trocar | POST | `/proxy/swap` |
| Testar | POST | `/proxy/test` |
| Atualizar | PUT | `/update-proxy` |

</details>

<details>
<summary><strong>Fila</strong> — 4 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Listar Fila | GET | `/queue` |
| Obter Contagem | GET | `/queue/count` |
| Limpar Fila | DELETE | `/queue` |
| Cancelar Mensagem | DELETE | `/queue/{zaapId}` |

</details>

<details>
<summary><strong>Status de Mensagem</strong> — 4 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Obter Status das Mensagens | GET | `/messages-status` |
| Obter Estatísticas | GET | `/messages-status/stats` |
| Flush Status | POST | `/messages-status/flush` |
| Limpar Cache | DELETE | `/messages-status/cache` |

</details>

<details>
<summary><strong>Webhook</strong> — 9 operações</summary>

| Operação | Método | Endpoint |
|---|---|---|
| Atualizar Todos os Webhooks | PUT | `/update-every-webhooks` |
| Atualizar Webhook de Presença | PUT | `/update-webhook-chat-presence` |
| Atualizar Webhook de Conexão | PUT | `/update-webhook-connected` |
| Atualizar Webhook de Entrega | PUT | `/update-webhook-delivery` |
| Atualizar Webhook de Desconexão | PUT | `/update-webhook-disconnected` |
| Atualizar Webhook de Status | PUT | `/update-webhook-message-status` |
| Atualizar Notificar Enviados | PUT | `/update-notify-sent-by-me` |
| Atualizar Webhook Recebido+Entrega | PUT | `/update-webhook-received-delivery` |
| Atualizar Webhook de Recebimento | PUT | `/update-webhook-received` |

</details>

## Eventos do Trigger

O node **Zé da API Trigger** recebe eventos em tempo real via webhook:

| Evento | Descrição |
|---|---|
| Mensagem Recebida | Mensagens de entrada |
| Mensagem Enviada | Mensagens de saída |
| Entrega de Mensagem | Confirmações de entrega |
| Leitura de Mensagem | Confirmações de leitura |
| Reação a Mensagem | Reações com emoji |
| Mensagem Revogada | Mensagens deletadas |
| Chamada | Chamadas recebidas |
| Presença no Chat | Indicadores de digitação |
| Status da Conexão | Online/offline |
| Atualização de Grupo | Alterações em metadados |
| Voto em Enquete | Eventos de votação |
| Status/Stories | Atualizações de status |

## Arquitetura

```
@setup-automatizado/n8n-nodes-zedaapi
├── credentials/
│   └── ZedaApi.credentials.ts        # Auth dupla (path + header)
├── nodes/ZedaApi/
│   ├── ZedaApi.node.ts                # Node declarativo principal (19 recursos)
│   ├── ZedaApiTrigger.node.ts         # Trigger webhook (13 eventos)
│   ├── types.ts                       # Interfaces TypeScript
│   ├── resources/                     # 19 módulos de recursos
│   └── shared/                        # Descrições reutilizáveis & transporte
└── icons/
    ├── zedaapi.svg                    # Tema claro
    └── zedaapi.dark.svg               # Tema escuro
```

## Stack Técnica

| Tecnologia | Propósito |
|---|---|
| **TypeScript** | Modo strict, segurança total de tipos |
| **n8n Declarative API** | Zero código customizado — roteamento puro |
| **n8n Node CLI** | Ferramentas de build, lint e release |
| **whatsmeow** | API WhatsApp Web em Go (backend) |
| **chi-router** | Roteamento HTTP no lado da API |

## Desenvolvimento

```bash
npm install          # Instalar dependências
npm run dev          # Iniciar n8n com hot reload
npm run build        # Build para produção
npm run lint         # Lint (regras strict do n8n)
npm run release      # Criar release
```

## Contribuindo

1. Faça um fork do repositório
2. Crie sua branch (`git checkout -b feat/feature-incrivel`)
3. Commit com [Conventional Commits](https://www.conventionalcommits.org)
4. Push para a branch (`git push origin feat/feature-incrivel`)
5. Abra um Pull Request

## Links

- [Zé da API](https://github.com/Setup-Automatizado/zedaapi) — Backend da API WhatsApp
- [Documentação n8n](https://docs.n8n.io) — Plataforma de automação
- [Nodes da Comunidade](https://docs.n8n.io/integrations/community-nodes/) — Guia de instalação

## Licença

[MIT](LICENSE) &copy; [Setup Automatizado](https://github.com/Setup-Automatizado)
