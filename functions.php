<?php

function load_files(){
    // styles
    wp_enqueue_style('style.css',get_stylesheet_uri());
    wp_enqueue_style('eik-slider.css',get_template_directory_uri()."/eik-slider.css");
    //custom-scripts
    wp_enqueue_script('eik-slider.js', get_template_directory_uri()."/eik-slider.js", ['jquery']);
    //slick-slider
    wp_enqueue_script( 'slickScript', get_template_directory_uri() . '/slick/slick/slick.js');
    wp_enqueue_style('slickStyle', get_template_directory_uri() . '/slick/slick/slick.css');
    // wp_enqueue_style('slickThemeStyle', get_template_directory_uri() . '/slick/slick/slick-theme.css');
    

}

add_action('wp_enqueue_scripts', 'load_files');

add_theme_support( 'post-thumbnails' );
?>