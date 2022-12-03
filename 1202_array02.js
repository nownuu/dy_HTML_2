let arrayA = ['고구마', '감자','바나나'];
let arrayB =[
{name : '고구마', price : 1000},
{name : '감자', price : 500},
{name : '바나나', price : 1500}
];

arrayA.sort();
console.log('- 문자열로 정렬');
console.log(arrayA);
console.log();
console.log('- 문자열로 정렬(역순)');
console.log(arrayA.reverse());
console.log();

// 객체 내부의 숫자로 정렬하고 출력
arrayB.sort(
    (itemA, itemB) => {
        // 숫자라서 price
        // 오름차순
        return itemA.price - itemB.price;
    }
);

console.log('- 객체 내부의 숫자로 정렬(오름)');
console.log(arrayB);
console.log();

// 객체 내부의 숫자로 정렬하고 출력
arrayB.sort(
    (itemA, itemB) => {
        // 숫자라서 price
        // 내림차순
        return itemB.price - itemA.price;
    }
);

console.log('- 객체 내부의 숫자로 정렬(내림)');
console.log(arrayB);
console.log();

// 객체 내부의 문자열로 정렬하고 출력
arrayB.sort(
    (itemA, itemB) =>{
        // 문자열이라 name
        if(itemA.name < itemB.name){
            return -1;
        } else if(itemA.name > itemB.name){
            return 1;
        } else{
            return 0;
        }
    }
);

console.log('- 객체 내부의 문자열로 정렬(오름)');
console.log(arrayB);

// 객체 내부의 문자열로 정렬하고 출력
arrayB.sort(
    (itemA, itemB) =>{
        // 문자열이라 name
        if(itemA.name > itemB.name){
            return -1;
        } else if(itemA.name < itemB.name){
            return 1;
        } else{
            return 0;
        }
    }
);

console.log('- 객체 내부의 문자열로 정렬(내림)');
console.log(arrayB);