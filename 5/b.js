var fs = require('fs');


function react(input) {
    for(var i = 0; i < input.length - 1; i++) {
        var a = input[i];
        var b = input[i + 1];
        if (a != b && a.toLowerCase() == b.toLowerCase()) {
            input.splice(i, 2);
            return true;
        }
    }
    return false;
}
var best = 99999999;
for(var i = 0; i < 26; i++) {
    console.log(new RegExp(String.fromCharCode('a'.charCodeAt(0) + i)));
    var re = new RegExp(String.fromCharCode('a'.charCodeAt(0) + i), 'ig');
    var inputs = ('' + fs.readFileSync('input.txt')).trim().replace(re, '');
    var input = inputs.split('');
    while (react(input)) {}
    var result = input.length;
    console.log(result);
    if (result < best) {
        best = result;
    }
}
console.log(best);
