<?php 
//引入连接数据库
include './connect.php';

//根据请求参数中的username和password对象的值来注册用户
$phone = $_REQUEST['phone'];
//书写sql语句 插入语句
$insert = "INSERT INTO user_info(phone) VALUES ('$phone')";
//执行sql语句
$result = mysqli_query($conn,$insert);
//根据结果判断是否注册成功
if($result){
    $jieguo = array('code'=>0,'data'=>$phone);
    echo json_encode($jieguo);
}else{
    $jieguo = array('code'=>1);
    echo json_encode($jieguo);
}
?>