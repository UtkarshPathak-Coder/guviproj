<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require 'mysql.php';
    require 'mongodb.php';

    // Validate and sanitize user input
    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // MySQL: Use prepared statements to prevent SQL injection
    $stmt = $mysqli->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    // MySQL: Execute the statement
    if ($stmt->execute()) {
        // MongoDB: Create a BSON document for user profile
        $userProfile = [
            '_id' => new MongoDB\BSON\ObjectId(),
            'username' => $username,
            'age' => null,
            'dob' => null,
            'contact' => null
        ];

        // MongoDB: Insert the user profile document
        $bulk = new MongoDB\Driver\BulkWrite;
        $bulk->insert($userProfile);
        $mongoManager->executeBulkWrite('myapp_mongo_db.users', $bulk);

        echo json_encode(['status' => 'success', 'message' => 'Registration successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Registration failed']);
    }

    // Close the MySQL statement
    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
