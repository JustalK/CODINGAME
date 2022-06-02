```Javascript
print([...readline()].map(c=>c.charCodeAt().toString(2).padStart(7,0)).join``.match(/1+|0+/g).map(c=>["00 ","0 "][c[0]]+'0'.repeat(c.length)).join` `)
```
