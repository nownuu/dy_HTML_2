//매개 변수를 입력하지 않고 함수 호출
function print(name, count = 1){
    count = count || 1;
    count = typeof(count) != 'undefined' ? count : 1;
    console.log(`${name} 이/가 ${count}개 있습니다.`)
}

//출력
print("사과", 10);
print("사과");