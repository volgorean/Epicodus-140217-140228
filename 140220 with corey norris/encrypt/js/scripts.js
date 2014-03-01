var encrypt = function(sentance) {
  var charArray = sentance.split("");
  var rowsArray = [];
  var toStart = 0;
  var splitByThisMany = 8;
  for (var i = 0; i < (charArray.length / splitByThisMany) ; i++) {
    var tempWord = "";
    for (var j = toStart; j < (toStart+splitByThisMany); j++){
      if (charArray.length > j) {
        tempWord += charArray[j];
      }
      else {
        tempWord += " ";
      }
    }
    toStart += splitByThisMany;
    rowsArray.push(tempWord);
  }
  console.log(rowsArray);

  for (var i = 0; i < rowsArray.length; i++){
    var tempWord = "";
    for (var j = 0; j < splitByThisMany; j++){
      tempWord += rowsArray[j].charAt(i);
    }
    rowsArray[i] = tempWord;
  }
  console.log(rowsArray);

  return rowsArray;
};
$(document).ready(function() {
  $("form#encrypt").submit(function(event) {
    var userInput = $("#input").val();
    var userResult = encrypt(userInput);
    $('.outputArea').text(userResult);
    $('#result').show();
    event.preventDefault();
  });
});

