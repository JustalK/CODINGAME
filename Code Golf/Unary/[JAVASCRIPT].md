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



(d-99?" ":"")+(a?"0 0":"00 0")
d-99?" ":""
