# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```
1. variables: number 1 = 1
number 2 = 1
indexA = [0]
indexB = [1]
2. create a for loop (up to 100?) to put numbers into an array
5. append a number which is array[indexA] + array[indexB]
6.  indexA++ and indexB++
7. function takes in a number (or a string.toNum()) which should is the index+1
8. return the value in argument+1