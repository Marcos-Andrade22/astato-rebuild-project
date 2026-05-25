<?php
/**
 * functions.php — Astato React Theme
 *
 * Enfileira os assets do build React (dist/) de forma dinâmica,
 * lendo o manifesto gerado pelo Vite para pegar os hashes corretos.
 */

// Remove os estilos padrão do WordPress (não precisamos deles)
add_action('wp_enqueue_scripts', 'astato_remove_wp_styles', 20);
function astato_remove_wp_styles() {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
}

// Enfileira os assets do build React via manifesto do Vite
add_action('wp_enqueue_scripts', 'astato_enqueue_react_assets');
function astato_enqueue_react_assets() {
    $theme_dir     = get_template_directory();
    $theme_uri     = get_template_directory_uri();
    $manifest_path = $theme_dir . '/dist/.vite/manifest.json';

    if (!file_exists($manifest_path)) {
        if (current_user_can('administrator')) {
            add_action('wp_footer', function() {
                echo '<div style="position:fixed;bottom:0;left:0;right:0;background:#c00;color:#fff;padding:12px;text-align:center;z-index:99999;font-family:monospace;">';
                echo '⚠️ Astato Theme: arquivo <strong>dist/.vite/manifest.json</strong> não encontrado. Execute <code>npm run build</code> e envie a pasta <code>dist/</code> para dentro do tema.';
                echo '</div>';
            });
        }
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    // O Vite coloca o CSS dentro do array "css" da entrada index.html
    // quando não há um src/index.css separado no manifesto.
    if (isset($manifest['index.html'])) {
        $entry = $manifest['index.html'];

        // Enfileira o(s) CSS do entry point
        if (!empty($entry['css'])) {
            foreach ($entry['css'] as $i => $css_file) {
                wp_enqueue_style(
                    'astato-react-style-' . $i,
                    $theme_uri . '/dist/' . $css_file,
                    [],
                    null
                );
            }
        }

        // Enfileira o JS principal
        $js_file = $entry['file'];
        wp_enqueue_script(
            'astato-react-app',
            $theme_uri . '/dist/' . $js_file,
            [],
            null,
            true
        );

        // React precisa de type="module"
        add_filter('script_loader_tag', function($tag, $handle) {
            if ($handle === 'astato-react-app') {
                return str_replace('<script ', '<script type="module" ', $tag);
            }
            return $tag;
        }, 10, 2);
    }

    // Passa a URL da API do WordPress para o React via window global
    wp_add_inline_script(
        'astato-react-app',
        'window.ASTATO_WP_API = "' . esc_url(rest_url('wp/v2')) . '";',
        'before'
    );
}

// Habilita a REST API do WordPress
add_action('rest_api_init', function() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');

register_nav_menus([
    'primary' => __('Menu Principal', 'astato-react-theme'),
]);
