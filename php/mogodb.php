<?php
// MongoDB connection details
$mongoHost = 'localhost';
$mongoPort = '27017';
$mongoDatabase = 'mydbproj'; // Replace with your MongoDB database name

// Establish MongoDB connection
$mongoManager = new MongoDB\Driver\Manager("mongodb://$mongoHost:$mongoPort");

// Check if the connection is successful
try {
    $mongoManager->executeCommand($mongoDatabase, new MongoDB\Driver\Command(['ping' => 1]));
    echo "Connected to MongoDB successfully\n";
} catch (MongoDB\Driver\Exception\Exception $e) {
    echo "MongoDB connection error: " . $e->getMessage() . "\n";
    exit;
}
?>
