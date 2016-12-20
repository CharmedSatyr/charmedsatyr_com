/*
ISSUE TRACKER/Wish List
-Open Weather Map only provides an HTTPS API with paid accounts
-Get better icons from https://erikflowers.github.io/weather-icons/
*/

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
      bgCol = "rgb(249, 213, 237)";
      break;
  }
  return bgCol;
}

$(document).ready(function() {


/*
//HTML Geolocator

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
*/

  //Geolocator based on IP address
  $.getJSON('https://ipinfo.io', function(data) {
    var location = data.loc.split(',');
    var lat = location[0];
    var lon = location[1];

    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat=";
    //Weather display
    $.getJSON(weatherAPI + lat + "&lon=" + lon + "&APPID=" + "061f24cf3cde2f60644a8240302983f2", function(report) {

      //City
      var city = report.name;
      if (city !== undefined) {
        $('#city').html(city + ", ");
      } else {
        $('#city').html('Currently Unavailable, ');
      }
      //Country - only Korea will be spelled out
      function spell(val) {
        var a = "";
        if (val === 'KR') {
          a = 'South Korea';
        } else {
          a = val;
        }
        return a;
      }

      var country = spell(report.sys.country);
      if (country !== undefined) {
        $('#country').html(country);
      } else {
        $('#country').html('Location Not Detected');
      }
      //Temperature
      var temp = Math.round(report.main.temp - 273.15);

      if (temp !== undefined) {

        $('#tempC').html(temp + "&deg");
        $('#tempF').html(Math.round(temp * 1.8 + 32) + "&deg");
        $('#buttonM').html("C");
        $('#buttonI').html("F");
      } else {
        $('#tempC, #tempF').html('Currently Unavailable');
      }
      //Background color based on temp, per rangeOfColors above
      $('body').css("background-color", rangeOfColors(temp));

      //Icon
      var icon = report.weather[0].icon;
      var iconLink = "http://openweathermap.org/img/w/" + icon + ".png";
      if (icon !== undefined) {
        $('#icon').html("<img src=" + iconLink + ">");
      } else {
        $('#icon').html('');
      }
      //Description - Custom function capitalizes each word's first letter
      function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
        }
        str = str.join(' ');
        return str;
      }

      var description = titleCase(report.weather[0].description);
      if (description !== undefined) {
        $('#description').html(description);
      } else {
        $('#description').html('');
      }
      //Wind
      //Wind Speed
      var windSpeed = report.wind.speed;
      if (windSpeed !== undefined) {
        $('#windSpeedM').html(windSpeed.toFixed(1) + " m/s, ");
        $('#windSpeedI').html((windSpeed * 2.23694).toFixed(1) + " mph, ");
      } else {
        $('#windSpeedM, #windSpeedI').html('Currently Unavailable');
      }
      //Wind Direction - Custom function for the direction because the one from openweathermap.org is sometimes undefined
      var windDeg = Math.round(report.wind.deg);

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
            answer = "Not Calculated";
            break;
        }
        return answer;
      }
      $('#windDeg').html(compass(windDeg));

      //Pressure
      var pressure = report.main.pressure;
      if (pressure !== undefined) {
        $('#pressureM').html(pressure.toFixed(1) + " mb");
        $('#pressureI').html((pressure * 0.03).toFixed(1) + " in");
      } else {
        $('#pressureM, #pressureI').html('Currently Unavailable');
      }
      //Humidity
      var humidity = report.main.humidity;
      if (humidity !== undefined) {
        $('#humidity').html(humidity + '%');
      } else {
        $('#humidity').html('Currently Unavailable');
      }
      //Visibility
      var visibility = report.visibility;
      if (visibility !== undefined) {
        $('#visibilityM').html(visibility + ' m');
        $('#visibilityI').html(Math.round((visibility * 3.281)) + ' ft');
      } else {
        $('#visibilityM, #visibilityI').html('Currently Unavailable');
      }
      //Clouds
      var clouds = report.clouds.all;
      if (clouds !== undefined) {
        $('#clouds').html(clouds + "%");
      } else {
        $('#clouds').html('Currently Unavailable');
      }
    });

    //Metric/Imperial button toggle
    $('#buttonM, #buttonI').click(function() {
      $('#tempC, #tempF').toggleClass('goAway');
      $('#windSpeedM, #windSpeedI').toggleClass('goAway');
      $('#visibilityM, #visibilityI').toggleClass('goAway');
      $('#pressureM, #pressureI').toggleClass('goAway');
      $('#buttonM, #buttonI').toggleClass('goAway');
    });

  });
});
