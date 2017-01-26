$('#btn').click(function() {

	var entry = $('input[name=entry]').val().toUpperCase();
	var backdoor = 'Collect it all!';

	function rot13(str) {

		var uniArr = [];
		var encrypt = [];
		var newArr = [];
		var newStr = '';

		if ($('input[name=entryPW]').val() === $('input[name=entryH]').val()) {
			for (var j = 0; j < str.length; j++) {
				uniArr.push(str.charCodeAt(j));
			}
			uniArr.map(function(val) {
				if (val >= 65 && val <= 90) {
					if (val < 78) {
						encrypt.push(val + 13);
					} else {
						encrypt.push(val - 13);
					}
				} else {
					encrypt.push(val);
				}

			});
			for (var k = 0; k < encrypt.length; k++) {
				newArr.push(String.fromCharCode(encrypt[k]));
			}
			newStr = newArr.join('');
			return '<br><div class="row output"><p class="newP"><strong>The hacker figured out your passphrase! Change it quickly, and make it stronger than before. </strong></p><br><br><div class="col-xs-6 well gen"><strong>Encrypted: </strong>' + newStr + '</div><br><br><br><br><div class="col-xs-6 well gen "><strong>Decrypted: </strong>' + str + '</div></div>';

		} else if ($('input[name=entryH]').val() === backdoor) {
			for (var l = 0; l < str.length; l++) {
				uniArr.push(str.charCodeAt(l));
			}
			uniArr.map(function(val) {
				if (val >= 65 && val <= 90) {
					if (val < 78) {
						encrypt.push(val + 13);
					} else {
						encrypt.push(val - 13);
					}
				} else {
					encrypt.push(val);
				}

			});
			for (var m = 0; m < encrypt.length; m++) {
				newArr.push(String.fromCharCode(encrypt[m]));
			}
			newStr = newArr.join('');
			return '<br><div class="row output"><p class="newP"><strong>Your data has been compromised by a backdoor. Changing your passphrase will have no effect. You are not able to prevent the hacker from accessing your data.</p></strong><br><br><div class="col-xs-6 well gen"><strong>Encrypted: </strong>' + newStr + '</div><br><br><br><br><div class="col-xs-6 well gen"><strong>Decrypted: </strong>' + str + '</div></div>';

		} else {
			for (var n = 0; n < str.length; n++) {
				uniArr.push(str.charCodeAt(n));
			}
			uniArr.map(function(val) {
				if (val >= 65 && val <= 90) {
					if (val < 78) {
						encrypt.push(val + 13);
					} else {
						encrypt.push(val - 13);
					}
				} else {
					encrypt.push(val);
				}

			});
			for (var o = 0; o < encrypt.length; o++) {
				newArr.push(String.fromCharCode(encrypt[o]));
			}
			newStr = newArr.join('');
			return '<br><div class="row output"><p class="newP"><strong>The hacker\'s passphrase doesn\'t match your own. She will have to break Caesar\'s Cipher to see your data. Stay vigilant!</strong></p><br><br><div class="col-xs-6 well gen"><strong>Encrypted: </strong>' + newStr + '</div>';
		}
	}
	$('#output').html(rot13(entry));

});
