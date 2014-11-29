<?php
$to = 'yurets097@gmail.com, stif.sl@mail.ru';
$subject = 'Заказ c сайта';
$message = 'Имя: '.$_POST['name'].'<br>Телефон: '.$_POST['phone'];
$headers  = "Content-type: text/html; \r\n From: Aquaclean"; 
mail($to, $subject, $message, $headers);
echo $_POST['name'];
echo $_POST['phone'];
?>