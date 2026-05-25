# 🚀 Deploy no WordPress — Guia Completo

Este projeto é uma aplicação **React + Vite** que pode ser hospedada dentro de um site WordPress como uma SPA (Single Page Application) em um subdiretório.

---

## 📋 Pré-requisitos

- Node.js 18+ instalado localmente
- Acesso FTP/SFTP ou painel de hospedagem (cPanel, Plesk, etc.)
- Servidor WordPress com Apache e `mod_rewrite` habilitado

---

## ⚙️ Configuração Inicial

### 1. Ajuste o `base` no `vite.config.ts`

Abra `vite.config.ts` e ajuste o `base` conforme onde o app ficará hospedado:

```ts
// App em https://seusite.com/app/
base: '/app/'

// App em https://seusite.com/
base: '/'

// App em https://seusite.com/meu-projeto/react/
base: '/meu-projeto/react/'
```

### 2. Ajuste o `RewriteBase` no `.htaccess`

O `RewriteBase` no arquivo `public/.htaccess` deve ser **idêntico** ao `base` do Vite:

```apache
RewriteBase /app/
```

---

## 🔨 Gerando o Build

```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build
```

O build ficará na pasta `./dist/`.

---

## 📁 Estrutura do `dist/` gerado

```
dist/
├── index.html          ← Arquivo principal
├── .htaccess           ← Copiado automaticamente de public/
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── ...
```

---

## 🌐 Upload para o WordPress

### Opção A: Manual via FTP

1. Conecte ao servidor via FTP (FileZilla, Cyberduck, etc.)
2. Crie a pasta `app/` dentro de `public_html/` (ou `www/`)
3. Envie **todo o conteúdo** da pasta `dist/` para `public_html/app/`
4. ⚠️ Certifique-se de que `.htaccess` foi enviado (habilite arquivos ocultos no FTP)

### Opção B: Script automático

```bash
bash deploy-wordpress.sh
```

Siga as instruções no terminal para deploy via FTP automático.

### Opção C: GitHub Actions (CI/CD)

Se você hospedar no **Vercel** ou **Netlify** separado do WordPress, crie um iframe no WordPress:

```html
<!-- Em um bloco HTML customizado no Gutenberg ou Elementor -->
<iframe 
  src="https://seu-deploy-externo.vercel.app" 
  style="width:100%; height:100vh; border:none;"
  title="Astato App">
</iframe>
```

---

## 🔗 Integrando ao WordPress

### Opção 1: Página com iframe (mais simples)

No editor do WordPress, crie uma página e adicione um bloco HTML customizado:

```html
<iframe 
  src="/app/"
  style="width:100%; min-height:100vh; border:none; display:block;"
  title="Astato">
</iframe>
```

### Opção 2: Template de página personalizado

Crie o arquivo `page-app.php` no tema filho do WordPress:

```php
<?php
/**
 * Template Name: Astato React App
 */
get_header();
?>
<div id="astato-react-root" style="min-height:100vh;">
  <!-- O React carrega aqui via index.html -->
</div>
<?php
get_footer();
?>
```

### Opção 3: Redirecionar uma página para o app

No `functions.php` do tema:

```php
add_action('template_redirect', function() {
    if (is_page('app')) {
        include get_template_directory() . '/../../../app/index.html';
        exit;
    }
});
```

---

## 🐛 Solução de Problemas

| Problema | Causa | Solução |
|---|---|---|  
| Tela em branco | `base` errado no Vite | Ajuste `base` no `vite.config.ts` para coincidir com o subdiretório |
| Erro 404 ao navegar | `.htaccess` não aplicado | Verifique se `mod_rewrite` está ativo e se `.htaccess` foi enviado |
| Assets não carregam (404) | Caminho dos assets errado | Confirme que `base` no Vite é igual ao caminho real no servidor |
| `.htaccess` ignorado | `AllowOverride None` no Apache | Peça ao suporte da hospedagem para habilitar `AllowOverride All` |
| Conflito com WP rewrite rules | WordPress sobrescreve `.htaccess` | Coloque o React em um subdiretório dedicado, nunca na raiz do WP |

---

## ✅ Checklist de Deploy

- [ ] `base` no `vite.config.ts` ajustado para o subdiretório correto
- [ ] `RewriteBase` no `.htaccess` idêntico ao `base` do Vite
- [ ] `npm run build` executado sem erros
- [ ] Pasta `dist/` enviada para o servidor
- [ ] Arquivo `.htaccess` enviado (visível no FTP)
- [ ] URL do app abre no browser sem tela em branco
- [ ] Navegação interna (React Router) funciona sem 404
- [ ] Reload da página em rota interna não retorna 404
