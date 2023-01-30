```py
import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

number_1 = input()
equation = input()
number_2 = input()
print(int(eval(f'{number_1}{equation}{number_2}'.replace('x', '*'))))
```