var eval = function(arr) {
  var len = arr.length;
  var arr1 = new Array;
  if(len == 0 ){
    console.log("empty array");
  }
  else{
    for(var i=0; i<len; i++)
    {
      if(isNaN(parseInt(arr[i]))){
        if(arr[i] == "+"){
          var x = arr1.pop();
          var y = arr1.pop();
          var z = y+x;
          arr1.push(z);

        }
        else if (arr[i] == "-") {
          var x = arr1.pop();
          var y = arr1.pop();
          var z = y-x;
          arr1.push(z);
        }
        else if (arr[i] == "*") {
          var x = arr1.pop();
          var y = arr1.pop();
          var z = y*x;
          arr1.push(z);
        }
        else {
          var x = arr1.pop();
          var y = arr1.pop();
          var z = y/x;
          z = Math.floor(z);
          arr1.push(z);
        }
      }
      else {
        arr1.push(parseInt(arr[i]));
      }
    }
    return arr1;
  }
}
var arr = ["2", "1", "+", "3", "*"];
var arr2 =  ["4", "13", "5", "/", "+"];

var now = eval(arr);
document.getElementById("demo").innerHTML = now;
var now1 = eval(arr2);
document.getElementById("demo1").innerHTML = now1;
