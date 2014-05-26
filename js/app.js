$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  
  $('html').keydown(function(event) {
      if (event.keyCode === 88) {
        playcool();
        $('.ryu-action').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').show();
    }
  })
    .keyup(function(event) {
        // topcool();
        $('#cool-sound')[0].pause();
        $('#cool-sound')[0].load();
        if (event.keyCode === 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').show();
    }
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playcool () {
  $('#cool-sound')[0].volume = 0.5;
  $('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
}
