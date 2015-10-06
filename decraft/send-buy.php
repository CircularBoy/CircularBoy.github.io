
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
$height = clearData($_POST['height']);
$width = clearData($_POST['width']);
$model = clearData($_POST['model']);
if (!empty($_POST['name']) and !empty($_POST['mail']) and !empty($_POST['phone'])) {
  $to = 'yurets097@gmail.com';
  $subject = 'Заказ c сайта';
  $message = 'Имя: '.$name.'<br>E-mail: '.$email.'<br>Телефон:'.$phone.'<br>Высота кладки:'.$height.'<br>Ширина кладки:'.$width.'<br>Модель:'.$model;
  $headers  = "Content-type: text/html; \r\n From: Decraft"; 
  mail($to, $subject, $message, $headers);
} 




?>