<?php

$name = $_GET['name'];
$phone = $_GET['phone'];
$msg = $_GET['msg'];

$to      = 'stifurak@gmail.com';
$subject = 'RW Service';
$message = $name . '\r\n ' . $phone . '\r\n ' .$msg;
$headers = 'From: RW Service' . "\r\n" .
    'Reply-To: RW Service' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

return mail($to, $subject, $message, $headers);

?>