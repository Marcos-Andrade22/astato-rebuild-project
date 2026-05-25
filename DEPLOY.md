# 🚀 Deploy no WordPress — Tema Headless

Este projeto usa uma arquitetura **headless**: o React é o frontend completo do site, e o WordPress funciona apenas como CMS/API backend.

```
astato.com.br/          → React (este projeto)
astato.com.br/wp-json/  → REST API do WordPress (consumida pelo React)
astato.com.br/wp-admin/ → Painel de administração do WordPress
```

---

## 📋 Pré-requisitos

- Node.js 18+ instalado localmente
- WordPress instalado na hospedagem (na raiz ou em subdiretório)
- Acesso FTP/SFTP ou cPanel
- Apache com `mod_rewrite` habilitado

---

## ⚙️ Passo a Passo

### 1. Ajuste a URL da API no `.env.production`

Abra `.env.production` e ajuste `VITE_WP_API_URL` para o endereço correto:

```env
# WordPress na raiz:
VITE_WP_API_URL=https://www.astato.com.br/wp-json/wp/v2

# WordPress em subdiretório /cms/:
VITE_WP_API_URL=https://www.astato.com.br/cms/wp-json/wp/v2
```

### 2. Gere o build de produção

```bash
npm install
npm run build
```

Isso gera a pasta `dist/` com todos os assets otimizados.

### 3. Monte a pasta do tema

Copie o conteúdo do `dist/` para dentro da pasta do tema:

```
wordpress-theme/
├── style.css          ← já existe no repositório
├── index.php          ← já existe no repositório
├── functions.php      ← já existe no repositório
└── dist/              ← copie aqui o conteúdo gerado pelo build
    ├── index.html
    ├── .vite/
    │   └── manifest.json
    └── assets/
        ├── index-[hash].js
        └── index-[hash].css
```

```bash
# Comando para copiar o build para a pasta do tema:
cp -r dist/ wordpress-theme/dist/
```

### 4. Faça o upload do tema para o WordPress

**Opção A — via cPanel/FTP:**
1. Acesse o servidor via FTP ou cPanel → Gerenciador de Arquivos
2. Navegue até `public_html/wp-content/themes/`
3. Envie a pasta `wordpress-theme/` inteira (renomeie para `astato-theme` se preferir)
4. ⚠️ Certifique-se de enviar a pasta `dist/` com o manifesto `.vite/manifest.json`

**Opção B — via painel WordPress:**
1. Compacte a pasta `wordpress-theme/` em um `.zip`
2. Acesse `wp-admin → Aparência → Temas → Adicionar Novo → Enviar Tema`
3. Faça upload do `.zip` e ative o tema

### 5. Ative o tema no WordPress

Acesse `wp-admin → Aparência → Temas` e ative o **Astato React Theme**.

### 6. Copie o `.htaccess` para a raiz

O arquivo `public/.htaccess` do repositório deve estar em `public_html/.htaccess`.
Ele garante que o React Router funcione (sem erros 404 ao navegar ou recarregar).

---

## 🔗 Usando a API do WordPress no React

A URL da API é injetada automaticamente pelo `functions.php` como variável global:

```js
// Disponível em qualquer componente React:
const apiUrl = window.ASTATO_WP_API || import.meta.env.VITE_WP_API_URL;

// Exemplo: buscar posts do blog
const response = await fetch(`${apiUrl}/posts?_embed&per_page=10`);
const posts = await response.json();
```

---

## 🐛 Solução de Problemas

| Problema | Causa | Solução |
|---|---|---|
| Tela em branco | `dist/` não foi copiado para o tema | Copie `dist/` para `wordpress-theme/dist/` e faça upload novamente |
| Erro no manifesto | Build não foi gerado | Execute `npm run build` e copie o `dist/` gerado |
| Erro 404 ao navegar | `.htaccess` não aplicado | Verifique se `mod_rewrite` está ativo e se `.htaccess` está na raiz |
| WP Admin inacessível | `.htaccess` bloqueando | O `.htaccess` já tem regras para liberar `/wp-admin` |
| Blog não carrega posts | CORS bloqueando API | Verifique o `functions.php` — CORS já está configurado |
| Imagens dos posts sem thumbnail | Post sem imagem destacada | Defina uma imagem destacada no painel WP para cada post |

---

## ✅ Checklist de Deploy

- [ ] `.env.production` com `VITE_WP_API_URL` correto
- [ ] `npm run build` executado sem erros
- [ ] `dist/` copiado para `wordpress-theme/dist/`
- [ ] Pasta `wordpress-theme/` enviada para `wp-content/themes/`
- [ ] Tema **Astato React Theme** ativado no painel WP
- [ ] `.htaccess` na raiz de `public_html/`
- [ ] `astato.com.br` abre o React (não o tema WP antigo)
- [ ] Navegação interna funciona sem 404
- [ ] Reload em rota interna não retorna 404
- [ ] Seção de blog carrega posts via API
- [ ] `/wp-admin` continua acessível
