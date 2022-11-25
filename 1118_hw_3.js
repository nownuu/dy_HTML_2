// 2-2
const max = function(x, y, z, k){
    let output = array[0];

    for(var i = 0; i<array.length; i++){
        if(output < array[i]){
            output = array[i];
        }
    }

    return output;
}

console.log(max(1, 2, 3, 4));