<?php
    //this page is used to get the dashboard values for the status panels

    include "../includes/databaseConn.php";

    $sql = "exec SP_DASHBOARD_OVERVIEW";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }

    /* Process results */
    $json = array();

    do {
        while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
            $json = $row;
        }
    } while ( sqlsrv_next_result($stmt) );

    /* Run the tabular results through json_encode() */
    /* And ensure numbers don't get cast to strings */
    echo json_encode($json);
    /* Free statement and connection resources. */
    sqlsrv_free_stmt( $stmt);
    sqlsrv_close( $conn);

?>