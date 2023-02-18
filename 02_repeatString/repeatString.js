const repeatString = function(string, amount) {
    if (amount < 0) {return "ERROR";}
    count = amount;
    let answer = '';
    while (count > 0){
    answer += `${string}`;
    count--;
    }
    return answer;
};
repeatString()


// Do not edit below this line
module.exports = repeatString;

//repeatString('hey', 3) // returns 'heyheyhey'