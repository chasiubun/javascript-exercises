const reverseString = function(string) {
    const stringArray = string.split("");
    stringArray.reverse();
    let newString = stringArray.toString();
	for (instance of newString){
		newString = newString.replace(",","");}
	return newString;
};

// Do not edit below this line
module.exports = reverseString;
