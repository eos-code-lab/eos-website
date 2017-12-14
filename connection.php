<?php
 
 
function Connect()
{
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "mypassword";
 $dbname = "eos";
 
 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);
 
 return $conn;
}
 
?>