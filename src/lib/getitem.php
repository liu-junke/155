<?php
    include('./conn.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product1 where p_id='$id'";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;
    
    $mysqli->close();
?>