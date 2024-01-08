function arrayLength(arr) {
    var count = 0;
  
    for (var i in arr) {
      count++;
    }
  
    return count;
  }
  
  var array = ['a', 'b', 20, 78];
  console.log(arrayLength(array));
  