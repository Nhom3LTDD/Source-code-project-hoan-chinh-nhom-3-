<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);

$name    = $obj["name"];
$email = $obj["email"];
$password =  md5($obj["password"]);

$con = mysqli_connect("localhost", "root", "mysql");
mysqli_select_db($con,"questions");
mysqli_query($con, "SET NAMES 'utf8'");
if($name != "" && $email != "" && $password != ""){
$sql = "INSERT INTO users VALUES (null, '$name', '$email', '$password')";
mysqli_query($con, $sql);
echo "Thêm thành công";
}
else{
    echo "that bai";
}
?>