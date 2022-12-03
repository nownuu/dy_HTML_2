let student = [
    {name:'재석', age:21},
    {name:'광희', age:25},
    {name:'형돈', age:13},
    {name:'명수', age:44},
]

student.sort();

student.sort(
    (itemA, itemB) =>{

        if(itemA.name < itemB.name){
            return -1;
        } else if(itemA.name > itemB.name){
            return 1;
        } else{
            return 0;
        }
    }
)

console.log('이름 순으로 정렬(오름)');
console.log(student)
/////////////////////////////////////////////
student.sort(
    (itemA, itemB) =>{

        if(itemA.name > itemB.name){
            return -1;
        } else if(itemA.name < itemB.name){
            return 1;
        } else{
            return 0;
        }
    }
)

console.log('이름 순으로 정렬(내림)');
console.log(student)
/////////////////////////////////////////////

student.sort(
    (itemA, itemB) => {
        // 숫자라서 price
        // 오름차순
        return itemA.age - itemB.age;
    }
);

console.log('나이 순으로 정렬(올림)');
console.log(student)
/////////////////////////////////////////////
student.sort(
    (itemA, itemB) => {
        // 숫자라서 price
        // 오름차순
        return itemB.age - itemA.age;
    }
);

console.log('나이 순으로 정렬(내림)');
console.log(student)