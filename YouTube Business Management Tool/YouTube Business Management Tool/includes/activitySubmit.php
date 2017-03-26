<?php


include "../includes/databaseConn.php";

//Fetching Values from URL
$projName=$_POST['projName'];
$projStatus=$_POST['projStatus'];
$details=$_POST['details'];
$actType=$_POST['actType'];
$videoURL=$_POST['videoURL'];
$linkedItemName=$_POST['linkedItemName'];


$sql = "exec SP_update_project
        @Project_name = '$projName',
        @act_Type = '$actType',
        @_details = '$details',
        @Status = '$projStatus',
        @videoUrl = '$videoURL',
        @linkedItemName = '$linkedItemName';
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