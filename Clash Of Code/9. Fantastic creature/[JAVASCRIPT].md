You got a farm with fantastic creatures and a stock of food. You have to know if the stock is big enough to feed all creatures.

Each creature takes a portion of food, except the troll. You MUST NOT feed the troll (cf RFC 8140, §2.1 : https://datatracker.ietf.org/doc/html/rfc8140#section-2.1 )
Entrée
1st line: integer F is the number of portions in your stock of food
2nd line: integerN is the number of fantastic creatures
next N lines: name of each creature
Sortie
Lot of food if your stock is sufficient to feed all creatures at least twice
Just enough food if your stock is sufficient to feed all creatures
Not enough food if not
Contraintes
0 <= F < 100
1 <= N < 100
Creature names are uppercase and may contain spaces
Exemple
Entrée
4
2
GNOME
DWARF
Sortie
Lot of food


```
 const F = parseInt(readline());
const N = parseInt(readline());
let r = 0
for (let i = 0; i < N; i++) {
    const monster = readline();
    if (monster === 'TROLL') {
        continue;
    }
    r++;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

if (r*2 <= F) {
    console.log('Lot of food');
} else if(r <= F) {
    console.log('Just enough food');
} else {
    console.log('Not enough food');
}
```
