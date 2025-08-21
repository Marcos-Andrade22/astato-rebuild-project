# Guia de Integração WordPress - Site Astato

## Estrutura de Arquivos WordPress Necessária

### 1. Arquivo principal do tema (functions.php)
```php
<?php
// Enqueue de estilos e scripts
function astato_enqueue_assets() {
    // CSS principal (compilar o Tailwind para este arquivo)
    wp_enqueue_style('astato-styles', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0');
    
    // JavaScript principal
    wp_enqueue_script('astato-scripts', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
}
add_action('wp_enqueue_scripts', 'astato_enqueue_assets');

// Suporte a menus
function astato_setup() {
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu Footer'
    ));
    
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'astato_setup');

// Customizer - Informações de Contato
function astato_customizer($wp_customize) {
    // Seção de contato
    $wp_customize->add_section('astato_contact', array(
        'title' => 'Informações de Contato',
        'priority' => 30,
    ));
    
    // Telefone 1
    $wp_customize->add_setting('astato_phone1');
    $wp_customize->add_control('astato_phone1', array(
        'label' => 'Telefone Principal',
        'section' => 'astato_contact',
        'type' => 'text',
    ));
    
    // Telefone 2
    $wp_customize->add_setting('astato_phone2');
    $wp_customize->add_control('astato_phone2', array(
        'label' => 'Telefone Secundário',
        'section' => 'astato_contact',
        'type' => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('astato_email');
    $wp_customize->add_control('astato_email', array(
        'label' => 'E-mail de Contato',
        'section' => 'astato_contact',
        'type' => 'email',
    ));
    
    // Endereço
    $wp_customize->add_setting('astato_address');
    $wp_customize->add_control('astato_address', array(
        'label' => 'Endereço Completo',
        'section' => 'astato_contact',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'astato_customizer');
```

### 2. Templates WordPress Necessários

#### index.php (Página Principal)
```php
<?php get_header(); ?>

<!-- Hero Section -->
<section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <?php 
    $hero_image = get_field('hero_image') ?: get_template_directory_uri() . '/assets/images/hero-medical-equipment.jpg';
    ?>
    <div class="absolute inset-0">
        <img src="<?php echo esc_url($hero_image); ?>" alt="Equipamentos médicos de videocirurgia" class="w-full h-full object-cover">
        <div class="absolute inset-0 gradient-hero"></div>
    </div>
    
    <div class="relative z-10 container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="text-white">
                <h1 class="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                    <?php echo get_field('hero_title') ?: 'Manutenção em Óticas e Instrumentais de Videocirurgia'; ?>
                </h1>
                <p class="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                    <?php echo get_field('hero_description') ?: 'Qualidade, compromisso e a melhor relação custo-benefício no mercado médico.'; ?>
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Outras seções usando get_field() para conteúdo dinâmico -->

<?php get_footer(); ?>
```

#### header.php
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
    <div class="container mx-auto px-4">
        <!-- Top Bar -->
        <div class="hidden md:flex justify-between items-center py-2 border-b border-border/50">
            <div class="flex items-center space-x-6 text-sm text-muted-foreground">
                <?php if(get_theme_mod('astato_phone1')): ?>
                <a href="tel:<?php echo esc_attr(get_theme_mod('astato_phone1')); ?>" class="flex items-center space-x-2 hover:text-primary transition-smooth">
                    <span><?php echo esc_html(get_theme_mod('astato_phone1')); ?></span>
                </a>
                <?php endif; ?>
            </div>
        </div>
        
        <!-- Main Navigation -->
        <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <div class="flex items-center">
                <?php if(has_custom_logo()): ?>
                    <?php the_custom_logo(); ?>
                <?php else: ?>
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-lg bg-destructive flex items-center justify-center">
                            <span class="text-white font-bold text-xl">+</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-heading font-bold text-2xl text-primary">ASTATO</span>
                            <span class="text-xs text-muted-foreground uppercase tracking-wider">Equipamentos médicos</span>
                        </div>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Navigation Menu -->
            <nav class="hidden lg:flex items-center space-x-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'flex space-x-8',
                    'container' => false,
                    'link_class' => 'text-sm font-medium text-foreground hover:text-primary transition-smooth'
                ));
                ?>
            </nav>
        </div>
    </div>
