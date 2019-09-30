<?php
include('conn.php');

$username=$_REQUEST['username'];
$password=$_REQUEST['password'];

$sql="select* from users where u_name='$username' and u_pass=$password";
$res=$mysqli->query($sql);
var_dump($res);

if($res->num_rows>0){
    echo "<script>alert('登陆成功');location.href='../html/index1.html';</script>";
}else{
    echo "<script>alert('用户名或密码错误');</script>";
}


$mysqli->close();


?>