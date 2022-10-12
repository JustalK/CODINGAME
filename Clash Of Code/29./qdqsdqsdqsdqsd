Objectif
You are going to write code for a water lever indicator. You must output water level for corresponding sensor reading
Entrée
Line 1: An integer n denotes the number of different levels
Line 2: An integer m the number of readings from sensor
Line 3: m space separated integer reading. A reading of -1 means water level can not be specified.
Sortie
One line having m space separated integer water_level for corresponding sensor reading. If any reading can not specify the water level you have to print previous water_level
Contraintes
3 ≤ n, m ≤ 100
-1 ≤ reading ≤ n-1; 1st reading will never be -1
0 ≤ water_level ≤ n-1
Exemple
Entrée
3
5
0 -1 1 -1 2
Sortie
0 0 1 1 2


```Javascript
let f=readline
let n=+f(),m=+f(),z=f().split(' '),r,i,o=[z[0]]
for (i = 1; i < m; i++) {
    r=+z[i]
    if (r==-1) {
        o.push(o[i-1])
        continue
    }
    o.push(r)
}
print(o.join(' '))
```
