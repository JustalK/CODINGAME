## Solution

### Number of character: 165

```js
M=Math.max
for(r=readline,i=r(g={}),k=[];i--;k[i]=x,g[x]=[g[x],y].flat())[x,y]=r().split` `
s=(x,c=1)=>g[x]?M(...g[x].map(a=>s(a,c+1))):c
print(M(...k.map(x=>s(x))))
```