// 모듈을 추출합니다.
const { exit } = require('process');
const repl = require('repl');
// 입력을 시작합니다.
console.log("원의 반지름을 입력해주세요.");
repl.start({
    prompt: "입력> ",
    eval: (command, context, filename) => {
        // 입력(command)을 받았을 때 처리를 수행합니다.
        let number = Number(command);

        // 입력이 숫자인지 확인합니다.
        if (isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            let a = number * number * 3.14;
            let b = number * 2 * 3.14;
            console.log("원의 반지름 : "+number);
            console.log("원의 넓이 : "+a);
            console.log("원의 둘레 : "+b);
        }
        // 처리 완료
        exit();
    }
});