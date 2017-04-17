<?php

include "../includes/databaseConn.php";

$sql = "select category, count(category) as CategoryCount from item group by Category";


$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

$array = array();

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        array_push(
            $array,
            array(
                 'label' => $row['category'],
                 'value' => $row['CategoryCount']
            )
        );
    }
    echo json_encode($array);

sqlsrv_free_stmt( $stmt);

?>