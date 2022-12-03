const words =['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// filter()
console.log('////////////   filter()');

const rs = words.filter(words => words.length > 6);
const rs1 = words.filter(
    (words)=>{
        // 
        return words.length > 6;
    }
)

console.log(rs);
console.log();
console.log(rs1);