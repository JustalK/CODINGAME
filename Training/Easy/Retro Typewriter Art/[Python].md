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
    n = re.search(r'\d+', x)
    ch = re.search(r'(\D+|\d$)', x)
    time = n.group()
    word = ch.group()
    if time == x:
      time = time[:-1]
    elif word == "sp":
        word = " "
    elif word == "bS":
        word = "\\"
    elif word == "sQ":
        word = "'"
    line = line + word * int(time)

rsl.append(line)

for x in rsl:
  print(x)
```
