<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';

    // Establish database connection
    $conn = mysqli_connect("localhost", "root", "");

    // Check if connection is successful
    if (!$conn) {
        echo "Connection failed: " . mysqli_connect_error();
        exit;
    } 

    // Create or select database
    $query = "CREATE DATABASE IF NOT EXISTS itfloor";
    $val = mysqli_query($conn, $query);
    if (!$val) {
        echo "Database 'itfloor' not created (if it didn't exist).<br>";
    } 

    $val = mysqli_select_db($conn, "itfloor");
    if (!$val) {
        echo "Database 'itfloor' not selected.<br>";
    }

    // Create or select table
    $query = "CREATE TABLE IF NOT EXISTS signup (
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        gender VARCHAR(10) NOT NULL,
        password VARCHAR(255), -- Changed from 'passwords' to 'password'
        PRIMARY KEY (email)
    )";
    $val = mysqli_query($conn, $query);
    if (!$val) {
        echo "Table 'signup' not created (if it didn't exist).<br>";
    } 

    // Insert data into the table
    $q2 = "INSERT INTO signup (name, email, gender, password) VALUES ('$name', '$email', '$gender', '$password')";
    $val = mysqli_query($conn, $q2);
    if ($val) {
        echo "<script>window.location.href = '/itfloor/home/home.html';</script>";

    
    } else {
        echo "Error inserting data: " . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}

?>
