<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $name = $_POST['fnume'];
    $email = $_POST['femail'];
    $message = $_POST['fmessage'];


    // Generate the HTML output with the form details
    $output = "<p>Name: " . $name . "</p>";
    $output .= "<p>Email: " . $email . "</p>";
    $output .= "<p>Message: " . $message . "</p>";
    $output .= "<p>Thank you for your message!</p>";

    // Return the HTML output
    echo $output;
}
?>