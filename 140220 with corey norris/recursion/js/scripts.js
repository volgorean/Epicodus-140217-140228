/*var factorize = function(number) {
  var newNumber = number;
  newNumber = Math.round(newNumber);
  console.log(newNumber);

  if (newNumber > 0) {
    for (var i = (newNumber-1); i > 1; i--) {
      newNumber *= i;
      console.log(newNumber);
    }
  }
  else if (newNumber === 0){
    newNumber = 1;
  }
  else {
    alert("only positive integers please")
    return false;
  }
  return newNumber;
};*/

var factorize = function(number) {
  number = Math.round(number);
  var total = 1;
  if (isNaN(number)) {
    alert("only positive integers please");
    return false;
  } else if (number === 0) {
    return 1;
  } else if (number > 1) {
      total = factorize((number -1));
    };
  return (total*number);
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var userInput = $("#input").val();
    var userResult = factorize(userInput);
    $('.outputArea').text(userResult);
    $('#result').show();
    event.preventDefault();
  });
});
