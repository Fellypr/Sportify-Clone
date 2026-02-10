# 🎵 Spotify Clone – Next.js 16

![Captura de tela do projeto](https://i.ibb.co/R5fgRhP/Captura-de-tela-de-2026-02-10-17-28-07.png)

Este projeto é um **clone funcional da interface e da experiência básica do Spotify**, desenvolvido com **Next.js 16** e foco em **arquitetura de estado, persistência de dados e navegação fluida**.

O objetivo principal foi **simular um player real**, sem backend ou banco de dados, utilizando **JSON como fonte de dados** e boas práticas do ecossistema React moderno.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído com ferramentas modernas, amplamente utilizadas no mercado:

### ⚛️ Next.js 16 (App Router + Turbopack)
- Uso do **App Router**, seguindo o padrão mais atual do Next.js.
- Componentização baseada em **Server e Client Components**.
- **Turbopack** para builds e hot reload extremamente rápidos durante o desenvolvimento.

### 🧠 TypeScript
- Tipagem forte para entidades como `Track`, `Album`, `Artist` e `Playlist`.
- Redução de erros em tempo de execução.
- Código mais previsível, legível e fácil de escalar.

### 🎨 Tailwind CSS
- Estilização moderna baseada em utilitários.
- Layout totalmente **responsivo**.
- Facilidade para ajustes rápidos e consistência visual.

### 🌐 Context API
- Gerenciamento de estado global do player:
  - Música atual (`currentTrack`)
  - Estado de reprodução (`isPlaying`)
  - Volume
  - Tempo atual da música
- Compartilhamento de estado entre páginas **sem interromper a reprodução**.

### 🎧 Lucide React
- Biblioteca de ícones leve e consistente.
- Ícones modernos utilizados no player, sidebar e controles.

---

## 🛠️ Funcionalidades

### ▶️ Player de Música Funcional
- Reprodução de áudio real utilizando a tag `<audio>`.
- Controles de:
  - Play / Pause
  - Próxima / Anterior
  - Volume
- O player **continua tocando mesmo ao navegar entre páginas**.

### 🔍 Sistema de Busca em Tempo Real
- Campo de busca que filtra músicas e playlists instantaneamente.
- Busca aplicada tanto na **biblioteca** quanto no **feed principal**.
- Implementação baseada em estado local e filtros eficientes.

### 💾 Persistência de Dados com localStorage
- Salvamento automático de:
  - Última música reproduzida
  - Tempo atual da música (`currentTime`)
  - Volume do player
- Ao recarregar a página, o player:
  - Recupera a música
  - Continua do ponto onde parou

### 📐 Layout Interativo e Responsivo
- Sidebar com **redimensionamento (resizing)**.
- Layout adaptável para diferentes resoluções.
- Estrutura inspirada na experiência do Spotify Web.

### 🧭 Navegação Dinâmica
- Navegação entre:
  - Home
  - Biblioteca
  - Álbuns
  - Artistas
- As páginas se integram diretamente ao player, sem perda de estado.

---

## 🗂️ Arquitetura de Dados

- Dados simulados utilizando arquivos JSON:
  - `songsDate.json`
  - `bibliotecas.json`
- Relacionamento por **IDs**, evitando duplicação de informações.
- Estrutura pensada como um **mini banco de dados no front-end**.

---

## 🏁 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/spotify-clone.git
2. Acesse a pasta do projeto:
   ```bash
   cd spotify-clone
3. Instale as dependências::
   ```bash
   npm install
4. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
5. Acesse no navegador:
   ```bash
   http://localhost:3000
