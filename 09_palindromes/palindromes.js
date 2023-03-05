const palindromes = function (string) {
    let str = string.replaceAll(" ","")
    let punctuation = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    str = str.replace(punctuation, '');
    str = str.toUpperCase();
    let newArray = str.split('');
    console.log(newArray);
    let index = 0
    let trueCount = 0
    let falseCount = 0
    
    for (i=0; i < (newArray.length/2); i++){
        console.log(newArray[index])
        console.log(newArray[newArray.length-index-1])
        if (newArray[index] == newArray[newArray.length-index-1]){
            trueCount++
        }
        else if (newArray[index] !== newArray[newArray.length-index-1]){
            falseCount++;
        }
    index++    
    }
    if (falseCount > 0){return(false)}
    if (trueCount > 0 && falseCount === 0){return(true)}
};
// Do not edit below this line
module.exports = palindromes;


// 1. Receive a string
// 2. break apart the string into an array
// 2.5. remove spaces
// 3. make a for loop
// 4. See if array[0] is the same as array[index.length]
// 5. See if array[1] is the same as array[index.length-1]
// 6. loop ends at (length/2)
// 7. if all are equal, return true
// 8. if not all are equal, return false
