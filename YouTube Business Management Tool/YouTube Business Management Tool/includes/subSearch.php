<?php
    $key=$_GET['key'];
    $array = array();

    include "../includes/databaseConn.php";

    $sql = "select category_name from project_category where is_subcategory = 'y' and category_name like '%{$key}%'";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $array[] = $row['category_name'];
    }
    sqlsrv_free_stmt( $stmt);

    echo json_encode($array);

// Produced with help from https://codeforgeek.com/2014/09/ajax-search-box-php-mysql/
?>