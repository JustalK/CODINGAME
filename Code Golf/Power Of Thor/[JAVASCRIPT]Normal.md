# Solution

Number of character: 90

```Javascript
for([a,b,c,d]=readline().split` `;;)print((b==d?'':--b<d?'N':'S')+(a==c?'':a<c--?'W':'E'))
```

## Tricks

- Use tenary everywhere
- Remove the let, const, var
- Destructure the result
- es6 does not need () on function with one parameter
- decrement on value
- remove semicolons
- Use only one line
- Remove space

## Possible improvement ? es7 ?

- Maybe remove the + of the concatenation
- Random the N:S or W:E so test pass from time to time
