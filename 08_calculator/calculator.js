const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
  let total = 0;
  let index = 0;
  for (num in a){
    let newNum = (a[index])
    total += newNum
    index++
  }
  return(total)
};

const multiply = function(a){
  let total = 1;
  let index = 0;
    for (num in a){
        let newNum = (a[index])
        total = total*newNum
        index++
        }
        return total
};

const power = function(a, b) {
  let total = a
  for (i = 0; i < b - 1;i++){
      total = total * a
      }
  return total
  };

const factorial = function(a) {
total = a;
index = 1
if (total == 0 || total == 1){return 1}
else{
    for (i = 0; i < (a - 1);i++){
        total = total * (a-index)
        index++
    }}
  return total}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
