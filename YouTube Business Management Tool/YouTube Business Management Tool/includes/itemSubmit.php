<?php
include "../includes/databaseConn.php";
//Fetching Values from URL

$newItemName = $_POST['newItemName'];
$newItemCategory = $_POST['newItemCategory'];
$newItemSubCategory = $_POST['newItemSubCategory'];
$newitemBrand = $_POST['newItemBrand'];
$newItemSender = $_POST['newItemSender'];
$newItemShipDate = $_POST['newItemShipDate'];
$newItemReturnDate = $_POST['newItemReturnDate'];
$newItemDetails = $_POST['newItemDetails'];

//Insert query

$sql =  "exec SP_InsertItem
         @Item_Name = '$newItemName',
         @Category = '$newItemCategory',
         @Subcategory = '$newItemSubCategory',
         @Brand = '$newitemBrand',
         @Sender = '$newItemSender',
         @Date_Shipped = '$newItemShipDate',
         @Date_Returnable = '$newItemReturnDate',
         @Is_Returnable = 1,
         @Details = '$newItemDetails',
         @userID = 1,
         @quantity = 1;
        "
;

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

echo "Form Submitted Succesfully";

sqlsrv_free_stmt( $stmt);

sqlsrv_close($connection); // Connection Closed



?>