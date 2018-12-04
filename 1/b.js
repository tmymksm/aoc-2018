var fs = require('fs');

var input = '' + fs.readFileSync('inputa.txt');
var items = input.split('\n').map(i => parseInt(i)).filter(i => !isNaN(i));

var seen = {};
var cur = 0;
var i = 0;
do {
    seen[cur] = true;
    cur += items[i];
    i = (i + 1) % items.length;
} while (!seen[cur]);
console.log(cur);
