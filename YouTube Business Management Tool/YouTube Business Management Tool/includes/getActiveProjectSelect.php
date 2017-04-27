<?php

//Get the option for the select drop down upon item edit (table)

include "../includes/databaseConn.php";

$sql = "exec SP_Projects_Select";


echo ('<option value=""</option>');

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}
while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
    echo ('<option value="' . $row['project_Name']. '">'. $row['project_Name'].'</option>');
}

sqlsrv_free_stmt( $stmt);
sqlsrv_close($connection); // Connection Closed

?>