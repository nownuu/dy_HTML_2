// 2-1
const max = function(array){
    let output = array[0]

    for(const data of array){
        if(output < data){
            output = data;
        }
    }
    return output;
}

console.log(max([1, 2, 3, 4]))