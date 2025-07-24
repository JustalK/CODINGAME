## Solution

### Number of character: 191

```js
i=readline;T=i(a=l=0).split` `;let[X,Y]=i(i(b=T[1]-1)).split` `.map(x=>+x);for(r=T[0]-1;o=i();print(X,Y)){for(c of o)r=c=='L'?X-1:r,l=c=='R'?X+1:l,b=c=='U'?Y-1:b,a=c=='D'?Y+1:a;X=(r+l)>>1;Y=(a+b)>>1}
```