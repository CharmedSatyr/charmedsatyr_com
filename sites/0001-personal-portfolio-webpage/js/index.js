/*
ISSUE TRACKER
-Add an iFrame image or better background for Featured Project buttons.
-Replace the Table of Contents with a navbar.
*/
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