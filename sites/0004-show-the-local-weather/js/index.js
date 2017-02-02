//Range of colors used for the background, based on metric temperature benchmarks
function rangeOfColors(val) {
	var bgCol = "";
	switch (true) {
		case (val < 0):
			bgCol = "rgba(1, 1, 255, 1.0)";
			break;
		case ((val >= 0) && (val < 4.44)):
			bgCol = "rgba(1, 146, 255, 1.0)";
			break;
		case ((val >= 4.44) && (val < 10)):
			bgCol = "rgba(76, 192, 220, 1.0)";
			break;
		case ((val >= 10) && (val < 15.56)):
			bgCol = "rgba(1, 255, 154, 1.0)";
			break;
		case ((val >= 15.56) && (val < 21.11)):
			bgCol = "rgba(156, 255, 41, 1.0)";
			break;
		case ((val >= 21.11) && (val < 26.67)):
			bgCol = "rgba(255, 248, 3, 1.0)";
			break;
		case ((val >= 26.67) && (val < 32.22)):
			bgCol = "rgba(255, 163, 3, 1.0)";
			break;
		case ((val >= 32.22) && (val < 37.78)):
			bgCol = "rgba(255, 87, 3, 1.0)";
			break;
		case (val >= 37.78):
			bgCol = "rgba(255, 0, 0, 1.0)";
			break;
		default:
			bgCol = "pink";
			break;
	}
	return bgCol;
}

//Icons
var icons = {
	clear_day: '\u2600️',
	clear_night: '\uD83C\uDF19',
	rain: '\u2614️',
	snow: '\uD83C\uDF28',
	sleet: '\uD83C\uDF27',
	wind: '\uD83C\uDF2C',
	fog: '\uD83C\uDF2B',
	cloudy: '\u2601️',
	partly_cloudy_day: '\uD83C\uDF25',
	partly_cloudy_night: '\uD83C\uDF19\u2601️'
};

//Find your location
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(pos) {

		var lat = (pos.coords.latitude).toFixed(3); //40.714;
		var lon = (pos.coords.longitude).toFixed(3); //-73.961;
		var key = '011ffb7f7744c9434fcbcdc0c9a0b65f';
		var units = '?units=si';
		var url = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + units;

		var googleKey = 'AIzaSyAMejMCinUM1S2dzyVCpJf9q-Ns-e1YSnw';
		var mapAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key' + googleKey; //=YOUR_API_KEY' + lon + ',' + lat + 'key=' + googleKey;


		//Google API for location
		$.getJSON(mapAPI, function(JSON) {

			$('#location').html(JSON.results[0].address_components[2].long_name + ', ' + JSON.results[0].address_components[4].long_name + ', ' + JSON.results[0].address_components[5].long_name);

		});

		//DarkSky API for location weather
		return $.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(data) {
				console.log('Success! Displaying weather data.');

				//Icons
				$('#icon').html(icons['' + data.currently.icon.replace(/-/g, '_')]).attr('title', data.currently.summary);

				//Temperature
				var temp = Math.round(data.currently.temperature);

				$('#tempC').html(temp + '&deg;');
				$('#buttonM').html("C");

				$('#tempF').html(Math.round(temp * 1.8 + 32) + "&deg");
				$('#buttonI').html("F");

				//Background color based on temp, per rangeOfColors above
				$('body').css("background-color", rangeOfColors(temp));

				//Description
				$('#currentDescription').html(data.currently.summary);
				$('#dailySummary').html(data.daily.summary);

				//Wind Speed
				$('#windSpeedM').html((data.currently.windSpeed).toFixed(1) + ' m/s, ');
				$('#windSpeedI').html((data.currently.windSpeed * 2.23694).toFixed(1) + " mph, ");

				//Wind Direction
				var windDeg = Math.round(data.currently.windBearing);

				function compass(val) {
					switch (true) {
						case (((val > 348.75) && (val <= 360)) || ((val >= 0) && (val <= 11.25))):
							answer = val + "&deg N";
							break;
						case ((val > 11.25) && (val <= 33.75)):
							answer = val + "&deg NNE";
							break;
						case ((val > 33.75) && (val <= 56.25)):
							answer = val + "&deg NE";
							break;
						case ((val > 56.25) && (val <= 78.75)):
							answer = val + "&deg ENE";
							break;
						case ((val > 78.75) && (val <= 101.25)):
							answer = val + "&deg E";
							break;
						case ((val > 101.25) && (val <= 123.75)):
							answer = val + "&deg ESE";
							break;
						case ((val > 123.75) && (val <= 146.25)):
							answer = val + "&deg SE";
							break;
						case ((val > 146.25) && (val <= 168.75)):
							answer = val + "&deg SSE";
							break;
						case ((val > 168.75) && (val <= 191.25)):
							answer = val + "&deg S";
							break;
						case ((191.25 > val) && (val <= 213.75)):
							answer = val + "&deg SSW";
							break;
						case ((213.75 > val) && (val <= 236.25)):
							answer = val + "&deg SW";
							break;
						case ((val > 236.25) && (val <= 258.75)):
							answer = val + "&deg WSW";
							break;
						case ((val > 258.75) && (val <= 281.25)):
							answer = val + "&deg W";
							break;
						case ((val > 281.25) && (val <= 303.75)):
							answer = val + "&deg WNW";
							break;
						case ((val > 303.75) && (val <= 326.25)):
							answer = val + "&deg NW";
							break;
						case ((val > 326.25) && (val <= 348.75)):
							answer = val + "&deg NNW";
							break;
						default:
							answer = '';
							break;
					}
					return answer;
				}
				$('#windDeg').html(compass(windDeg));

				//Pressure
				$('#pressureM').html(data.currently.pressure + ' hPa');
				$('#pressureI').html((data.currently.pressure * 0.03).toFixed(1) + " in");

				//Humidity
				$('#humidity').html(data.currently.humidity * 100 + '%');

				//Visibility
				if (data.currently.visibility !== undefined) {
					$('#visibilityM').html((data.currently.visibility).toFixed(1) + ' km');
					$('#visibilityI').html((data.currently.visibility * 0.621).toFixed(1) + ' mi');
				} else {
					$('#visibilityM, #visibilityI').html('Unavailable');
				}

				//Cloud cover
				if (data.currently.cloudCover !== undefined) {
					$('#clouds').html(data.currently.cloudCover + '%');
				} else {
					$('#clouds').html('Unavailable');
				}
			},
			error: function() {
				console.log('Unable to display weather.');
			}
		});
	});
} else {
	console.log('Geolocation data unavailable.');
}

//Metric/Imperial button toggle
$('#buttonM, #buttonI').click(function() {
	$('#tempC, #tempF').toggleClass('goAway');
	$('#windSpeedM, #windSpeedI').toggleClass('goAway');
	$('#visibilityM, #visibilityI').toggleClass('goAway');
	$('#pressureM, #pressureI').toggleClass('goAway');
	$('#buttonM, #buttonI').toggleClass('goAway');
	$('#dailySummary').toggleClass('goAway');
});
