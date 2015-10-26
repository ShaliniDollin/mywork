var wordladder = function(begin, end, dict)
{
  var queue = [];
  var depth = 0;
  if(begin.length !== end.length){
    console.log("Cannot Transform");
  }
  dict.push(end);
  queue.push(begin);
  while(begin !== end){
    for(var i=0; i<begin.length;i++){
      depth++;
      for(var j='a'.charCodeAt(); j<'z'.charCodeAt(); j++){
        var ch = String.fromCharCode(j);
        var test = begin;
        if(test[i] !== ch){
          test.replace(test[i], ch);
          var num = dict.indexOf(test);
          if(!isNaN(num) && (test === end)){
            dict.splice(num, 1);
            queue.push(test);
            return queue;
          }
          else if(!isNaN(num) && (test !== end)){
            queue.push(test);
            dict.splice(num, 1);
          }
        }
      }

    }
  }
}
var Start  =  "hit" ;
var End  =  "COG" ;
var dict  =  ["Hot", "dot", "Dog", "Lot", "log"];
var now = wordladder(Start, End, dict);
document.getElementById("demo").innerHTML = now;