</header>
```

#### footer.php
```php
<footer class="bg-primary text-white">
    <div class="container mx-auto px-4">
        <div class="py-16">
            <div class="grid lg:grid-cols-4 gap-12">
                <!-- Informações da empresa usando customizer -->
                <div class="lg:col-span-1 space-y-6">
                    <!-- Logo e descrição -->
                </div>
                
                <!-- Menu Footer -->
                <div class="space-y-6">
                    <h3 class="font-heading text-xl font-semibold">Links Rápidos</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_class' => 'space-y-3',
                        'container' => false,
                        'link_class' => 'block text-white/80 hover:text-white transition-colors'
                    ));
                    ?>
                </div>
                
                <!-- Informações de contato do customizer -->
                <div class="space-y-6">
                    <h3 class="font-heading text-xl font-semibold">Contato</h3>
                    <?php if(get_theme_mod('astato_phone1')): ?>
                        <p><?php echo esc_html(get_theme_mod('astato_phone1')); ?></p>
                    <?php endif; ?>
                    <?php if(get_theme_mod('astato_email')): ?>
                        <p><?php echo esc_html(get_theme_mod('astato_email')); ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

## 3. Campos Personalizados (ACF) Recomendados

### Grupo: Configurações da Página Inicial
- `hero_title` (Text) - Título principal do hero
- `hero_description` (Textarea) - Descrição do hero
- `hero_image` (Image) - Imagem de fundo do hero
- `about_title` (Text) - Título da seção sobre
- `about_content` (WYSIWYG) - Conteúdo da seção sobre
- `services_title` (Text) - Título da seção serviços

### Grupo: Serviços (Repeater)
- `services` (Repeater)
  - `service_icon` (Text) - Nome do ícone
  - `service_title` (Text) - Título do serviço
  - `service_description` (Textarea) - Descrição
  - `service_features` (Repeater) - Lista de características

### Grupo: Estatísticas (Repeater)  
- `stats` (Repeater)
  - `stat_number` (Text) - Número
  - `stat_label` (Text) - Rótulo
  - `stat_description` (Text) - Descrição

## 4. Plugins Recomendados

1. **Advanced Custom Fields (ACF)** - Campos personalizados
2. **Yoast SEO** ou **RankMath** - Otimização SEO
3. **Contact Form 7** - Formulários de contato
4. **Elementor** (opcional) - Page builder compatível
5. **W3 Total Cache** - Otimização de performance

## 5. Compilação do CSS

### Usando Tailwind CLI:
```bash
# Instalar Tailwind CSS
npm install tailwindcss

# Gerar CSS otimizado
npx tailwindcss -i ./src/input.css -o ./assets/css/style.css --watch
```

### Arquivo tailwind.config.js para WordPress:
```js
module.exports = {
  content: ["./**/*.php", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'astato': {
          'primary': '#005355',
          'red': '#ed0203', 
          'light-green': '#8fb4b4',
          'blue': '#3d6695',
        },
      },
    },
  },
}
```

## 6. Estrutura de Diretórios

```
astato-theme/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── template-parts/
│   ├── hero-section.php
│   ├── about-section.php
│   └── services-section.php
├── functions.php
├── index.php
├── header.php
├── footer.php
├── style.css (WordPress theme info)
└── screenshot.png
```

## 7. Instalação e Configuração

1. **Subir arquivos**: Upload da pasta do tema para `/wp-content/themes/`
2. **Ativar tema**: No admin WordPress, ir em Aparência > Temas
3. **Configurar menus**: Aparência > Menus (criar menu principal e footer)
4. **Instalar ACF**: Adicionar os grupos de campos personalizados
5. **Customizer**: Ir em Aparência > Personalizar para configurar contatos
6. **Páginas**: Criar páginas estáticas se necessário

## 8. Otimizações de Performance

- Minificar CSS/JS em produção
- Otimizar imagens (WebP quando possível)
- Usar CDN para assets estáticos
- Configurar cache adequadamente
- Lazy loading para imagens

## 9. SEO e Acessibilidade

- Estrutura semântica HTML5 mantida
- Meta tags apropriadas para o setor médico
- Schema.org markup para empresas médicas
- Alt texts descritivos em imagens
- Navegação por teclado funcional
- Contraste adequado (WCAG 2.1)

Este guia garante uma integração WordPress profissional mantendo toda a qualidade visual e funcional do design original.