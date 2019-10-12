<?php
//中文字符集
header('Content-type:text/html;charset=utf-8');
//连接数据库
$conn = mysqli_connect('localhost','root','root','fanke_data',3306);
//检测连接是否成功
if(mysqli_connect_error()){
    die('连接失败');
}
?>