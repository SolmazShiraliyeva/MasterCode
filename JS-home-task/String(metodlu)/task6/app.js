function mostUsedWords(str) {
    var text = str.split(' ');
    var maxWord = '';
    var maxCount = 0;
  
    for (var i = 0; i < text.length; i++) {
      var word = text[i];
      var count = 0;
  
      for (var j = 0; j < text.length; j++) {
        if (text[j] === word) {
          count++;
        }
      }
  
      if (count > maxCount) {
        maxCount = count;
        maxWord = word;
      }
    }
  
    return maxWord;
  }
  
  console.log(mostUsedWords('JAVA, JS, C++ and Python are programming languages, but HTML is not programming language'));
  