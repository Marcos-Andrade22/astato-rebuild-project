#!/bin/bash
# =====================================================
# Script de Deploy — Astato React App → WordPress
# Uso: bash deploy-wordpress.sh
# =====================================================

set -e

echo "🏗️  Instalando dependências..."
npm install

echo "🔨  Buildando o projeto..."
npm run build

echo "✅  Build concluído! Pasta: ./dist"
echo ""
echo "📋  Próximos passos para enviar ao WordPress:"
echo "  1. Acesse seu servidor via FTP/SFTP ou painel de hospedagem."
echo "  2. Crie a pasta '/app/' dentro da raiz pública do WordPress (public_html/app/)."
echo "  3. Copie TODO o conteúdo da pasta './dist/' para '/app/'."
echo "  4. Certifique-se de que o arquivo '.htaccess' foi copiado junto."
echo "     (arquivos com ponto podem estar ocultos — ative 'mostrar arquivos ocultos' no FTP)."
echo "  5. No WordPress, crie uma página com o slug 'app' e insira o shortcode:"
echo "     [astato_react_app]"
echo "     OU use um iframe:"
echo "     <iframe src='/app/' style='width:100%;height:100vh;border:none;'></iframe>"
echo ""
echo "🌐  Deploy via FTP automático (requer lftp instalado):"
echo "  export FTP_HOST='ftp.seusite.com'"
echo "  export FTP_USER='seu-usuario'"
echo "  export FTP_PASS='sua-senha'"
echo "  export FTP_PATH='/public_html/app/'"
echo ""

# Deploy FTP automático (descomente e configure as variáveis acima para usar)
# if [ -n "$FTP_HOST" ] && [ -n "$FTP_USER" ] && [ -n "$FTP_PASS" ]; then
#   echo "🚀  Enviando para o servidor FTP..."
#   lftp -c "\
#     set ftp:ssl-allow no; \
#     open -u $FTP_USER,$FTP_PASS $FTP_HOST; \
#     mirror -R --delete --verbose ./dist/ $FTP_PATH; \
#     bye"
#   echo "✅  Upload concluído!"
# fi
