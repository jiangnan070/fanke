<?php 
 include './connect.php';
 //获取请求参数:用户名和密码
 $username = $_REQUEST['un'];
 $password = $_REQUEST['pw'];

 //书写查询的sql语句
 $query = "SELECT * FROM info WHERE username='$username'";
 //执行sql语句
 $result = mysqli_query($conn,$query);
 //输出结果
 if(mysqli_num_rows($result)){
     $jieguo = array('code'=>0,'data'=>array('un'=>$username));
     echo json_encode($jieguo);
 }else{
     $jieguo = array('code'=>1);
     echo json_encode($jieguo);
 }
?>