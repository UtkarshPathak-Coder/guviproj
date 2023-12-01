<?php
// Redis connection details
$redisHost = '127.0.0.1';
$redisPort = '6379';
$redisPassword = null; // Replace with your Redis password, if applicable

// Establish Redis connection
try {
    $redisClient = new Predis\Client([
        'scheme' => 'tcp',
        'host'   => $redisHost,
        'port'   => $redisPort,
        'password' => $redisPassword,
    ]);

    echo "Connected to Redis successfully\n";
} catch (Exception $e) {
    echo "Redis connection error: " . $e->getMessage() . "\n";
    exit;
}
?>
