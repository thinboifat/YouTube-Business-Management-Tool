<?php




include "../includes/databaseConn.php";

$sql = "exec SP_Projects_Select";

echo ('         <i class="fa fa-clock-o fa-fw"></i>Project Name
                <div class="pull-right">
                <select class="customSelect" id="videoList" name="videoList">');

$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}
while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
    echo ('<option value="' . $row['project_Name']. '">'. $row['project_Name'].'</option>');
}

sqlsrv_free_stmt( $stmt);

echo ('</select></div>');


?>