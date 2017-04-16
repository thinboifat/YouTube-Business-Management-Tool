<?php

$sql = "exec SP_Items_ItemList";

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
    echo "
                                                <tr>
                                                    <td>".$row['item_name']    ."</td>
                                                    <td>".$row['brand']    ."</td>
                                                    <td>".$row['sender']    ."</td>
                                                    <td>".$row['Active_Project']    ."</td>
                                                    <td>".$row['category']    ."</td>
                                                    <td>".$row['subcategory']   ."</td>
                                                    <td>".$row['details']    ."</td>
                                                    <td>".$row['DateToReturn']    ."</td>
                                                    <td>".$row['archived']    ."</td>
                                                </tr>";
}
?>