var anagramCheck = function(main, suspects) {
  var main = main;
  var anagramz = [];
  var suspects = suspects.split(" ");
  suspects.forEach(function(suspect, index) {
    var tempCounter = 0;
    for (var i = 0; i < main.length; i++) {
      for (var j = 0; j < suspect.length; j++) {
        if (main[i] === suspect[j]) {
          tempCounter++;
        }
      }
    }
    if (tempCounter === main.length || tempCounter === suspect.length) {
      anagramz.push(" " + suspect);
    }
  });
  return anagramz;
};

$(function() {
  if('#result:visible'){
    $('input#main-word').on('focus', function(){
      $('input#main-word').on('keydown', function(){
        $('#result').fadeOut();
      });
    });
  };
  $('form#anagram').submit(function(event) {
    var main = $('input#main-word').val();
    var suspects = $('#suspect-words').val();
    var anagramz = anagramCheck(main, suspects);
    $('.anagramz').text(anagramz);
    $('#result').show();
    event.preventDefault();
  });
});
