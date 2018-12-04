var fs = require('fs');

var input = ('' + fs.readFileSync('input.txt')).split('\n').filter(x => !!x);

var remove = (s, i) => {
    var x = s.split('');
    x.splice(i, 1);
    return x.join('');
};

for (var i = 0; i < input[0].length; i++) {
    var removed = input.map(item => remove(item, i));
    var seen = {};
    for (var j = 0; j < removed.length; j++) {
        if (seen[removed[j]]) {
            console.log(removed[j]);
            exit();
        }
        seen[removed[j]] = true;
    }
}
