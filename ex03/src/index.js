// Only change code below this line
function rangeOfNumbers(startN, endN){
    if (startN>endN) {
        return 'The starting number will always be less than or equal to the ending number';
    } else if (startN === endN) {
        return [startN];
    } else {
        const nums = rangeOfNumbers(startN, endN-1);
        nums.push(endN);
        return nums;
    }
}

// Only change code above this line

console.log(rangeOfNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // Change this line
module.exports = rangeOfNumbers;
