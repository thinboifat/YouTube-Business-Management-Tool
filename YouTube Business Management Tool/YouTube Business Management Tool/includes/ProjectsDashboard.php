<?php

    $sql = "exec SP_PROJECTS_OVERVIEW";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $incompleteProjects = $row['incompleteProjects'];
        $publishedVideos   = $row['publishedVideos'];
        $completeProjects  = $row['completeProjects'];
    }
    sqlsrv_free_stmt( $stmt);




?>