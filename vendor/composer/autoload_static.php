<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit787187ca3f8d8ee2418b5ddbcc978ffa
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
        'F' => 
        array (
            'FormGuide\\PHPFormValidator\\' => 27,
            'FormGuide\\Handlx\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
        'FormGuide\\PHPFormValidator\\' => 
        array (
            0 => __DIR__ . '/..' . '/FormGuide/PHPFormValidator/src',
        ),
        'FormGuide\\Handlx\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit787187ca3f8d8ee2418b5ddbcc978ffa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit787187ca3f8d8ee2418b5ddbcc978ffa::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}