var freshW = 60 * 40;
var freshP = 60 * 5;

var workCount = 60 * 40;
var countW = workCount;
var playCount = 60 * 5;
var countP = playCount;

function mmss(val) {
  var minutes = parseInt(val / 60) % 60;
  var seconds = val % 60;
  var m = '';
  if (minutes < 10) {
    m = 0;
  }
  var s = '';
  if (seconds < 10) {
    s = 0;
  }
  return (m + minutes + ":" + s + seconds);
}

$('#work').html(mmss(countW));
$('#play').html(mmss(countP));

$('#plusW').click(function() {
  workCount = workCount + 60;
  countW = countW + 60;
  $('#work').html(mmss(countW));
});

$('#plusP').click(function() {
  playCount = playCount + 60;
  countP = countP + 60;
  $('#play').html(mmss(countP));
});

$('#minusW').click(function() {
  workCount = workCount - 60;
  countW = countW - 60;
  $('#work').html(mmss(countW));
});

$('#minusP').click(function() {
  playCount = playCount - 60;
  countP = countP - 60;
  $('#play').html(mmss(countP));

});

$('#start').click(function() {
  var counterW = setInterval(timerW, 1000);
  var counterP = setInterval(timerP, 1000);

  $('#pause').click(function() {
    clearInterval(counterW);
    clearInterval(counterP);
    $('#onW').html('');
    $('#onP').html('');
    if (countW == 0) {
      countW++;
    }
  });

  function soundEffect() {
    var wav = 'https://charmedsatyr.com/xy/resources/0009/sounds-818-quarrel.mp3';
    var audio = new Audio(wav);
    audio.play();
  }

  function timerW() {
    countW--;
    $('#onW').html("<span class='rotate' id='gif'></span>");
    $('#spendW').css('color', '#ff9532');
    $('#workBubble').css('background', '#646464');
    $('.work').css('z-index', '1');
    if (countW <= 0) {
      clearInterval(counterW);
      clearInterval(counterP);
      counterP = setInterval(timerP, 1000);
      if (countW == 0 && countP !== 0) {} else {
        countP = playCount;
      }
      $('#onW').html('');
      soundEffect()
      $('#workBubble').css('background', '#333333');
      $('#spendW').css('color', 'white');
      $('.work').css('z-index', '0');
    }
    $('#work').html(mmss(countW));
  }

  function timerP() {
    if (countW <= 0) {
      countP--;
      $('#onP').html("<span class='rotate' id='gif'></span>")
      $('#spendP').css('color', '#ff9532');
      $('.play').css('z-index', '1');
      $('#playBubble').css('background', '#646464');
      if (countP <= 0) {
        clearInterval(counterP);
        clearInterval(counterW);
        counterW = setInterval(timerW, 1000);
        countW = workCount;
        $('#onP').html('')
        soundEffect();
        $('#playBubble').css('background', '#333333');
        $('.play').css('z-index', '0');
        $('#spendP').css('color', 'white');

      }
      $('#play').html(mmss(countP));
    }
  }

  $('#restart').click(function() {
    clearInterval(counterW);
    clearInterval(counterP);
    countW = workCount;
    countP = playCount;
    $('#work').html(mmss(countW));
    $('#play').html(mmss(countP));
    $('#onP, #onW').html('');
    $('#workBubble, #playBubble').css('background', '#333333');
    $('#spendW, #spendP').css('color', 'white');
    $('.work').css('z-index', '1');
  });

  $('#default').click(function() {
    clearInterval(counterW);
    clearInterval(counterP);
    countW = freshW;
    countP = freshP;
    $('#work').html(mmss(countW));
    $('#play').html(mmss(countP));
    $('#onP, #onW').html('');
    $('#spendW, #spendP').css('color', 'white');
  });
});
