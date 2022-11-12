// 모듈을 추출합니다.
const { exit } = require('process');
const repl = require('repl');
// 입력을 시작합니다.
console.log("cm 단위의 숫자를 입력해주세요.");
repl.start({
    prompt: "입력> ",
    eval: (command, context, filename) => {
        // 입력(command)을 받았을 때 처리를 수행합니다.
        let number = Number(command);
        // 입력이 숫자인지 확인합니다.
        if (isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            console.log(number+"cm는 "+number*0.393701+"inch 입니다.");
        }
        // 처리 완료
        exit();
    }
});