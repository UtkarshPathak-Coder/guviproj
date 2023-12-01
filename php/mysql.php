<?php
$mysqli = new mysqli('localhost', 'root', '', 'myapp_mysql_db');

if ($mysqli->connect_error) {
    die("MySQL Connection failed: " . $mysqli->connect_error);
}
?>
