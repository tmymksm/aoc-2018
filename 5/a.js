var fs = require('fs');

var input = ('' + fs.readFileSync('input.txt')).trim().split('');

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

while (react(input)) {}

console.log(input);
console.log(input.length);
