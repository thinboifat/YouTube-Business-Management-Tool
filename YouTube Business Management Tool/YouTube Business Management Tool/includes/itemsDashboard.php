<?php

    $sql = "exec SP_ITEMS_OVERVIEW";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $UnassignedItems = $row['UnassignedItems'];
        $AssignedItems   = $row['AssignedItems'];
        $PublishedItems  = $row['PublishedItems'];
        $ArchivedItems   = $row['ArchivedItems'];
    }
    sqlsrv_free_stmt( $stmt);


?>