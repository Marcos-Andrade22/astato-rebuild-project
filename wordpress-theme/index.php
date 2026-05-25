<?php
/**
 * Template principal — Astato React Theme
 *
 * Carrega o app React como SPA dentro do WordPress.
 * O WordPress funciona apenas como backend/API (wp-json).
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#ffffff">

  <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>

  <?php wp_head(); // Necessário para plugins WordPress funcionarem ?>
</head>
<body <?php body_class(); ?>>

  <!-- Container onde o React vai montar a aplicação -->
  <div id="root"></div>

  <?php wp_footer(); // Necessário para plugins WordPress funcionarem ?>

</body>
</html>
