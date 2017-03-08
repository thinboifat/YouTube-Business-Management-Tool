<?php

$sql = "select top 50 * from item";

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
    echo "
                                                <tr>
                                                    <td>".$row['Item_Name']    ."</td>
                                                    <td>".$row['Brand']    ."</td>
                                                    <td>".$row['Sender']    ."</td>
                                                    <td>".$row['Archived']    ."</td>
                                                    <td>".$row['Is_Returnable']    ."</td>
                                                    <td>".$row['Quantity']   ."</td>
                                                    <td>".$row['Details']    ."</td>

                                                </tr>";
}
?>