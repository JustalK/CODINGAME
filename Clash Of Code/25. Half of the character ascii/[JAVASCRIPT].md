# Goal
The half of a character c is the character whose ascii code is half (rounded down) of the ascii code of the character c.

Given a character s, print its half.
Input
Line 1: A character, s of which the half must be found.
Output
A single line corresponding to the half of the character s.
Constraints
Example
Input
s
Output
9

```Ruby
$><<(gets.ord/2).chr
```

```Javascript
print(String.fromCharCode(~~readline().charCodeAt()/2))
```
