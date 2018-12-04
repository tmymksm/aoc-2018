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

claims.forEach(claim => {
    //console.log(claim.x, claim.x + claim.w);
    for (var i = claim.x; i < claim.x + claim.w; i++) {
        //console.log('slorg');
//        console.log(claim.y, claim.y + claim.h);
        for (var j = claim.y; j < claim.y + claim.h; j++) {
//            console.log('slorgg');
//            console.log(i, j);
            grid[i][j]++;
        }
    }
});

var result = grid.reduce((acc, cur) => {
    return acc + cur.reduce((acc, cur) => {
        return acc + ((cur >= 2) ? 1 : 0);
    }, 0);
}, 0);

console.log(result);
