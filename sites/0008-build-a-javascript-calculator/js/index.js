var display = '';

function calc(display) {
	var str = arguments[0].split(' ');

	//Convert string to numbers and math characters
	for (var x in str) {
		if (Boolean(parseFloat(str[x])) !== false) {
			str[x] = parseFloat(str[x]);
		}
	}

	/*
//Factorial - however, it isn't integrated yet, and parseFloat(n!) may not work.

//Possibly better, recursive factorial function. Need to be integrated.
function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

//Old factorial function
	function fact(val) {
    var o = val - 1;
    while (o > 0) {
      val = val * o;
      o--;
    }
    return val;
  }

  for (var m = 0; m < str.length; m++) {
    if (str[m] === '!') {
      str.splice((m - 1), 2, (fact(str[m - 1])));
    } return str;
  }
*/

	//Multiplication  & division respecting order of operations
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '*') {
			str.splice((i - 1), 3, (str[i - 1] * str[i + 1]));
		}
	}

	for (var j = 0; j < str.length; j++) {
		if (str[j] === '/') {
			str.splice((j - 1), 3, (str[j - 1] / str[j + 1]));
		}
	}
	//Then add and subtract
	var equals = str[0];

	for (var k = 0; k < str.length; k++) {
		if (str[k] === '+') {
			equals += str[k + 1];
		}
	}
	for (var l = 0; l < str.length; l++) {
		if (str[l] === '-') {
			equals -= str[l + 1];
		}
	}
	//Error handler
	if (equals !== 0 && Boolean(equals) === false) {
		return 'Would you mind rechecking your format?';
	} else {
		return equals;
	}
}

$('#num1').on('click', function() {
	$('#display').html(display += '1');
});
$('#num2').on('click', function() {
	$('#display').html(display += '2');
});
$('#num3').on('click', function() {
	$('#display').html(display += '3');
});
$('#num4').on('click', function() {
	$('#display').html(display += '4');
});
$('#num5').on('click', function() {
	$('#display').html(display += '5');
});
$('#num6').on('click', function() {
	$('#display').html(display += '6');
});
$('#num7').on('click', function() {
	$('#display').html(display += '7');
});
$('#num8').on('click', function() {
	$('#display').html(display += '8');
});
$('#num9').on('click', function() {
	$('#display').html(display += '9');
});
$('#num0').on('click', function() {
	$('#display').html(display += '0');
});
$('#calcP').on('click', function() {
	$('#display').html(display += ' + ');
});
$('#calcM').on('click', function() {
	$('#display').html(display += ' - ');
});
$('#calcT').on('click', function() {
	$('#display').html(display += ' * ');
});
$('#calcD').on('click', function() {
	$('#display').html(display += ' / ');
});
$('#Dot').on('click', function() {
	$('#display').html(display += '.');
});
$('#neg').on('click', function() {
	$('#display').html(display += '-');
});
/*
$('#factorial').on('click', function() {
  $('#display').html(display += ' ! ');
});

$('#sqrt').on('click', function() {
  $('#display').html(display += 'v ');
});
*/
$('#calcE').on('click', function() {
	$('#display').html(display = calc(display));
});
$('#calcC').on('click', function() {
	$('#display').html(display = '');
});
$('#CE').on('click', function() {
	$('#display').html(display = display.slice(0, -1));
});
