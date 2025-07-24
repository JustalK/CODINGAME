## Solution

### The good: Number of character: 125

```Javascript
print([...readline()].map(c=>c.charCodeAt().toString(2).padStart(7,0)).join``.match(/1+|0+/g).map(c=>["00 ","0 "][c[0]]+'0'.repeat(c.length)).join` `)
```

```Javascript
for(m=readline(r=""),i=-1,d=99;++i<m.length;)for(s=7,c=m.charCodeAt(i);s--;r+=a==d?"0":(d-99?" ":"")+(a?"0 0":"00 0"),d=a)a=(c>>s)&1
print(r)
```

```Javascript
[...readline(r="",d=99)].map(m=>{for(s=7;s--;r+=a-d?(d-99?" ":"")+(a?"0 0":"00 0"):"0",d=a)a=(m.charCodeAt()>>s)&1})
print(r)
```

## Back to the game in 2025: Number of character: 107

After looking at it again, the 99 is not needed and can be replace by any number over 2, it's only needed to trigger the first condition.
Some condition can be shorten and we can take advantage of the fact that a number concat to a string give a string.

```js
for(c of readline(d=2,r=""))for(s=7;s--;d=a)a=c.charCodeAt()>>s&1,r+=a-d?(r&&" ")+[a?"":0]+"0 0":0
print(r)
```