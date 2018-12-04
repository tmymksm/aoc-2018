var fs = require('fs');

var input = '' + fs.readFileSync('input.txt');

var claims = input.split('\n').map((line) => {
    parts = line.match(/#([0-9]+) @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)/);
    if (!parts) {
        return null;
    }
    return {
        id: parts[1],
        x: parseInt(parts[2]),
        y: parseInt(parts[3]),
        w: parseInt(parts[4]),
        h: parseInt(parts[5])
    };
}).filter(x => !!x);

console.log(claims);
grid = [];
for (var i = 0; i < 2000; i++) {
    grid[i] = [];
    for (var j = 0; j < 2000; j++) {
        grid[i][j] = 0;
    }
}

validIds = {};

claims.forEach(claim => {
    validIds[claim.id] = true;
    for (var i = claim.x; i < claim.x + claim.w; i++) {
        for (var j = claim.y; j < claim.y + claim.h; j++) {
            if (grid[i][j] != 0) {
                delete validIds[grid[i][j]];
                delete validIds[claim.id];
            }
            grid[i][j] = claim.id;
        }
    }
});

console.log(validIds);
