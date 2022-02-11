let heart = '';
const row = 7;
const column = 7;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        if ((i === 0 && j % 3 !== 0) || (i === 2 && j % 3 === 0) || (i === 4 && (j === 1 || j === column - 2)) || (i === 5 && (j === 2 || j === 4)) || (i === 6 && j === (column - 1) / 2)) {
            heart += ' * '
        } else if ((i === 1 || i === 3) && j === 0) {
            heart += '  *'
        } else if ((i === 1 || i === 3) && j === column - 1) {
            heart += '*  '
        } else if (i === 1 && j === 3) {
            heart += '* *'
        } else {
            heart += '   ' 
        }
    }
    heart += '\n'
}

console.log(heart);