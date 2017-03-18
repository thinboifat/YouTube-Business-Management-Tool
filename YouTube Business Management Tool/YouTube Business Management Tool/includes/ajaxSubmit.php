<?php
include "../includes/databaseConn.php";
//Fetching Values from URL
$projectName=$_POST['projectName'];
$projectCategory=$_POST['projectCategory'];
$projectSubCategory=$_POST['projectSubCategory'];
$currentdate = date("Y-m-d H:i:s");
$projectClient=$_POST['projectClient'];
$productionDate=$_POST['productionDate'];
$projectDetails=$_POST['projectDetails'];
//Insert query

$sql =  "exec SP_InsertProject
		@Project_Name = '$projectName',
		@Category = '$projectCategory',
		@Subcategory = '$projectSubCategory',
		@Start_Date = '$currentdate',
		@Status = 'Planning',
		@Primary_Client = '$projectClient',
		@Creation_Start = '$productionDate',
		@details = '$projectDetails'
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