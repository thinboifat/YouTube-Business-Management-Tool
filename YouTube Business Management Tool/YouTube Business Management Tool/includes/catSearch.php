<?php

//This page is used to get a live readout of categories in the db. It is not currently in use by Goldkey


    $key=$_GET['key'];
    $array = array();

    include "../includes/databaseConn.php";

    $sql = "SP_Projects_liveCategorySearch
            @input ='$key'";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $array[] = $row['category_name'];
    }
    sqlsrv_free_stmt( $stmt);
    sqlsrv_close($connection); // Connection Closed
    echo json_encode($array);

    // Produced with help from https://codeforgeek.com/2014/09/ajax-search-box-php-mysql/
?>
