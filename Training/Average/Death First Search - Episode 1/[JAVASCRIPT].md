## Solution

```Javascript
var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

const links = []
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    links.push({
        x: N1,
        y: N2
    })
}

const exit = []
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    exit.push(EI)
}

const getLinksFromNode = (node) => {
    const result = []

    for (const link of links) {
        if (link.x === node || link.y === node) {
            result.push(link)
        }
    }

    return result;
}

const getNodesFromLinks = (links, visited) => {
    const result = []

    for (const link of links) {
        if (!result.includes(link.x) && visited !== link.x) {
            result.push(link.x)
        }


        if (!result.includes(link.y) && visited !== link.y) {
            result.push(link.y)
        }
    }

    return result;
}

// game loop
const visited = []
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn
    
    // Initialized bfs
    let queued = [SI]
    let result = null

    while (queued.length > 0) {
        const q = queued.shift();
        const linksNode = getLinksFromNode(q)
        const nodesToQueued = getNodesFromLinks(linksNode, q)
        queued = [...queued, ...nodesToQueued]


        for (const linkNode of linksNode) {
            if ((exit.includes(linkNode.x) || exit.includes(linkNode.y)) && !visited.find(v => v.x === linkNode.x && v.y === linkNode.y)) {
                result = linkNode
                break;
            }

            if (!result && (SI === linkNode.x || SI === linkNode.y) && !visited.find(v => v.x === linkNode.x && v.y === linkNode.y)) {
                result = linkNode
                console.error("error", result)
            }
        }

        if (result) {
            console.error("result", result)
            visited.push(result)
            break;
        }
    }
    
    console.log(result ? `${result.x} ${result.y}` : '0 0');
}
```
