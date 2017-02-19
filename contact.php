<?php
/* Set e-mail recipient */
$myemailEntry  = "email@charmedsatyr.com";

/* Check all form inputs using check_input function */
$nameEntry = check_input($_POST['nameEntry'], 'Enter your name');
$subjectEntry  = check_input($_POST['subjectEntry'], 'Write a subjectEntry');
$emailEntry    = check_input($_POST['emailEntry']);
$websiteEntry  = check_input($_POST['websiteEntry']);
$messageEntry = check_input($_POST['messageEntry'], 'Write your message');

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $nameEntry
E-mail: $emailEntry
URL: $websiteEntry

Message:
$messageEntry

End of message
";

/* Send the message using mail() function */
mail($emailEntry, $subjectEntry, $messageEntry);

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
exit();
}
?>
