<?php
$token = $_GET["token"];

require("jwt.php");

$json = JWT::decode($token, "admin", true);
echo json_encode($json);
?>
