<?php
/* Set e-mail recipient */
$myemail  = "email@charmedsatyr.com";

/* Check all form inputs using check_input function */
$nameEntry = check_input($_POST['nameEntry'], "Enter your name");
$subjectEntry  = check_input($_POST['subjectEntry'], "Write a subject");
$emailEntry    = check_input($_POST['emailEntry']);
$websiteEntry  = check_input($_POST['websiteEntry']);
$likeit   = check_input($_POST['likeit']);
$how_find = check_input($_POST['how']);
$messageEntry = check_input($_POST['messageEntry'], "Write your message");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $emailEntry))
{
    show_error("E-mail address not valid");
}

/* If URL is not valid set $websiteEntry to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $websiteEntry))
{
    $websiteEntry = '';
}

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $nameEntry
E-mail: $emailEntry
URL: $websiteEntry

Like the website? $likeit
How did he/she find it? $how_find

message:
$messageEntry

End of message
";

/* Send the message using mail() function */
mail($myemail, $subjectEntry, $message);

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
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>
