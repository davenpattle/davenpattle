<?php
$sender = $_POST['name'];
$return = $_POST['email'];
$message = nl2br($_POST['message']);

$to = "marketing@nitkracing.com";
$subject = "Hello";

$headers = "From: " . strip_tags($return) . "\r\n";
$headers .= "Reply-To: ". strip_tags($return) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$msg = "<html><body>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px solid #bbb;'>New Contact Message</h2>\r\n";
$msg .= "Sent by: <strong>".$sender."</strong><br />\r\n";
$msg .= "Respond to: <strong>".$return."</strong><br /><br />\r\n";
$msg .= "Message: <br />\r\n";
$msg .= "<em>".$message."</em><br />\r\n";
$msg .= "</body></html>";

if(@mail($to, $subject, $msg, $headers)) {
	echo "yes";
} else {
	echo "no";
}

?>