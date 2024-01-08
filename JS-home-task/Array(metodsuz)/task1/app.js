

function findMaxNumber(num) {
    var maxNumber = num[0];
  
    for (var i = 1; i < num.length; i++) {
      if (num[i] > maxNumber) {
        maxNumber = num[i];
      }
    }
  
    return maxNumber;
  }
  
  var array = [ 78, 96, 40,  128, 160  ];
  console.log(findMaxNumber(array));
  
