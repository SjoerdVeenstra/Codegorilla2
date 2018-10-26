<?php

// Initialize the session
session_start();

// check if the user is loggen in. if not, then redirect him to the login page.

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>