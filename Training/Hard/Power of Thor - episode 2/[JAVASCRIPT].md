## Solution

```Javascript
const WIDE = 4
var inputs = readline().split(' ');
const thor = {
    x: parseInt(inputs[0]),
    y: parseInt(inputs[1])
};
let giants = []
let n = h = 0;

const scan = () => {
    var inputs = readline().split(' ');
    h = parseInt(inputs[0]);
    n = parseInt(inputs[1]);
    giants = []
    for (let i = 0; i < n; i++) {
        var inputs = readline().split(' ');
        giants.push({x: parseInt(inputs[0]), y: parseInt(inputs[1])})
    }
}

const play = () => {
    console.error(n === closestGiants(WIDE).length, n, closestGiants(WIDE).length)
    if (n === closestGiants(WIDE).length) {
        print('STRIKE')
    } else {
        move();
    }
}

const findBarycenter = () => {
    let centerX = centerY = 0;
    for (let giant of giants) {
        centerX += giant.x
        centerY += giant.y
    }

    centerX /= n
    centerY /= n
    return {x: parseInt(centerX), y: parseInt(centerY)}
}

const dist = (x1, y1, x2, y2) => {
    return parseInt(Math.abs(x1 - x2) + Math.abs(y1 - y2))
}

const moveTocenter = () => {
    const center = findBarycenter();
    let action = '';

    if (center.y > thor.y) {
        thor.y += 1;
        action += 'S';
    } else if (center.y < thor.y) {
        thor.y -= 1;
        action += 'N';
    }

    if (center.x > thor.x) {
        thor.x += 1;
        action += 'E';
    } else if (center.x < thor.x) {
        thor.x -= 1;
        action += 'W';
    }

    print(action !== '' ? action : 'WAIT');
}

const runAway = () => {
    const center = findBarycenter();
    const possibilities = [];

    if (thor.x < 40 && !isGiantsTooClose(thor.x + 1, thor.y)) {
        possibilities.push({
            direction: 'E',
            totalGiants: closestGiants(WIDE, thor.x + 1, thor.y).length,
            x: thor.x + 1,
            y: thor.y
        })
    }

    if (thor.y > 0 && !isGiantsTooClose(thor.x, thor.y - 1)) {
        possibilities.push({
            direction: 'N',
            totalGiants: closestGiants(WIDE, thor.x, thor.y - 1).length,
            x: thor.x,
            y: thor.y - 1
        })
    }

    if (thor.y > 0 && thor.x < 40 && !isGiantsTooClose(thor.x + 1, thor.y - 1)) {
        possibilities.push({
            direction: 'NE',
            totalGiants: closestGiants(WIDE, thor.x + 1, thor.y - 1).length,
            x: thor.x + 1,
            y: thor.y - 1
        })
    }

    if (thor.y > 0 && thor.x > 0 && !isGiantsTooClose(thor.x - 1, thor.y - 1)) {
        possibilities.push({
            direction: 'NW',
            totalGiants: closestGiants(WIDE, thor.x - 1, thor.y - 1).length,
            x: thor.x - 1,
            y: thor.y - 1
        })
    }

    if (thor.y < 18 && !isGiantsTooClose(thor.x, thor.y + 1)) {
        possibilities.push({
            direction: 'S',
            totalGiants: closestGiants(WIDE, thor.x, thor.y + 1).length,
            x: thor.x,
            y: thor.y + 1
        })
    }

    if (thor.y < 18 && thor.x < 40 && !isGiantsTooClose(thor.x + 1, thor.y + 1)) {
        possibilities.push({
            direction: 'SE',
            totalGiants: closestGiants(WIDE, thor.x + 1, thor.y + 1).length,
            x: thor.x + 1,
            y: thor.y + 1
        })
    }

    if (thor.y > 0 && thor.x > 0 && !isGiantsTooClose(thor.x - 1, thor.y - 1)) {
        possibilities.push({
            direction: 'SW',
            totalGiants: closestGiants(WIDE, thor.x - 1, thor.y - 1).length,
            x: thor.x - 1,
            y: thor.y - 1
        })
    }

    if (thor.x > 0 && !isGiantsTooClose(thor.x - 1, thor.y)) {
        possibilities.push({
            direction: 'W',
            totalGiants: closestGiants(WIDE, thor.x - 1, thor.y).length,
            x: thor.x - 1,
            y: thor.y
        })
    }

    console.error(possibilities)
    if (possibilities.length > 0) {
        let bestOption = {
            direction: 'STRIKE',
            totalGiants: 0,
            x: 0,
            y: 0
        }
        for (let distanceFromCenter = 0, i = 0; i < possibilities.length; i++) {
            if ((possibilities[i].totalGiants > bestOption.totalGiants) || (possibilities[i].totalGiants == bestOption.totalGiants && dist(center.x, center.y, possibilities[i].x, possibilities[i].y) > distanceFromCenter)) {
                bestOption = possibilities[i];
                distanceFromCenter = dist(center.x, center.y, possibilities[i].x, possibilities[i].y);
            }
        }
        thor.x = bestOption.x;
        thor.y = bestOption.y;
        print(bestOption.direction)
    } else {
        print('STRIKE')
    }
}

const move = () => {
    if (!isGiantsTooClose()) {
        moveTocenter();
    } else {
        runAway();
    }
}

const isGiantsTooClose = (x = thor.x, y = thor.y) => {
    return closestGiants(1, x, y).length >= 1;
}

const closestGiants = (distance, x = thor.x, y = thor.y) => {
    const closest = []
    for (let giant of giants) {
        if (Math.abs(giant.x - x) <= distance && Math.abs(giant.y - y) <= distance) {
            closest.push(giant)
        }
    }

    return closest;
}

while (true) {
    scan();
    play();
    console.error(thor)
}
```
