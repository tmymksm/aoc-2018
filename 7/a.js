var fs = require('fs');

var input = ('' + fs.readFileSync('input.txt')).split('\n').filter(x => !!x);

var steps = input.map(x => {
    var re = 'Step ([A-Z]) must be finished before step ([A-Z])';
    var items = x.match(re);
    console.log(items);
    return [items[1], items[2]];
});

console.log(steps);


deps = [];
for (var i = 0; i < 26; i++) {
    deps[i] = {};
}

steps.forEach(x => {
    deps[x[1].charCodeAt(0) - 'A'.charCodeAt(0)][x[0]] = true;
});


var result = [];
while (result.length < 26) {
    var next = getNextStep(deps);
    result.push(next);
    console.log(next);
    for(var i = 0; i < deps.length; i++) {
        if (deps[i]) {
            delete deps[i][next];
        }
    }
} 
console.log(result.join(''));


function getNextStep(deps) {
    for (var i = 0; i < deps.length; i++) {
        console.log(deps[i]);
        if (deps[i] && Object.entries(deps[i]).length == 0) {
            deps[i] = false;
            return String.fromCharCode('A'.charCodeAt(0) + i);
        }
    }
}
