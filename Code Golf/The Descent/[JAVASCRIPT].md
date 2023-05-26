## Solution

### Normal Solution

```js
for (;;) {
  let result = 0;
  for (let mountainHigher = parseInt(readline()), i = 1; i < 8; i++) {
    const mountainH = parseInt(readline());
    if (mountainH > mountainHigher) {
      result = i;
      mountainHigher = mountainH;
    }
  }
  print(result);
}
```

### The good: Number of character: 64

```Javascript
for(;;print(v))for(b=i=0;i<8;i++){h=readline()
if(h>b){v=i;b=h}}
```

### My best solution

```Javascript
for(;;print(v))for(b=i=0;i<8;i++)h=readline(),h>b&&(v=i,b=h)
```
