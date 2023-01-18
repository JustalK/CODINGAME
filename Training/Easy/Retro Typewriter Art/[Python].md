```py
import sys
import math
import re

t = input()
rsl = []
line = ""

words = t.split(" ")
for x in words:
  # Handling a new line
  if x == "nl":
    rsl.append(line)
    line = ""
  # Handling all the other characters
  else:
    z = re.search(r'\d*', x)
    print(z.group())
    line = line + x


print(rsl)
```
