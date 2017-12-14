<?php

require 'connection.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['name']);
$email   = $conn->real_escape_string($_POST['email']);
$message = $conn->real_escape_string($_POST['message']);
$query   = "INSERT into eos_projects (name,email,message) VALUES('" . $name . "','" . $email . "','" . $message . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}
else
{
    $to = "andreim_popa@yahoo.com";
    $from = $_POST['email']; 
    $name = $_POST['name'];
    $subject = "EOS";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'] ."\n\n". "My email address is " . $_POST['email'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "<b>Mail Sent. Thank you " . $name . ", we will contact you shortly.</b>";


echo "<b>Thank You For Contacting Us </b><br>";

$conn->close();
}
?>