var fs = require('fs');

var input = '' + fs.readFileSync('inputa.txt');

var result = input.split('\n').reduce((acc, cur) => acc + (parseInt(cur) || 0), 0);
console.log(result);
