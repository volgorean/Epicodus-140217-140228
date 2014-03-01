var titleCase = function(title) {
  var words = title.split(" ");
  words.forEach(function(word, index) {
    word = word.toLowerCase();
    switch(word) {
      case 'it\'s':
      case 'is':
      case 'do':
      case 'it':
      case 'as': 
      case 'on':
      case 'up':
      case 'in':
      case 'of':
      case 'to':
      case 'at':
      case 'by':  
      case 'nor':
      case 'no':
      case 'for':
      case 'or':
      case 'but':
      case 'an':
      case 'the':
      case 'a':
      case 'and':
        words[index] = word;          
      break;
      default:
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);     
    };
  });  
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ");
};
/*  var titleOutput = "";
  var tempWord = "";
  titleOutput = titleOutput + titleInput.charAt(0).toUpperCase();

  for (var i = 1; i < titleInput.length; i++) {
    if (titleInput.charAt(i - 1) === " ") {
      for (var j = i; titleInput.charAt(j) != " " && j < titleInput.length; j++)
      {
        tempWord = tempWord + titleInput.charAt(j);
      };
      switch(tempWord) {
        case 'do':
        case 'it':
        case 'as': 
        case 'on':
        case 'up':
        case 'in':
        case 'of':
        case 'to':
        case 'at':
        case 'by':  
        case 'nor':
        case 'no':
        case 'for':
        case 'or':
        case 'but':
        case 'an':
        case 'the':
        case 'a':
        case 'and':
        titleOutput = titleOutput + titleInput.charAt(i);          
        break;
        default:
          titleOutput = titleOutput + titleInput.charAt(i).toUpperCase();     
      };
      tempWord = "";
    }
    else {
      titleOutput = titleOutput + titleInput.charAt(i);
    }
  }
  //var titleInput = title.charAt(0).toUpperCase() + title.slice(1);
  return titleOutput;
}
*/

$(function() {
  if('#result:visible'){
    $('input#title').on('focus', function(){
      $('input#title').on('keydown', function(){
        $('#result').fadeOut();
      });
    });
  };
  $('form#title-case').submit(function(event) {
    var title = $('input#title').val();
    var titleOut = titleCase(title);
    $('.title').text(titleOut);
    $('#result').show();
    event.preventDefault();
  });
});











