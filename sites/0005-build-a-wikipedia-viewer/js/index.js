//The function run on clicking the Random button
$("#rando").click(function() {
	var randoLink = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=20&rnnamespace=0&format=json";
	$.ajax({
		url: randoLink,
		type: 'GET',
		//This MUST be jsonp
		dataType: 'jsonp',
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		crossDomain: true,
		success: function(wiki) {
			console.log('Success!');

			var html = "<div>Selections from Wikipedia:</div><br>";
			var result = wiki.query.random;

			for (var x in result) {
				html += "<div row class='well'>";
				html += "<a href='https://en.wikipedia.org/?curid=" + result[x].id + "'  target='_blank'>" + result[x].title + "</a></div>";
			}
			$('#Results').html(html);
		},
		error: function() {
			console.log("Sorry, there was a problem connecting!");
		},
		complete: function() {
			console.log("The request is complete!");
		}
	});
});

//The function run on typing in the search bar
$("#bar").on('keyup keypress', function(e) {

	//This prevents the Enter key from breaking the page
	var keyCode = (e.keyCode || e.which);
	if (keyCode === 13) {
		e.preventDefault();
		return false;
	}

	var entry = $('input[name=Search]').val();
	var searchTerm = encodeURI(entry);

	var link = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&redirects=1&exsentences=2&exlimit=15&exintro=1&explaintext=1s&gsrnamespace=0&gsrlimit=15&gsrsearch=' + searchTerm;

	//From https://learn.jquery.com/ajax/
	$.ajax({
		url: link,
		type: 'GET',
		//This MUST be jsonp
		dataType: 'jsonp',
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		crossDomain: true,
		success: function(wiki) {
			console.log('Success!');
			var html = "<div>Results for \"" + entry + "\":</div><br>";

			var result = wiki.query.pages;

			for (var x in result) {
				html += "<div class='row well'>";
				html += "<a href='https://en.wikipedia.org/?curid=" + result[x].pageid + "'  target='_blank'>" + result[x].title + "</a>";
				html += "<p>" + result[x].extract + "</p></div>";
				$('#Results').html(html);
			}
		},
		error: function() {
			console.log("Sorry, there was a problem connecting!");
		},
		complete: function() {
			console.log("The request is complete!");
		}
	});
});
