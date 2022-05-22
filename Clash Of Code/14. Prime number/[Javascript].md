## Objectif

Split any number into two prime number

```Javascript
n=+readline(a=b=0)
p=i=>{
e=1
for(j=2;j<=i/2;j++)e&=i%j!=0
return e}
for(i=2;i<=n&&!a;i++){
p(i)&&p(n-i)?(a=i,b=n-i):0
}
print(a,b)
```
