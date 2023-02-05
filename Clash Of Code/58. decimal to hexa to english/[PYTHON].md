## Goal

Convert a decimal number into an English word using Hexspeak.

Hexspeak is a variant of English spelling using the hexadecimal digits. There is multiple flavours of Hexspeak, ours is defined as follow:

Hexspeak -> English
ABCDEF -> ABCDEF
0 (zero) -> O (letter O)

With that, we can translate a decimal value into hexadecimal, and finally into English.

Decimal -> Hexadecimal -> English
14598366 -> 0xDEC0DE -> DECODE

## Input
A decimal number n.

## Output
The English string obtained from the hexadecimal value of n.

## Constraints
0 ≤ n ≤ (2³² - 1)
n is guaranteed to be decoded and thus does not contain any digit from 1 to 9 in its hexadecimal form.
The leading zeros are always discarded. The output never starts with the letter O except for the word O.

## Example
Input
14598366
Output
DECODE

```py
import sys
import math

n = int(input())

print((hex(n).replace('0','O')[2:].upper()))
```