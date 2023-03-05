const fibonacci = function(fibNum) {
    if (fibNum < 0){return "OOPS"}
    let indexA = 0, indexB = 1;
    const fibSeq = Number(fibNum)-1
    const fibArray = [1, 1,]
    for (i=0; i < 100; i++){
        fibArray.push(fibArray[indexA]+fibArray[indexB])
        indexA++
        indexB++
    }
    return fibArray[fibSeq]
};

// Do not edit below this line
module.exports = fibonacci;

