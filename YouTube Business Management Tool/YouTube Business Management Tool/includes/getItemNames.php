<?php


        include "../includes/databaseConn.php";

        $sql = "select item_name from item where archived = 'n'";

        echo '<div class="form-group"><label>Linked Item</label><select class="form-control" id="item_name"> <option></option>';

        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }


        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
            echo '<option>'. $row['item_name'] .'</option>';
        }

        sqlsrv_free_stmt( $stmt);
        echo '</select></div>';

?>

