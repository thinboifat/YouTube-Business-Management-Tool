<?php
    //get the list of items in the db as select options (items page)

        include "../includes/databaseConn.php";

        $sql = "execute SP_Projects_ItemList";

        echo '<div class="form-group"><label>Linked Item</label><select class="form-control" id="item_name"> <option></option>';

        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }


        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
            echo '<option>'. $row['item_Name'] .'</option>';
        }

        sqlsrv_free_stmt( $stmt);
        sqlsrv_close($connection); // Connection Closed
        echo '</select></div>';

?>

