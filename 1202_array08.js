let string ='안녕하세요. 좋은 아침입니다.';

// 문자열이 있는지 없는지 확인
let posi = string.indexOf('아침');

console.log(posi);

if(string.indexOf('아침')==0){
    console.log('좋은 아침 ;-)');
} else{
    console.log('좋은 저녁 :-(');
}