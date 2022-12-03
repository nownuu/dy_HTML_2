let array1 = [1, 4, 9, 16];

// map()
console.log('////////////   map()');

let output = array1.map(
    (item, index) => {
        // 배열의 모든 요소를 곱해서 새로운 배열 생성
        return item * 2;
    }
);
console.log(output);

// foreach()
console.log('////////////   foreach()');

array1.forEach(
    (item, index)=>{
        console.log(`expected ouput : "${item}"`);
    }
)