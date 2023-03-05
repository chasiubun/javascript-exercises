# Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```

## Hints

- You should use a built-in javascript method to do most of the work for you!

1. read the array:
2. read every object in the array
3. grab the value of the first key in every object of the array
4. push the value of the first key in every object of the aray into a new array