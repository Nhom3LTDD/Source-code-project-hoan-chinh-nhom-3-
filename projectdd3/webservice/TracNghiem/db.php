<?php
$con = mysqli_connect("localhost", "root", "mysql");
mysqli_select_db($con,"doan1");
mysqli_query($con, "SET NAMES 'utf8'");

class sanpham{
    public $key;//lay key lam id vi trong flatlist
    public $HOTEN;
    public $HINH;
    public $LOP;
    function sanpham($id, $hoten, $hinh, $lop){
        $this->key = $id;
        $this->HOTEN = $hoten;
        $this->HINH = $hinh;
        $this->LOP = $lop;

    }
}
?>