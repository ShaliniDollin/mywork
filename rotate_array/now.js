var rotate = function(arr, step) {
    var len1 = arr.length;
    if(!(isNaN(len1)) && !(isNaN(step))){
        if(len1 == 0) {
            console.log("empty array");
        }
        else if(step == 0) {
            return arr;
        }
        else
        {
            var start1 = arr.slice(step);
            var end1 = arr.slice(0, step);
            var nearr = start1.concat(end1);
            return nearr;
        }

    }
    else{
        console.log("Not a number");
    }
}

var arr = [1,2,3,4,5,6,7];
var step = 2;
var now = rotate(arr,step);
document.getElementById("demo").innerHTML = now;
