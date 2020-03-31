<?php

require_once __DIR__.'/vendor/autoload.php';

$loader = new Twig_Loader_Filesystem(__DIR__.'/templates');
$twig = new Twig_Environment($loader);

$title = 'Het Jaar In Beeld - 2019';

$content = [
    'title' => $title
];

echo $twig->render('index.html.twig', $content);