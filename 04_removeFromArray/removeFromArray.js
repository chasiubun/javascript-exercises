const removeFromArray = function(myArray, ...num) {
    const newArray = [];
    myArray.forEach((item) => {
        if (!num.includes(item)){
            newArray.push(item);
        }
    });    
    return newArray

} 
//name a new array
//for each item in array1,
//if the value is not in the num/index, 
//push it into the new array

// Do not edit below this line
module.exports = removeFromArray;

/*v1.0
const removeFromArray = function(myArray, ...num) {
    const index = num - 1
    myArray.splice(index, 1);
    return myArray;}*/
/*v1.1
const removeFromArray = function(myArray, ...num) {
    const newArray = [];
    myArray.forEach((item) => {
        if (!num.includes(item)){
            newArray.push(item);
        }
    });
    return newArray
}
*/