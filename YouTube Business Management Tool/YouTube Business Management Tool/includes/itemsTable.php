<?php
include "../includes/databaseConn.php";

//Fetching Values from URL
$unassignedFilter=$_POST['unassignedFilter'];
$assignedFilter  =$_POST['assignedFilter'];
$archivedFilter  =$_POST['archivedFilter'];
$searchFilter=$_POST['searchFilter'];


$sql = "exec SP_Items_ItemList
        @unassignedFilter='$unassignedFilter',
        @assignedFilter='$assignedFilter',
        @archivedFilter='$archivedFilter',
        @searchFilter='$searchFilter'
        "
;

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}

$count = 0;

while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
    echo '
                                                <tr id="row'. $count .'">
                                                    <td>'.$row["item_name"]    .'</td>
                                                    <td>'.$row["brand"]    .'</td>
                                                    <td>'.$row["sender"]    .'</td>
                                                    <td>'.$row["Active_Project"]    .'</td>
                                                    <td>'.$row["category"]    .'</td>
                                                    <td>'.$row["subcategory"]   .'</td>
                                                    <td>'.$row["details"]    .'</td>
                                                    <td>'.$row["DateToReturn"]    .'</td>
                                                    <td>'.$row["archived"]    .'</td>
                                                    <td onclick="enableEdit('.$count.')" ><i id="icon'. $count .'" name="'.$row["item_name"]. '" class="fa fa-pencil fa-1x"></i> </td>
                                                </tr>'; $count++;

}

sqlsrv_free_stmt( $stmt);
?>