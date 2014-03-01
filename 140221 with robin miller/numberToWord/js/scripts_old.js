// var numberToWord = function(number) {
//   if (number === 0){
//     return "Zero";
//   } else if(number < 1000) {
//     return hundredsToWord(number);
//   } else if(number < 1000000) {
//     return (hundredsToWord(Math.floor(number/1000)) + " thousand " + hundredsToWord(number % 1000));
//   } else if(number < 1000000000) {
//     return (hundredsToWord(Math.floor(number/1000000)) + " million " + hundredsToWord(Math.floor((number % 1000000)/1000)) + " thousand " + hundredsToWord(number % 1000));
//   } else if(number < 1000000000000) {
//     return (hundredsToWord(Math.floor(number/1000000000)) + " billion " + hundredsToWord(Math.floor((number%1000000000)/1000000)) + " million " + hundredsToWord(Math.floor((number % 1000000)/1000)) + " thousand " + hundredsToWord(number % 1000));
//   } else if(number < 1000000000000000) {
//     return (hundredsToWord(Math.floor(number/1000000000000)) + " trillion " + hundredsToWord(Math.floor((number % 1000000000000)/1000000000)) + " billion " + hundredsToWord(Math.floor((number%1000000000)/1000000)) + " million " + hundredsToWord(Math.floor((number % 1000000)/1000)) + " thousand " + hundredsToWord(number % 1000));
//   }
//   return number;
// };

// var numberToWord = function(number) {
//   var trackingNumber = number;
//   var output = "";

//   var mag = { "trillion":1000000000000, "billion":1000000000, "million":1000000,"thousand":1000};
//   switch (number) {
//     case (number >= mag.trillion):
//       output += hundredsToWord(Math.floor(number/mag.trillion)) + " trillion ";
//       trackingNumber =(number % mag.trillion);
//     case (number >= mag.billion):
//       output += hundredsToWord(Math.floor(number/mag.billion)) + " billion ";
//       trackingNumber =(number % mag.billion); 
//     case (number >= mag.million):
//       output += hundredsToWord(Math.floor(number/mag.million)) + " million ";
//       trackingNumber =(number % mag.million); 
//     case (number >= mag.thousand):
//       output += hundredsToWord(Math.floor(number/mag.thousand)) + " thousand ";
//       trackingNumber =(number % mag.thousand); 
//     default: output += hundredsToWord(number);
//     break;
//   }
//   return output;
// };
