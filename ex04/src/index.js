// Only change code below this line
function sumFibonacci(num){
    var previousNum = 0;
    var currentNum = 1;
    var result = 0;
    while(currentNum <= num){
        if (num === 1) {
            result = 1;
        }
        else if (currentNum % 2 !== 0) {
            result += currentNum;
        }
        currentNum += previousNum;
        previousNum = currentNum - previousNum;
    }
    return result;
}
// Only change code above this line

console.log(sumFibonacci(20)); // Change this line
module.exports = sumFibonacci;
