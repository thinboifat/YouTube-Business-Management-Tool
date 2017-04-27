<?php

//get the values for the bar chart on the items page

include "../includes/databaseConn.php";

$sql = "exec SP_Items_GetMonthlyGraph";


$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

$array = array();

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        array_push(
            $array,
            array(
                 'y' => $row['Month'],
                 'a' => $row['Items_In'],
                 'b' => $row['Items_Out']
            )
        );
    }
    echo json_encode($array);

sqlsrv_free_stmt( $stmt);
sqlsrv_close($connection); // Connection Closed
?>