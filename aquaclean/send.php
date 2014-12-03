<?php

$to = 'yurets097@gmail.com';
$subject = 'Заказ c сайта';
$message = 'Имя: '.$_POST['name'].'<br>Телефон: '.$_POST['phone'];
$headers  = "Content-type: text/html; charset=windows-1251 \r\n From: Aquaclean"; 

mail($to, $subject, $message, $headers);

echo $_POST['name'];
echo $_POST['phone'];

?>