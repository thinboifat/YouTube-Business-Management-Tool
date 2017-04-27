<?php
// log into the database, or show error if failure occurs:
$connectionInfo = array("UID" => "goldkey@marcusuniwork", "pwd" => "SecretToSucce55", "Database" => "UniWork", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:marcusuniwork.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
if( $conn === false) {
    die( print_r( sqlsrv_errors(), true));
}
?>