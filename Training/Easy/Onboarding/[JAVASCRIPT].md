## Solution

```Javascript
for(;;) {
    const enemy1 = readline(), dist1 = parseInt(readline()), enemy2 = readline(), dist2 = parseInt(readline());
    print(dist1 < dist2 ? enemy1 : enemy2);
}
```
