var fs = require('fs');

var input = '' + fs.readFileSync('input.txt');

var twos = 0;
var threes = 0;

var result = input.split('\n').reduce((acc, cur) => {
    return cur.split('').reduce((acc, cur) => {
        acc[cur.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        return acc;
    }, Array(26).fill(0)).reduce((acc, cur) => {
        acc[0] += cur == 2 ? 1 : 0;
        acc[1] += cur == 3 ? 1 : 0;
        return acc;
    }, [0, 0]).map((item, idx) => {
        return acc[idx] + (!!item ? 1 : 0);
    });
}, [0, 0]).reduce((acc, cur) => acc * cur);
console.log(result);
