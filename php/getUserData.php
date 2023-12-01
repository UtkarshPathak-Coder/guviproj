<?php
require 'mongodb.php';

// Assume you have stored the user ID in Redis during login
// Replace 'your_user_id' with the actual key used for storing the user ID
$userId = $redisClient->get('your_user_id');

if ($userId) {
    // MongoDB: Fetch user data based on the user ID
    $query = new MongoDB\Driver\Query(['_id' => new MongoDB\BSON\ObjectId($userId)]);
    $cursor = $mongoManager->executeQuery('myapp_mongo_db.users', $query);

    // Extract user data from the cursor
    $userData = $cursor->toArray()[0];

    // Return user data as JSON
    echo json_encode(['status' => 'success', 'userData' => $userData]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'User ID not found']);
}
?>
