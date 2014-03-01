var hundredsToWord = function(number) {
  var numberDictionary = {1:"one", 2:"two", 3:"three",  4:"four", 5:"five",6:"six", 7:"seven", 8:"eight", 9:"nine", 10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17: "seventeen", 18:"eighteen", 19:"nineteen", 20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety", 100:"hundred"};
  var output = "";
  var length = number.toString().length;

    if (number === 0) {
       output += "";
    } else if (number/100 % 1 === 0) {
      output += numberDictionary[Math.floor(number/100)] + " " + numberDictionary[100];
    } else if (number/100 > 1) {
      output += numberDictionary[Math.floor(number/100)] + " " + numberDictionary[100] + " " + hundredsToWord(number % 100);
    } else if (number<100 && number > 20) {
      output += numberDictionary[number - number%10] + " " + numberDictionary[number%10];
    } else if (number > 10 && number < 20) {
      output += numberDictionary[number];
    } else {
      output += numberDictionary[number];
    }
  return output;
};


var numberToWord = function(number) {

  if((/\s/).test(number) || (/\W/).test(number) || (/[A-z]/).test(number)) {
    return "Please enter numbers only.";
  };

  var output = "";
  var magnitudes = [1000000000000, 1000000000, 1000000, 1000, 1];
  var magnitudeNames = ["<span class='huge'> trillion </span>" , "<span class='biggest'> billion </span>", "<span class='bigger'> million </span>", "<span class='big'> thousand </span>", ""];

  if(number == 0) {
    output = "zero";
    console.log(output);
  } else if(number > 999999999999999) {
    output = "infinity";  
  } else {
    magnitudes.forEach(function(magnitude, index) {
      var hundredChunk = Math.floor((number % (magnitude*1000)/magnitude));
      if(hundredChunk === 0) {
          output += "";
      } else if(number >= magnitude){
        output += hundredsToWord(hundredChunk) + magnitudeNames[index];
      } else {
        return 0;
      }
    });
  };
  return output;
};

$(function() {
  $("form#numberToWord").submit(function(event) {
    var numberToProcess = $("#input").val();
    var textOut = numberToWord(numberToProcess);

    $(".output").text("");
    $(".output").append(textOut);
    $(".inputNumber").text(numberToProcess);
    $("#result").show();
    event.preventDefault();
  });
});


