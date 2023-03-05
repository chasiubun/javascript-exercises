const getTheTitles = function(books){
    const bookList = [];
    let index = 0;
    for (const titles in books){
        bookList.push(books[index].title);
        index++}
    return bookList
};

// Do not edit below this line
module.exports = getTheTitles;
