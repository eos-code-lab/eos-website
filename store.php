<?php

require 'connection.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['name']);
$email   = $conn->real_escape_string($_POST['email']);
$message = $conn->real_escape_string($_POST['message']);
$email_to="andreim_popa@yahoo.com";

if(isset($_POST['submit'])){
    
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){

    //get recaptcha verify response data
    $secretkey='6LeJJkAUAAAAAPJUIcJWeBSVDWqqhbynDAeV1ii-';
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretkey.'&response='.$_POST['g-recaptcha-response']);
    $responseData = json_decode($verifyResponse);

    //recaptcha success
    if($responseData->success) {
    
      $pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
      if (preg_match($pattern, $name) || preg_match($pattern, $email))
        die("Header injection detected");
        
      //Sanitize subject
      $name = str_ireplace(array("\r", "\n", "%0a", "%0d"), '', stripslashes($name));
        $query   = "INSERT into eos_projects (name,email,message) VALUES('" . $name . "','" . $email . "','" . $message . "')";
        $success = $conn->query($query);
      // Validate e-mail
      $emailIsValid = filter_var($email, FILTER_VALIDATE_EMAIL);
        
        if($emailIsValid){
        

        $content = 'From'.': '.$email."\r\n";
        $content .= $name. ' wrote you the following message'.": \r\n\r\n";
        $content .= $message;

        $headers = "Content-type:text/plain;charset=UTF-8";
        $headers .= "From: ".$email;
        $headers .= "Return-Path: $email_to";
        $headers .= "Reply-To: $email";

        //send email
        $subject="EOS";
        mail($email_to,$subject,$content,$headers);
        echo 'mail sent successfully';
            
      }
      else
        //Error actions
        echo "Could not send mail.";
    }
       else
           echo "Please fill out the captcha.";
    }
    else
          echo "Please fill out the captcha.";
}
?>