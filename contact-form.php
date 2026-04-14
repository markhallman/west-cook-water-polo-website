<?php
// Contact form handler for West Cook Water Polo
// Sends form submissions to info@westcookwaterpolo.com

// Configuration
$to_email = 'markwhallman@gmail.com'; // Change this to your actual email
$subject_prefix = 'West Cook Water Polo Contact: ';

// Security headers
header('Content-Type: text/plain');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'message'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($_POST[$field]) || trim($_POST[$field]) === '') {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo 'Please fill in all required fields: ' . implode(', ', $missing_fields);
    exit;
}

// Sanitize and validate input
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
$phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
$program = filter_var(trim($_POST['program']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

// Validate email format
if (!$email) {
    http_response_code(400);
    echo 'Please provide a valid email address';
    exit;
}

// Additional spam protection
$spam_keywords = ['http://', 'https://', 'www.', '.com', '.org', '.net'];
$message_lower = strtolower($message);
$phone_lower = strtolower($phone);

foreach ($spam_keywords as $keyword) {
    if (strpos($message_lower, $keyword) !== false || strpos($phone_lower, $keyword) !== false) {
        http_response_code(400);
        echo 'Invalid content detected';
        exit;
    }
}

// Create email subject
$subject = $subject_prefix . $name;

// Create email body
$email_body = "New contact form submission from West Cook Water Polo website:\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";

if (!empty($phone)) {
    $email_body .= "Phone: " . $phone . "\n";
}

if (!empty($program)) {
    $email_body .= "Interested Program: " . $program . "\n";
}

$email_body .= "\nMessage:\n" . $message . "\n";

// Create email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
try {
    $mail_sent = mail($to_email, $subject, $email_body, $headers);
    
    if ($mail_sent) {
        // Redirect to success page or show success message
        header('Location: contact.html?success=1');
        exit;
    } else {
        http_response_code(500);
        echo 'Failed to send message. Please try again later.';
    }
} catch (Exception $e) {
    http_response_code(500);
    echo 'An error occurred. Please try again later.';
}
?>
