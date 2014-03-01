var scrabbleScore = function(word) {
  if((/\s/).test(word) || (/\d/).test(word) || (/\W/).test(word)) {
    return "Please enter a single word with no digits or punctuation.";
  };
  var pointDictionary = {"a" : 1, "e" : 1, "i" : 1, "o" : 1, "u" : 1,
"l" : 1, "n" : 1, "r" : 1,"s" : 1, "t" : 1, "d" : 2,"g" : 2, "b" : 3, "c" : 3,
"m" : 3, "p" : 3, "f" : 4,"h" : 4, "v" : 4, "w" : 4,"y" : 4, "k" : 5, "j" : 8,
"x" : 8, "q" : 10, "z" : 10};
  var wordLetters = word.toLowerCase().split("");
  var pointCounter = 0;

  wordLetters.forEach(function(wordLetter) {
    pointCounter += pointDictionary[wordLetter];
  });
  return pointCounter;
};

/*var scrabbleScore = function(word) {
  if((/\s/).test(word) || (/\d/).test(word) || (/\W/).test(word)) {
    return "Please enter a single word with no digits or punctuation.";
  };
  var pointCounter = 0;
  var wordLetters = word.toLowerCase().split("");
  var twoPointLetters = ["d", "g"];
  var threePointLetters = ["b", "c", "m", "p"];
  var fourPointLetters = ["f", "h", "v", "w", "y"];
  var fivePointLetters = ["k"];
  var eightPointLetters = ["j", "x"];
  var tenPointLetters = ["q", "z"];

  wordLetters.forEach(function(wordLetter) {
    if(twoPointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 2;
    } else if(threePointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 3;
    } else if(fourPointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 4;
    } else if(fivePointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 5;
    } else if(eightPointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 8;
    } else if(tenPointLetters.indexOf(wordLetter) >= 0) {
      pointCounter += 10;
    } else {
      pointCounter += 1;
    }

  });
  return pointCounter;
};
*/
$(function() {
  $("form#scrabble").submit(function(event) {
     var wordToProcess = $("#input").val();
     var points = scrabbleScore(wordToProcess);
     $(".output").text(points);
     $(".inputWord").text(wordToProcess);
     $("#result").show();
     event.preventDefault();
  });
});


