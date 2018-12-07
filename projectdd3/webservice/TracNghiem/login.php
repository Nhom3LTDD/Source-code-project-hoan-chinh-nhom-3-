<?php
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);


$username = $obj["email"];
$password = md5($obj["password"]);

$con = mysqli_connect("localhost", "root", "mysql");
mysqli_select_db($con,"questions");
mysqli_query($con, "SET NAMES 'utf8'");

$qr = "SELECT * FROM users WHERE email = '$username' AND password = '$password'";
$result = mysqli_query($con, $qr);

$row = mysqli_fetch_array($result);

if($row['email'] != ""){
    if($row['email'] == $username && $row['password'] == $password){
        echo json_encode("true");
    }else{
        echo json_encode("false");
    }
}else{
    echo json_encode("@");
}

?>