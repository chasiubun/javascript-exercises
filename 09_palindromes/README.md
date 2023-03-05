# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

1. Receive a string
2. break apart the string into an array
2.5. remove spaces
3. make a for loop
4. See if array[0] is the same as array[index.length]
5. See if array[1] is the same as array[index.length-1]
6. loop ends at (length/2)
7. if all are equal, return true
8. if not all are equal, return false

