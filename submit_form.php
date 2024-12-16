<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "BjarnikInteractive@gmail.com";

    $subject = "New Message from Contact Form";

    $email_content = "You have received a new message:\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "E-Mail: $email\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $email";

    if (mail($to, $subject, $email_content, $email_headers)) {
        echo "<p>Thanks for your message! We will contact you soon.</p>";
    } else {
        echo "<p>There was a problem with the sending of your mail. Please try again later.</p>";
    }
} else {
    echo "<p>Ungültiger Zugriff auf das Formular.</p>";
}
?>
