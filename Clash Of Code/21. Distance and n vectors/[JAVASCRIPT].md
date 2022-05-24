# Goal

Jimmy is a young astronaut, and has a ship that can only go to 50 units. You need to find the relative distance in n dimension of a vector u representing the coordinates of Jimmy, and a vector v which is the new place he wants to go.

## Input
First input : An integer rounded n for n dimension of space.
Second input : A vector u in dimension n.
Third input : A vector w in dimension n.

## Output
First line : an int for the distance between all the points of the two vectors.
Second line : Tell us if Jimmy can go to the new place with his ship ("Yes" or "No").

## Constraints
1≤n≤100
lenght of u = lenght of v

## Example

Input:
2
25 34
12 3

Output:
34
Yes

```Javascript
f=readline,s=split,n=+f(),u=f().s` `,v=f().s` `
d=Math.round(Math.hypot(...u.map((j,i)=>u[i]-v[i])))
print(d+(d<50?'/nYes':'/nNo'))
```
