var multiplyAll;
var multi;

//1.
multiplyAll = function (x, y){
    var multi = 1;
    for(var i=x; i<=y; i++){
        multi *= i;
    }
    return multi;
} 

//2.
function multiplyAll(x,y){
    var multi = 1;
    for(var i=x; i<=y; i++){
        multi *= i;
    }
    return multi;
}

//3.
multiplyAll = (x,y) =>{
    var multi = 1;
    for(var i=x; i<=y; i++){
        multi *= i;
    }
    return multi;
}

console.log(multiplyAll(1,2))
console.log(multiplyAll(1,3))