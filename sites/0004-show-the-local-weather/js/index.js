var lat, lon;

//Access the DarkSky API to get current weather
function pullWeather() {

	var key = '011ffb7f7744c9434fcbcdc0c9a0b65f';
	var units = '?units=si';
	var url = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + units;

	return $.ajax({
		url: url,
		dataType: 'jsonp',
		success: function(data) {
			console.log('Success! Displaying weather...')
			report(data);
		},
		error: function() {
			console.log('Unable to display weather.');
		}
	});
}

//Pull weather for geolocation based on IP address
$.getJSON('https://ipinfo.io', function(data) {
	console.log('IP address detected: ' + data.ip + '. Lat, Lon: ' + lat + ', ' + lon);

	var location = data.loc.split(',');
	lat = location[0];
	lon = location[1];

	var country = data.country;

	if (data.country == 'KR') {
		country = 'South Korea';
	}

	$('#location').html(data.city + ', ' + data.region + ', ' + country);

	pullWeather();
});

$('#accuracy').click(function() {
  //Pull weather for geolocation based on HTML5
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      lat = (pos.coords.latitude).toFixed(3);
      lon = (pos.coords.longitude).toFixed(3);
      console.log('HTML5 geolocation permitted. Lat, Lon: ' + lat + ', ' + lon);

      //Google API name for location - DarkSky doesn't offer reverse geolocation
      var kee = 'AIzaSyAMejMCinUM1S2dzyVCpJf9q-Ns-e1YSnw';
      var mapAPI = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key' + kee;

      $.getJSON(mapAPI, function(JSON) {
        $('#location').html(JSON.results[(JSON.results.length - 3)].formatted_address);
      });

      pullWeather();
    });
  } else {
    console.log('HTML5 geolocation not permitted.');
  }
});

//Calculate and organize weather report based on active geolocation
function report(data) {

	//Place icons from https://erikflowers.github.io/weather-icons/
	if (data.currently.icon) {
		$('#icon').addClass('wi-forecast-io-' + data.currently.icon);
	} else {
		$('#icon').addClass('wi-cloud'); //fallback icon
	}

	//Range of colors used for the background, based on metric temperature benchmarks
	function rangeOfColors(val) {
		var bgCol = '';
		switch (true) {
			case (val < 0):
				bgCol = 'rgba(1, 1, 255, 1.0)';
				break;
			case ((val >= 0) && (val < 4.44)):
				bgCol = 'rgba(1, 146, 255, 1.0)';
				break;
			case ((val >= 4.44) && (val < 10)):
				bgCol = 'rgba(76, 192, 220, 1.0)';
				break;
			case ((val >= 10) && (val < 15.56)):
				bgCol = 'rgba(1, 255, 154, 1.0)';
				break;
			case ((val >= 15.56) && (val < 21.11)):
				bgCol = 'rgba(156, 255, 41, 1.0)';
				break;
			case ((val >= 21.11) && (val < 26.67)):
				bgCol = 'rgba(255, 248, 3, 1.0)';
				break;
			case ((val >= 26.67) && (val < 32.22)):
				bgCol = 'rgba(255, 163, 3, 1.0)';
				break;
			case ((val >= 32.22) && (val < 37.78)):
				bgCol = 'rgba(255, 87, 3, 1.0)';
				break;
			case (val >= 37.78):
				bgCol = 'rgba(255, 0, 0, 1.0)';
				break;
			default:
				bgCol = 'pink';
				break;
		}
		return bgCol;
	}

	//Temperature
	var temp = Math.round(data.currently.temperature);

	$('#tempC').html(temp + '&deg;');
	$('#buttonM').html('C');

	$('#tempF').html(Math.round(temp * 1.8 + 32) + '&deg');
	$('#buttonI').html('F');

	//Background color based on temp, per rangeOfColors above
	$('body').css('background-color', rangeOfColors(temp));

	//Description - seems easier to replace the C temp with F than to call the API again
	$('#currentDescription').html(data.currently.summary);
	$('#dailySummaryM').html(data.daily.summary);

	var regex = /([0-9]+°C)/g;
	var oldVal = data.daily.summary.match(regex);
	var newVal = Math.round(parseFloat(oldVal) * 1.8 + 32) + '°' + 'F';
	var dailySummaryI = (data.daily.summary).replace(oldVal, newVal);
	$('#dailySummaryI').html(dailySummaryI);

	//Wind Speed
	$('#windSpeedM').html((data.currently.windSpeed).toFixed(1) + ' m/s ');
	$('#windSpeedI').html((data.currently.windSpeed * 2.23694).toFixed(1) + ' mph ');

	//Wind Direction
	var windDeg = Math.round(data.currently.windBearing);
	$('#compaz').addClass('towards-' + data.currently.windBearing + '-deg');

	function compass(val) {
		switch (true) {
			case (((val > 348.75) && (val <= 360)) || ((val >= 0) && (val <= 11.25))):
				answer = val + '&deg N';
				break;
			case ((val > 11.25) && (val <= 33.75)):
				answer = val + '&deg NNE';
				break;
			case ((val > 33.75) && (val <= 56.25)):
				answer = val + '&deg NE';
				break;
			case ((val > 56.25) && (val <= 78.75)):
				answer = val + '&deg ENE';
				break;
			case ((val > 78.75) && (val <= 101.25)):
				answer = val + '&deg E';
				break;
			case ((val > 101.25) && (val <= 123.75)):
				answer = val + '&deg ESE';
				break;
			case ((val > 123.75) && (val <= 146.25)):
				answer = val + '&deg SE';
				break;
			case ((val > 146.25) && (val <= 168.75)):
				answer = val + '&deg SSE';
				break;
			case ((val > 168.75) && (val <= 191.25)):
				answer = val + '&deg S';
				break;
			case ((191.25 > val) && (val <= 213.75)):
				answer = val + '&deg SSW';
				break;
			case ((213.75 > val) && (val <= 236.25)):
				answer = val + '&deg SW';
				break;
			case ((val > 236.25) && (val <= 258.75)):
				answer = val + '&deg WSW';
				break;
			case ((val > 258.75) && (val <= 281.25)):
				answer = val + '&deg W';
				break;
			case ((val > 281.25) && (val <= 303.75)):
				answer = val + '&deg WNW';
				break;
			case ((val > 303.75) && (val <= 326.25)):
				answer = val + '&deg NW';
				break;
			case ((val > 326.25) && (val <= 348.75)):
				answer = val + '&deg NNW';
				break;
			default:
				answer = '';
				break;
		}
		return answer;
	}
	$('#windDeg').html(compass(windDeg));

	//Pressure
	$('#pressureM').html(Math.round(data.currently.pressure) + ' hPa');
	$('#pressureI').html(Math.round(data.currently.pressure * 0.03) + ' inHg');

	//Humidity
	$('#humidity').html(Math.round(data.currently.humidity * 100) + '%');

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
}

//Metric/Imperial button toggle
$('#buttonM, #buttonI').click(function() {
	$('#tempC, #tempF').toggleClass('goAway');
	$('#windSpeedM, #windSpeedI').toggleClass('goAway');
	$('#visibilityM, #visibilityI').toggleClass('goAway');
	$('#pressureM, #pressureI').toggleClass('goAway');
	$('#buttonM, #buttonI').toggleClass('goAway');
	$('#dailySummaryM, #dailySummaryI').toggleClass('goAway');
});
