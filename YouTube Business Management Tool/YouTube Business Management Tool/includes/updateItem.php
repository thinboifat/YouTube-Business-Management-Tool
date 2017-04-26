<?php
include "../includes/databaseConn.php";

//Fetching Values from URL
$item_id          =$_POST['item_id'];
$Item_Name        =$_POST['Item_Name'];
$Category         =$_POST['Category'];
$Subcategory      =$_POST['Subcategory'];
$Brand            =$_POST['Brand'];
$Sender           =$_POST['Sender'];
$Details          =$_POST['Details'];
$Date_Returnable  =$_POST['Date_Returnable'];
$Archived         =$_POST['Archived'];
$ProjectName         =$_POST['ProjectName'];


$sql = "exec SP_Items_UpdateItem
        @item_id='$item_id',
        @Item_Name='$Item_Name',
        @Category='$Category',
        @Subcategory='$Subcategory',
        @Brand='$Brand',
        @Sender='$Sender',
        @Details='$Details',
        @Date_Returnable='$Date_Returnable',
        @Archived='$Archived',
        @ProjectName='$ProjectName'
        "
;

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}


sqlsrv_free_stmt( $stmt);
?>