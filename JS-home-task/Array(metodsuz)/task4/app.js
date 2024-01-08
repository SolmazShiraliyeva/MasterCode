function listedArray(arr) {
  
    var a = arr.length;
    for (var i = 0; i < a - 1; i++) {


      for (var j = i + 1; j < a; j++) {

        if (arr[i] < arr[j]) {

         
          var num = arr[i];
          arr[i] = arr[j];
          arr[j] = num;
        }
      }
    }
  
    return arr;
  }
  
  var array = [45, 10, 78, 100];
  console.log(listedArray(array));
  



 
  