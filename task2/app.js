function isPalindrome(text) {
    if (text === "") {
      return true;
    }
  
    var length = text.length;
  
    for (var i = 0; i < length ; i++) {

      
        if (text[i] !== text[length - 1 - i]) {
        return false; 

      }
    }
  
    return true; 
  }
  
  console.log(isPalindrome("sus"));



  //METHOD

//   function isPalindrome(str) {
//     var reversedStr = str.split('').reverse().join('');

//     return str === reversedStr;
// }






  
  