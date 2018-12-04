var fs = require('fs');


var input = ('' + fs.readFileSync('input.txt')).split('\n').filter(x => !!x);

input.sort();
console.log(input);
var guards = {};

var current = null;
var lastSleep = 0;
for(var i = 0; i < input.length; i++) {
    var guardnumMatch = input[i].match(/#([0-9]*)/);
    if (guardnumMatch) {
        current = parseInt(guardnumMatch[1]);
        continue;
    }
    if (!guards[current]) {
        guards[current] = {
            id: current,
            total: 0,
            minutes: Array(60).fill(0)
        };
    }
    var time = parseInt(input[i].match(/:([0-9]*)/)[1]);
    if (input[i].indexOf('asleep') != -1) {
        lastSleep = time;
    } else {
        console.log(lastSleep, time);
        guards[current].total += time - lastSleep;
        for (var j = lastSleep; j < time; j++) {
            guards[current].minutes[j]++;
        }
    }
}

var bestGuard = Object.entries(guards).map(x => x[1]).reduce((acc, cur) => {
    if (cur.total > acc.total) { 
        return cur;
    }
    return acc;
});

// get the best minute
var bestMinute = -1;
var bestVal = -1;
for (var i = 0; i < bestGuard.minutes.length; i ++) {
    if (bestGuard.minutes[i] > bestVal) {
        bestMinute = i;
        bestVal = bestGuard.minutes[i];
    }
}
console.log(bestGuard);
console.log(bestGuard.id, bestGuard.minutes, bestMinute);
console.log(bestGuard.id * bestMinute);

var bestGuardd;
var bestMinute = -1;
var bestVal = -1;
Object.entries(guards).map(x => x[1]).forEach(bestGuard => {
    for (var i = 0; i < bestGuard.minutes.length; i ++) {
        if (bestGuard.minutes[i] > bestVal) {
            bestMinute = i;
            bestVal = bestGuard.minutes[i];
            bestGuardd = bestGuard;
        }
    }
});
console.log(bestGuardd, bestMinute);
console.log(bestGuardd.id * bestMinute);
