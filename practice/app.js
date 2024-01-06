function reverseString(text) {
    var rString = '';


    for (var i = text.length - 1; i >= 0; i--) {
      rString += text[i];
    }

    return rString;
  }

  
  var originalString = 'alma';

  var rString = reverseString(originalString);


  console.log(rString);



  