## Solution

### Number of character: 151

```js
r=readline
for(j=i=r(X=[],Y=[]);i--;)[X[i],Y[i]]=r(M=Math).split` `
print(Y.sort((a,b)=>a-b).reduce((l,s)=>l+M.abs(s-Y[j>>1]),M.max(...X)-M.min(...X)))
```