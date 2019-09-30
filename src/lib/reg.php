<?php
include('conn.php');

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];



$sql="select * from users where u_name='$username'";  //查询数据
$result=$mysqli->query($sql);

if($result->num_rows>0){
    echo '<script>alert("用户名已存在");</script>';
    // echo '<script>location.href="../html/reg.html";</script>';
    $mysqli->close();
    die;
}

$insSql="INSERT INTO `users`( `u_name`, `u-pass`) VALUES ('$username','$password')";   //添加数据   

$res=$mysqli->query($insSql);
var_dump($res);
if($res){
    
    echo '<script>alert("注册成功");</script>';
    // echo '<script>location.href="../html/index1.html";</script>';
}

$mysqli->close();
?>
