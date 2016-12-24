$(document).ready(function() {
	$('.anim').hover(
		function() {
			$(this).animate({
				fontSize: '+=2px'
			});
		},
		function() {
			$(this).animate({
				fontSize: '-=2px'
			});
		}
	);
});

/*
//ALTERNATE CODE
$(document).ready(function() {
  $('.anim').mouseenter(function() {
    $(this).animate({
      fontSize: '+=2px'
    });
  });
  $('.anim').mouseleave(function() {
    $(this).animate({
      fontSize: '-=2px'
    });
  });
});
*/
