## Goal

The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

## 01 Test 1
Input
5
2

Expected output
2

## 02 Test 2
Input
8
3

Expected output
3

## 03 Test 3
Input
0
5

Expected output
0

## 04 Test 4
Input
0
0

Expected output
0

```py
import sys
import math


n = int(input())
m = int(input())

if n < m:
    print(n)
else:
    print(m)
```