## Solutions

```Javascript
const degreesToradians = (degrees) => {
   var pi = Math.PI;
   return degrees * (pi/180);
 }

const LON = degreesToradians(parseFloat(readline().replace(',', '.')));
const LAT = degreesToradians(parseFloat(readline().replace(',', '.')));
const N = parseInt(readline());

const listDefib = []
for (let i = 0; i < N; i++) {
   const DEFIB = readline().split(';');

   listDefib.push({
       name: DEFIB[1],
       lon: degreesToradians(parseFloat(DEFIB[4].replace(',', '.'))),
       lat: degreesToradians(parseFloat(DEFIB[5].replace(',', '.')))
   })
}

let result = '';
let distance = 10**999999999;
for (let i = 0; i < listDefib.length; i++) {
   const x = (listDefib[i].lon - LON) * Math.cos((LAT + listDefib[i].lat)/2)
   const y = (listDefib[i].lat - LAT)
   // sqrt((x1-x2)^2+(y1-y2)^2)
   const d = Math.sqrt(x*x + y*y) * 6371
   if (d <= distance) {
       result = listDefib[i]
       distance = d
   }
}

console.log(result.name);
```
