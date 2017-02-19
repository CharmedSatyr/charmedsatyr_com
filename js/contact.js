$('#submit').click(function() {

	var noSubmit = [0, 0, 0, 0, 0];

	var nameEntry = $('input[name=nameEntry]').val();
	var nameRegex = /^[a-zA-Z -]*$/;

	if (!nameEntry.match(nameRegex)) {
		$('#nameError').html('Only letters, hyphens, and whitespaces are allowed.');
		noSubmit[0] = 0;
	} else if (nameEntry === '') {
		$('#nameError').html('Please enter your name.');
		noSubmit[0] = 0;
	} else {
		$('#nameError').html('');
		noSubmit[0] = 1;
	}

	var emailEntry = $('input[name=emailEntry]').val();
	var emailRegex = /([\w\-]+\@[\w\-]+\.[\w\-].+)/;

	if (!emailEntry.match(emailRegex)) {
		$('#emailError').html('Invalid email format.');
		noSubmit[1] = 0;
	} else if (emailEntry === '') {
		$('#emailError').html('Please include an email address.');
		noSubmit[1] = 0;
	} else {
		$('#emailError').html('');
		noSubmit[1] = 1;
	}

	var websiteEntry = $('input[name=websiteEntry]').val();
	var websiteRegex = /[<>{}!`'"$*;\\]/gi;

	if (websiteEntry.match(websiteRegex)) {
		$('#websiteError').html('Invalid website format.');
		noSubmit[2] = 0;
	} else {
		$('#websiteError').html('');
		noSubmit[2] = 1;
	}

	var subjectEntry = $('input[name=subjectEntry]').val();
	var subjectRegex = /[<>{}]/;

	if (subjectEntry.match(subjectRegex)) {
		$('#subjectError').html('Please include a subject.');
		noSubmit[3] = 0;
	} else if (subjectEntry === '') {
		$('#subjectError').html('Please include a subject.');
		noSubmit[3] = 0;
	} else {
		$('#subjectError').html('');
		noSubmit[3] = 1;
	}

	var messageEntry = $('input[name=messageEntry]').val();

	if (messageEntry === '') {
		$('#messageError').html('Didn\'t you mean to write a message?');
		noSubmit[4] = 0;
	} else {
		$('#messageError').html('');
		noSubmit[4] = 1;
	}

	var a = noSubmit.reduce(function(acc, curr, index) {
		return acc + curr;
	});
	if (a === 5) {
		window.location = 'contact.php';
	}

});
