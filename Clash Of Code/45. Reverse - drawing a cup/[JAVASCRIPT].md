L
1
____|____
\       /
 \  L  /
  \___/
02 Test 2
Input
Expected output
C
0
_________
\       /
 \  C  /
  \___/
03 Test 3
Input
Expected output
@
0
_________
\       /
 \  @  /
  \___/
04 Test 4
Input
Expected output
\
1
____|____
\       /
 \  \  /
  \___/
  
  
```js
const drink = readline();
const straw = parseInt(readline());

print(`____${straw == 1? '|' : '_'}____`);
print('\\       /');
print(` \\  ${drink}  /`);
print('  \\___/');
```