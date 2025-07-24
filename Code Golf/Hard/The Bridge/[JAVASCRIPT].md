## Solution

### Number of character: 958

```js
r=readline
var[M,V]=[r(c=b=>b.map(({x,y,w})=>({x,y,w}))),+r()]
d=[...Array(4)].map(()=>[...r(a=['SPEED','WAIT','JUMP','DOWN','UP','SLOW'])].map(c=>c=='.'))
l=d[0].length
p=(k,v)=>k.map(i=>{n=i.x+i.w
y=i.y
h=d[y].slice(i.x,n)
G=v==a[4]
L=v==a[3]
if(G||L)(G&&y==0||L&&y==3)?k=h=[]:(y=y+(G?-1:1),h.push(...d[y].slice(i.x,n)))
if((h.some(x =>!x)&&v!=a[2])||(n<l&&!d[y][n])){return}[i.x,i.y]=[n,y]
return i}).filter(b=>b)
f=(o,P)=>{e=[]
for(u of a){i=c(o)
if(u==a[0]){i.forEach(b=>b.w++)}else if(u==a[5]){i.forEach(b=>b.w--)
if(i[0].w==0)i=[]}i=p(i,u),i.length>=P&&e.push({u,k:i})}return e}
t=(e,Z)=>{[s,m]=[[e],[]]
while(s.length){b=s[0]
!b.next&&((b.next=f(b,Z)),(b.id=0))
if(b[0].x>=l)return m.reverse()
if(b.id<b.next.length){n=b.next[b.id++],s.unshift(n.k),m.unshift(n.u)}else m.shift(s.shift())}return}
for(u=null;;print(u.shift()||a[1])){for([w,k]=[+r(i=M),[]];i--;q&&k.push({x,y,w}))[x,y,q]=r().split` `.map(n=>+n)
for(g=k.length;!u&&g>=V;g--)u=t(c(k),g)}
```