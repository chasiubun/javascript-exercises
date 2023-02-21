const sumAll = function(arg1, arg2) {
    if (arg1 < 0 || arg2 < 0 ) {return "ERROR"};
    if (Number.isInteger(arg1) == false || Number.isInteger(arg2) == false) {return "ERROR"};
    let sum = 0
    newArray = [];
    if (arg1 < arg2){
    newArray[0] = arg1;
    newArray[arg2-arg1] = arg2;
    for (let n = 1; n < arg2; n++){
        newArray[n] = newArray[n-1] + 1;}
    newArray.forEach((arrayNumber) => {
        sum = sum + arrayNumber
    });}
    if (arg1 > arg2){
    newArray[0] = arg2;
    newArray[arg1-arg2] = arg1;
    for (let n = 1; n < arg1; n++){
        newArray[n] = newArray[n-1] + 1;}
    newArray.forEach((arrayNumber) => {
        sum = sum + arrayNumber
    });}
    return sum;
}
// Do not edit below this line
module.exports = sumAll;

/*V1.0
const sumAll = function(arg1, arg2) {
    let sum = 0
    newArray = [];
    newArray[0] = arg1;
    newArray[arg2-arg1] = arg2;
    for (let n = 1; n < arg2; n++){
        newArray[n] = newArray[n-1] + 1;}
    newArray.forEach((arrayNumber) => {
        sum = sum + arrayNumber
    });
    return sum;
}
*/


//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

//Get 2 numbers
//make a sum var
//Form an array where arg1 is in index0 and then arg2 is in index(arg2-arg1)
//fill in the values within the array in sequential order with:
    //loop: index1 = arg1+1
//forEach item, add it to a sum

/*    index[1] = index[0] +1
    index[2] = index[1] +1
for ( let n = 1; n < arg2; n++ )
    starting > arg1
    index[n] = index[n-1]++
    n++
    ending < arg2
    */