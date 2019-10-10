<?php
//中文字符集
header('Content-type:text/html;charset=utf-8');
//连接数据库
<<<<<<< HEAD
$conn = mysqli_connect('localhost','root','root','hh',3306);
=======
$conn = mysqli_connect('localhost','root','root','fanke_data',3306);
>>>>>>> wujunjie
//检测连接是否成功
if(mysqli_connect_error()){
    die('连接失败');
}
?>