## Goal

You are given a raw dataset of n integers. Bearing in mind that n is odd, your task is to:

1. Compute the mean value M of the dataset, rounded to the nearest integer.

2. Compute the Median Average Deviation (MAD) of the dataset. The Median Average Deviation of a dataset X (X1, X2..., Xn) is defined as:
MAD = median( abs(Xi - M) )

3. Finally, compute the bounds inf and sup defined as inf = M - 5 * MAD and sup = M + 5 * MAD, and print out the statement: Keeping values between inf and sup

(Wiki: the median is the value separating the higher half from the lower half of a data sample.)

## Example:
Input dataset X = [4, 3, -1, 16, 8] (size = 5)
1. M = mean(X) = (4+3-1+16+8) / 5 = 30 / 5 = 6.0 = 6 (nearest integer)
2. MAD = median( |4-6|, |3-6|, |-1-6|, |16-6|, |8-6|)
= median(2, 3, 7, 10, 2) = median(2, 2, 3, 7, 10) = 3
3. inf = 6 - 5 x 3 = -9 and sup = 6 + 5 * 3 = 21
so output is Keeping values between -9 and 21

## Input
Line 1: An odd integer n as size of the dataset
n next lines: An integer that belongs to the raw dataset.

## Output
Line 1: Keeping values between inf and sup

## Constraints

## Example
Input
5
4
3
-1
16
8
Output
Keeping values between -9 and 21


```py
import sys
import math
import statistics

n = int(input())
mn = 0
l = []
for i in range(n):
    x = int(input())
    l.append(x)
    mn += x

m = round(mn / n)

mad = []
for i in l:
    mad.append(abs(i - m))

mad=statistics.median(mad)

inf = m - 5 * mad
sup = m + 5 * mad
print(f'Keeping values between {inf} and {sup}')
```