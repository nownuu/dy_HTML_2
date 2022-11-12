const { exit } = require('process');
const repl = require('repl');

repl.start({
    prompt : "입력 > ",
    eval: (command, context, filename) => {
        let won = Number(command);

        if(isNaN(won)){
            console.log("숫자가 아닙니다.");
        } else{
            console.log("달러 : " + won);
            console.log("→ 원화 : "+ won*1270);
        }
        exit();
    }
});