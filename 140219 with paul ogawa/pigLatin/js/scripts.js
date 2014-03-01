var wordPigLatin = (function(text) {
  var vowels = ["a","e","i","o","u",]
  var oLength = text.length;
  vowels.forEach(function(vowel, index) {
    if (text.charAt(0) === vowel) {
      text += "ay";
      return text;
    }   
  });
  if (text.length != oLength) {
    return text;
  }
  var consCount = 0;
  for(var i =0; !vowelChecker(text.charAt(i)); i++){
    consCount++; 
  }
  if ((text.charAt(0) === "q") && (text.charAt(1) === "u")){
    consCount++;
  }
  return (text.substring((consCount),text.length) + text.substring(0, (consCount)) +"ay")
  console.log(text);
  return text;
});

var vowelChecker = (function(letter) {
  var vowels = ["a","e","i","o","u",]
  var isVowel = false;
  vowels.forEach(function(vowel, index) {
    if (letter === vowel) {
      isVowel = true;
    }
  });
  if (isVowel) {
    return true;
  }
  else {
    return false;
  }
});
var phrasePigLatin = (function(text){
  var lowerC = text.toLowerCase();
  var pigLatinArray = lowerC.split(" ");
  var pigLatinString = "";
  for (var i = 0; i < pigLatinArray.length; i++) {
    pigLatinString += wordPigLatin(pigLatinArray[i]) + " ";
  }
  pigLatinString = pigLatinString.charAt(0).toUpperCase() + pigLatinString.slice(1);
  //pigLatinString = pigLatinString.charAt(pigLatinString.length).toUpperCase() + pigLatinString.slice(1);
  console.log(pigLatinString);
  return pigLatinString;
});

$(document).ready(function() {
  $('form#pigLatin').submit(function(event) {
    var textInput = $('#input-words').val();
    var outputText = phrasePigLatin(textInput);
    $('.outputArea').text(outputText);
    $('#result').show();
    event.preventDefault();
  });
});

