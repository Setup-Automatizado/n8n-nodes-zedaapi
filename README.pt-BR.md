<div align="center">

# @setup-automatizado/n8n-nodes-zedaapi

**A integração WhatsApp mais completa para n8n**

131 operações &middot; 18 recursos &middot; Compatível com AI Agent

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

- **131 operações** em **18 recursos** — o node WhatsApp mais completo disponível
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
<summary><strong>Enquete</strong> — 2 | <strong>Evento</strong> — 3 | <strong>Status/Stories</strong> — 4</summary>

**Enquete:** Enviar Enquete, Votar &middot; **Evento:** Enviar, Editar, Responder &middot; **Status:** Texto, Imagem, Áudio, Vídeo

</details>

<details>
<summary><strong>Contato</strong> — 6 | <strong>Chat</strong> — 1</summary>

**Contato:** Listar, Verificar Telefone, Verificar em Lote, Metadados, Foto de Perfil, Bloquear/Desbloquear &middot; **Chat:** Listar Chats

</details>

<details>
<summary><strong>Grupo</strong> — 19 operações</summary>

Listar, Criar, Atualizar Nome/Foto/Descrição/Configurações, Adicionar/Remover/Aprovar/Rejeitar Participante, Adicionar/Remover Admin, Sair do Grupo, Obter Metadados/Metadados Light, Obter/Redefinir Link de Convite, Obter Metadados do Convite, Aceitar Convite

</details>

<details>
<summary><strong>Comunidade</strong> — 9 | <strong>Newsletter</strong> — 18</summary>

**Comunidade:** Listar, Criar, Deletar, Vincular/Desvincular Grupos, Metadados, Descrição, Configurações, Link de Convite

**Newsletter:** Listar, Criar, Deletar, Seguir/Deixar de Seguir, Silenciar/Reativar, Metadados, Atualizar Nome/Descrição/Imagem/Configurações, Pesquisar, Gerenciar Admins (Convidar/Aceitar/Remover/Revogar), Transferir Propriedade

</details>

<details>
<summary><strong>Instância</strong> — 10 | <strong>Perfil</strong> — 3 | <strong>Privacidade</strong> — 8</summary>

**Instância:** Status, QR Code, QR Code Imagem, Info Dispositivo, Código Telefone, Reiniciar, Desconectar, Leitura Automática, Rejeição Automática de Chamadas, Mensagem de Rejeição

**Perfil:** Atualizar Nome, Foto, Descrição

**Privacidade:** Obter Configurações, Atualizar Grupos/Visto por Último/Status/Foto/Confirmação de Leitura/Online/Chamadas

</details>

<details>
<summary><strong>Proxy</strong> — 6 | <strong>Fila</strong> — 4 | <strong>Status de Mensagem</strong> — 4 | <strong>Webhook</strong> — 9</summary>

**Proxy:** Obter Config, Obter Saúde, Remover, Trocar, Testar, Atualizar

**Fila:** Listar, Contagem, Limpar, Cancelar

**Status de Mensagem:** Obter Status, Estatísticas, Flush, Limpar Cache

**Webhook:** Atualizar Todos, Presença, Conexão, Entrega, Desconexão, Status de Mensagem, Notificar Enviados, Recebido+Entrega, Recebimento

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
