let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";

console.log(parseInt(inputA));

console.log(parseInt(inputB));
console.log(parseFloat(inputB));

console.log(parseInt(inputC));

//Number = 숫자의 형식을 신경 쓰지 않는다. 
console.log();
console.log(Number(inputA));
console.log(Number(inputB));
console.log(Number(inputC));

//진법 변환
parseInt("0", 2);