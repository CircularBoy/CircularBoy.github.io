<?php


// $to = 'yurets097@gmail.com';
// $subject = 'Заказ c сайта';
// $message = 'Имя: '.$_POST['name'].'<br>E-mail: '.$_POST['mail'].'<br>Телефон:'.$_POST['phone'].'<br>Комментарий:'.$_POST['msg'];
// $headers  = "Content-type: text/html; \r\n From: Decraft"; 
// mail($to, $subject, $message, $headers);
// echo $_POST['name'];
// echo $_POST['mail'];
// echo $_POST['phone'];
// echo $_POST['msg'];
?>



<?php
function clearData ($data, $type = "s") {
  switch ($type) {
    case 's':
    $data = strip_tags(trim($data));break;
    case 'i':
    $data = abs((int)$data);break;
  }
  return $data;
}

$name = clearData($_POST['name']);
$email = clearData($_POST['mail']);
$phone = clearData($_POST['phone']);
$msg = clearData($_POST['msg']);
$idModal = clearData($_POST['idModal']);

if (!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['phone'])) {
  $to = 'yurets097@gmail.com';
  $subject = 'Заказ c сайта';
  $message = 'Имя: '.$name.'<br>E-mail: '.$email.'<br>Телефон:'.$phone.'<br>Комментарий:'.$msg.'<br>Идентификатор модального окна:'.$idModal;
  $headers  = "Content-type: text/html; \r\n From: Decraft"; 
  mail($to, $subject, $message, $headers);
} 



?>