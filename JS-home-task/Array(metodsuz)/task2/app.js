

function findMinNumber(num) {
    var minNumber = num[0];
  
    for (var i = 1; i < num.length; i++) {
      if (num[i] < minNumber) {
        minNumber = num[i];
      }
    }
  
    return minNumber;
  }
  
  var array = [ 78, 96, 40,  128, 160  ];
  console.log(findMinNumber(array));
  
