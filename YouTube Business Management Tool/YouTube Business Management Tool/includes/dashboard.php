<?php

    $sql = "exec SP_DASHBOARD_OVERVIEW";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $activeProjects = $row['activeProjects'];
        $UnarchivedItems   = $row['UnarchivedItems'];
    }
    sqlsrv_free_stmt( $stmt);


?>