<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$id    = $obj["id"];
$password = $obj["password"];

$con = mysqli_connect("localhost", "root", "mysql");
mysqli_select_db($con,"doan1");
mysqli_query($con, "SET NAMES 'utf8'");

$sql = "UPDATE dangky SET password =  $password WHERE id =  $id";
mysqli_query($con, $sql);
echo "Sửa thành công";
?>