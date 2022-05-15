Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01 Test 1
Entrée
Sortie attendue
1-AQTSTR
BRUTUS
02 Test 2
Entrée
Sortie attendue
3-XRIRP 3-SFQBIIFRP
AULUS VITELLIUS
03 Test 3
Entrée
Sortie attendue
10-IUFJYCYKI 10-IULUHKI
SEPTIMIUS SEVERUS
04 Test 4
Entrée
Sortie attendue
13-ZNEPHF 4-ZEZEQO 19-ZLCLYBZ 10-ZKBYQDKI
MARCUS DIDIUS SEVERUS JULIANUS
05 Test 5
Entrée
Sortie attendue
7-VETNWBNL 11-XX 9-XFKYZTLJ
CLAUDIUS II GOTHICUS

```Javascript
const line = readline();
const z = line.split('-')
const shift = z[0];
const word = z[1];

const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let result = '';
for (let i = 0; i < word.length; i++) {
    const p = r.indexOf(word[i])
    const n = r[(p + shift) % 26];
    result += n;
}
```
