<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/typefully-velt.webp" alt="Typefully-Style Editor with Velt: A Typefully-style thread editor with live comments and presence" width="100%" />

<br />
<br />

# Typefully-Style Editor with Velt

### A Typefully-style thread editor with live comments and presence

A Next.js clone of the Typefully thread editor. Velt adds comments on post text through a Tiptap editor, plus presence, a comments sidebar and notifications.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://typefully-velt.vercel.app/)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

This is a Typefully-style collaborative thread editor built with Next.js and [Velt](https://velt.dev). Users write a post thread in a Tiptap editor and comment on the text together.

The `PutThread` component configures `TiptapVeltComments` so comments attach to selected text. The header adds presence, notifications and a comments sidebar, and lets you switch between predefined users.

## Features

- **Comments on post text**: `VeltComments` with the `TiptapVeltComments` extension from `@veltdev/tiptap-velt-comments`.
- **Rich text composer**: A Tiptap editor for post content.
- **Presence**: `VeltPresence` shows live users with avatars.
- **Notifications**: `VeltNotificationsTool` provides in-app notifications.
- **Comments sidebar**: `VeltCommentsSidebar` with a `VeltSidebarButton`.
- **Multi-user support**: Switch between predefined users with avatars.
- **Theme and layout**: Dark and light mode, and a navigation sidebar.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router), [React](https://react.dev), TypeScript |
| Collaboration | [Velt](https://velt.dev) (`@veltdev/react`, `@veltdev/tiptap-velt-comments`) |
| Editor | [Tiptap](https://tiptap.dev) |
| UI | [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev) |
| State | [Zustand](https://zustand-demo.pmnd.rs) |
| Deployment | [Vercel](https://vercel.com) |

## Getting started

### Prerequisites

- Node.js 16 or later
- pnpm (the original README uses pnpm; npm 8 or later also works)
- A Velt API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/typefully-velt.git
cd typefully-velt
pnpm install
```

### Environment variables

Create a `.env.local` file in the project root. `sample.env` shows the format.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VELT_ID` | Your Velt API key. |

### Run

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `build`, `start`, `lint`.

## How it works

```text
app/                  Next.js app directory
components/layout/    app shell and header
components/post/      post and thread components (PutThread)
components/ui/        UI primitives
helper/               users DB
hooks/                toast and theme hooks
lib/                  utilities and types
```

`VeltProvider` wraps the app. `components/layout/header.tsx` identifies the selected user with `client.identify(...)` and sets the Velt document. The original README names the document ID `typefully-comments`. `PutThread.tsx` configures `TiptapVeltComments` with `persistVeltMarks: false`. Comment bubbles have custom styling.

Troubleshooting:

- **API key problems**: check `.env.local` and that the key is active in the Velt console.
- **Collaboration not working**: check the browser console, network and browser support.
- **Build issues**: remove `.next` and `node_modules`, then reinstall.

## Resources

- [Live demo](https://typefully-velt.vercel.app/): the deployed app.
- [Velt documentation](https://docs.velt.dev): SDK guides.
- [Velt](https://velt.dev): product site.
- [Tiptap](https://tiptap.dev): editor framework.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
