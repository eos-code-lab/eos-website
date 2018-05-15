<?php
/**
 * Created by Claudia Ifrim.
 * User: claudia
 * Date: 5/15/18
 * Time: 11:41 PM
 */

require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler();

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->isRequired()->maxLength(6000);

$mailer = $pp->getMailer();
$mailer->setFrom('email@localhost','Form',false);

$pp->sendEmailTo('email@localhost');

echo $pp->process($_POST);