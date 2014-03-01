var triangle = function(x,y,z) {
  if (x === y && y === z) {
    return "n equilateral"; 
  } else if (x === y || y === z || z === x) {
    return "n isosceles";
  } else return " scalene"
};

$(document).ready(function() {
  $('form#triangles').submit(function(event) {
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    var result = triangle(side1,side2,side3);

// Testing variables
//    alert(side1);
//    alert(side2);
//    alert(side3);
//    alert(result);

    $('.output').text(result);

    $('#result').show();

    event.preventDefault();

  });
});
