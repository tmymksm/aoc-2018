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

var curr = 0;
var workers = [0, 0, 0, 0, 0];
var working = ['', '', '', '', ''];
var result = [];
while (result.length < 26) {
    var assignmented = true;
    while(assignmented) {
        assignmented = false;
        for (var i = 0; i < workers.length; i++) {
            if (workers[i] <= curr) {
                removeDeps(deps, working[i]);
                var next = getNextStep(deps);
                if (!next) {
                    working[i] = '';
                    continue;
                }
                console.log(curr, i, next, working, workers);
                working[i] = next;
                workers[i] = curr + next.charCodeAt(0) - 'A'.charCodeAt(0) + 61;
                result.push(next);
                console.log(curr, i, next, working, workers);
                assignmented = true;
            }
        }
    }
    var curr = 900001;
    for (var i = 0; i < workers.length; i++) {
        if (working[i] != '') {
            curr = Math.min(curr, workers[i]);
        }
    }
} 
console.log(result.join(''));
console.log(curr);


function getNextStep(deps) {
    for (var i = 0; i < deps.length; i++) {
        if (deps[i] && Object.entries(deps[i]).length == 0) {
            deps[i] = false;
            return String.fromCharCode('A'.charCodeAt(0) + i);
        }
    }
}

function removeDeps(deps, next) {
    for(var i = 0; i < deps.length; i++) {
        if (deps[i]) {
            delete deps[i][next];
        }
    }
}
