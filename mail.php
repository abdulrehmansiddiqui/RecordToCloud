<?php

if(isset($_POST['email'])){
   $firstname = $_POST['firstname'];
   $lastname = $_POST['lastname'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $company = $_POST['company'];
   $your_role = $_POST['your_role'];
   $how_can_we_help = $_POST['how_can_we_help'];
   $message = $_POST['message'];


   $SendMessage = "
       First Name : ".$firstname." \n
       Last Name : ".$lastname." \n
       Phone : ".$phone."\n
       Email Address : ".$email." \n
       Company : ".$company." \n
       Your Role : ".$your_role." \n
       How can we help : ".$how_can_we_help." \n
       Message : ".$message." 
   ";

    $to      = 'alvin.corrado@gmail.com,support@recordtocloud.com';
    $subject = 'Record to Cloud';
    $headers = 'From: info@recordtocloud.com' . "\r\n" .
        'Reply-To: info@recordtocloud.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $SendMessage, $headers);

    header("Location: http://recordtocloud.com");
    die();

}else{
    header("Location: http://recordtocloud.com");
    die();
}











?>