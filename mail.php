<<<<<<< HEAD
<?php

 $arr=array('name'=>$_POST['name'],'email'=>$_POST['email'],'patronymic'=>$_POST['patronymic'],'phone'=>$_POST['phone'],'message'=>$_POST['message']);
 // $arr=array('name'=>'OPA');
// echo((json_encode($arr))

echo(json_encode($arr));
?>

if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = "serpeys@bk.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
$from = "test_mail_1910@mail.ru"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
 
/* Указываем переменные, в которые будет записываться информация с формы */
$first_name = $_POST['first_name'];
$phone = $_POST['phone'];
$message = "Перезвонить клиенту. Консультация. расчет стоимости";
$subject = "Форма отправки сообщений с сайта serpeys.site";

 
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
PHONE: $phone
Текст сообщения: $message
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');


// echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
// echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
=======
<?php

 $arr=array('name'=>$_POST['name'],'email'=>$_POST['email'],'patronymic'=>$_POST['patronymic'],'phone'=>$_POST['phone'],'message'=>$_POST['message']);
 // $arr=array('name'=>'OPA');
// echo((json_encode($arr))

echo(json_encode($arr));
?>

if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
$to = "serpeys@bk.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
$from = "test_mail_1910@mail.ru"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
 
/* Указываем переменные, в которые будет записываться информация с формы */
$first_name = $_POST['first_name'];
$phone = $_POST['phone'];
$message = "Перезвонить клиенту. Консультация. расчет стоимости";
$subject = "Форма отправки сообщений с сайта serpeys.site";

 
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
Имя отправителя: $first_name
PHONE: $phone
Текст сообщения: $message
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');


// echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
// echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
>>>>>>> 87cad720dbefedec207093a182dca311d5ef44aa
}