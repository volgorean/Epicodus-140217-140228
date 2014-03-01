 var fibonacci = function(number) {
  var isEven = (number % 2);
  var a = 0;
  var b = 1;
  for (var i = 0; i < number - 2; i += 2) {
    a = a+b
    b = b+a
  }
  if (!isEven) {
    return b;
  } 
  else {
    return a;
  }
 };



/*var fibonacci  = function(number) {
  if (number === 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}*/

$(document).ready(function() {
  $("form#fibonacci").submit(function(event) {
    var userInput = $("#input").val();
    var userResult = fibonacci(userInput);
    $('.outputArea').text(userResult);
    $('#result').show();
    event.preventDefault();
  });
});
