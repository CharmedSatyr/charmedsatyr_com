var player = 'X';
var ai = 'O';
var counter = 0;

//Squares
var one = $('#1');
var two = $('#2');
var three = $('#3');
var four = $('#4');
var five = $('#5');
var six = $('#6');
var seven = $('#7');
var eight = $('#8');
var nine = $('#9');

//Choose your player / restart the game
$('#new').click(function() {
	player = $('input[name=player]:checked').val();
	if (player == 'O') {
		ai = 'X';
	} else if (player == 'X') {
		ai = 'O';
	}
	$('#1, #2, #3, #4, #5, #6, #7, #8, #9').text('');
	$('#result').html('');
	counter = 0;

	if (ai == 'X') {
		one.text(ai);
		counter++;
	}
});

//Start playing!
$('#1, #2, #3, #4, #5, #6, #7, #8, #9').click(function() {

	if ($(this).text() === '') {
		$(this).text(player);
		counter++;

		//The AI will think for a moment before making a move. This also prevents it from moving again if the player won with the last move (it's slower than the win function)
		var thinking = setTimeout(think, 600);
		var number;

		function think() {
			//Offense mode
			if (five.text() === '' && (counter < 9)) {
				five.text(ai);
				counter++;
			} else if (one.text() === ai && two.text() === ai && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (one.text() === ai && four.text() === ai && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (one.text() === ai && five.text() === ai && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (one.text() === ai && seven.text() === ai && four.text() === '') {
				four.text(ai);
				counter++;
			} else if (two.text() === ai && five.text() === ai && eight.text() === '' && (counter < 9)) {
				eight.text(ai);
				counter++;
			} else if (three.text() === ai && five.text() === ai && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (three.text() === ai && six.text() === ai && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (four.text() === ai && five.text() === ai && six.text() === '' && (counter < 9)) {
				six.text(ai);
				counter++;
			} else if (five.text() === ai && six.text() === ai && four.text() === '' && (counter < 9)) {
				four.text(ai);
				counter++;
			} else if (six.text() === ai && nine.text() === ai && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (seven.text() === ai && five.text() === ai && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (seven.text() === ai && eight.text() === ai && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (eight.text() === ai && five.text() === ai && two.text() === '' && (counter < 9)) {
				two.text(ai);
				counter++;
			} else if (eight.text() === ai && nine.text() === ai && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (nine.text() === ai && five.text() === ai && one.text() === '' && (counter < 9)) {
				one.text(ai);
				counter++;
			} else if (nine.text() === ai && six.text() === ai && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
				//Defense mode
			} else if (one.text() === player && two.text() === player && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (one.text() === player && four.text() === player && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (one.text() === player && five.text() === player && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (one.text() === player && three.text() === player && two.text() === '' && (counter < 9)) {
				two.text(ai);
				counter++;
			} else if (one.text() === player && seven.text() === player && four.text() === '' && (counter < 9)) {
				four.text(ai);
				counter++;
			} else if (one.text() === player && nine.text() === player && five.text() === '' && (counter < 9)) {
				five.text(ai);
				counter++;
			} else if (two.text() === player && three.text() === player && one.text() === '' && (counter < 9)) {
				one.text(ai);
				counter++;
			} else if (two.text() === player && five.text() === player && eight.text() === '' && (counter < 9)) {
				eight.text(ai);
				counter++;
			} else if (two.text() === player && eight.text() === player && five.text() === '' && (counter < 9)) {
				five.text(ai);
				counter++;
			} else if (three.text() === player && five.text() === player && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (three.text() === player && six.text() === player && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (three.text() === player && seven.text() === player && five.text() === '' && (counter < 9)) {
				five.text(ai);
				counter++;
			} else if (three.text() === player && nine.text() === player && six.text() === '' && (counter < 9)) {
				six.text(ai);
				counter++;
			} else if (four.text() === player && five.text() === player && six.text() === '' && (counter < 9)) {
				six.text(ai);
				counter++;
			} else if (four.text() === player && seven.text() === player && one.text() === '' && (counter < 9)) {
				one.text(ai);
				counter++;
			} else if (five.text() === player && six.text() === player && four.text() === '' && (counter < 9)) {
				four.text(ai);
				counter++;
			} else if (six.text() === player && nine.text() === player && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (seven.text() === player && five.text() === player && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			} else if (seven.text() === player && eight.text() === player && nine.text() === '' && (counter < 9)) {
				nine.text(ai);
				counter++;
			} else if (seven.text() === player && nine.text() === player && eight.text() === '' && (counter < 9)) {
				eight.text(ai);
				counter++;
			} else if (eight.text() === player && five.text() === player && two.text() === '' && (counter < 9)) {
				two.text(ai);
				counter++;
			} else if (eight.text() === player && nine.text() === player && seven.text() === '' && (counter < 9)) {
				seven.text(ai);
				counter++;
			} else if (nine.text() === player && five.text() === player && one.text() === '' && (counter < 9)) {
				one.text(ai);
				counter++;
			} else if (nine.text() === player && six.text() === player && three.text() === '' && (counter < 9)) {
				three.text(ai);
				counter++;
			}

			//Core AI
			if ((counter < 9) && (player === 'X' && counter % 2 !== 0) || (player === 'O' && counter % 2 === 0)) {
				do {
					number = (Math.floor(Math.random() * 9) + 1);
				} while ($('#' + number).text() !== '');
				$('#' + number).text(ai);
				counter++;
			}
		}
	}
});

//A timer begins on load that figures out whether anyone has won
$(document).ready(function() {
	var winner = setInterval(win, 50);

	function win() {

		//Values
		var oneV = one.text();
		var twoV = two.text();
		var threeV = three.text();
		var fourV = four.text();
		var fiveV = five.text();
		var sixV = six.text();
		var sevenV = seven.text();
		var eightV = eight.text();
		var nineV = nine.text();

		function resetting() {
			player = $('input[name=player]:checked').val();
			if (player == 'O') {
				ai = 'X';
			} else if (player == 'X') {
				ai = 'O';
			}
			$('#1, #2, #3, #4, #5, #6, #7, #8, #9').text('');
			$('#result').html('');
			counter = 0;

			if (ai == 'X') {
				one.text(ai);
				counter++;
			}
		}
		//Winning Conditions
		//Player Wins
		if ((oneV === player && twoV === player && threeV === player) || (fourV === player && fiveV === player && sixV === player) || (sevenV === player && eightV === player && nineV === player) || (oneV === player && fourV === player && sevenV === player) || (twoV === player && fiveV === player && eightV === player) || (threeV === player && sixV === player && nineV === player) || (oneV === player && fiveV === player && nineV === player) || (threeV === player && fiveV === player && sevenV === player)) {
			player = '';
			counter = 10;
			var resetPlayer = setTimeout(resetting, 6000);
			$('#result').html('<div class="winner popup"><p>YOU WIN!</p><p class="timer" id="timer"></p></div>');
			var countdown = setInterval(counterDown, 1000);
			//AI wins
		} else if ((oneV === ai && twoV === ai && threeV === ai) || (fourV === ai && fiveV === ai && sixV === ai) || (sevenV === ai && eightV === ai && nineV === ai) || (oneV === ai && fourV === ai && sevenV === ai) || (twoV === ai && fiveV === ai && eightV === ai) || (threeV === ai && sixV === ai && nineV === ai) || (oneV === ai && fiveV === ai && nineV === ai) || (threeV === ai && fiveV === ai && sevenV === ai)) {
			player = '';
			counter = 10;
			var resetAI = setTimeout(resetting, 6000);
			$('#result').html('<div class="loser popup"><p>THE COMPUTER WINS!</p><p class="timer" id="timer"></p></div>');
			var countdown = setInterval(counterDown, 1000);
			//Tie
		} else if (counter == 9) {
			player = '';
			counter = 10;
			var resetTie = setTimeout(resetting, 6000);
			$('#result').html('<div class="tie popup"><p>IT\'S A TIE!</p><p class="timer" id="timer"></p></div>');
			var countdown = setInterval(counterDown, 1000);
		}

		//Countdown timer
		var time = 6;

		function counterDown() {
			clearInterval(winner);
			time--;
			$('#timer').html('New game starting in ' + time);
			if (time <= 0) {
				clearInterval(countdown);
				time = 6;
				$('#timer').html('');
				winner = setInterval(win, 50);
			}
		}

	}
});
