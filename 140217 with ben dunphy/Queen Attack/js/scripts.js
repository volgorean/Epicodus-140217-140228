var queenAttack = function(queen, enemy) {
  if (isHorizontal(queen, enemy) || isVertical(queen, enemy) || isDiagonal(queen, enemy)) {
    return true;
  } else {
    return false;
  };
};

var isHorizontal = function(queen, enemy) {
  if (queen[0] === enemy[0]) {
    return true;
  };
};

var isVertical = function(queen, enemy) {
  if (queen[1] === enemy[1]) {
    return true;
  };
};

var isDiagonal = function(queen, enemy){
  if ((queen[0] - enemy[0])/(queen[1]-enemy[1]) === 1) {
    return true;
  } else {
    return false;
  };
};

$(document).ready(function() {
  $('form#elizabeth').submit(function(event) {
  var queenX = $('input#queenX').val();
  var queenY = $('input#queenY').val();
  var enemyX = $('input#enemyX').val();
  var enemyY = $('input#enemyY').val();

  var queen = [queenX, queenY]
  var enemy = [enemyX, enemyY]

  var result = queenAttack(queen, enemy);

  $('.attack').text(queen);
  if (!result) {
    $('.yes').text('Naw bruh, you totally are not');
  } else {
    $('.yes').text('Yes you are');
  }

  $('#result').show();

  event.preventDefault();
  });
});
