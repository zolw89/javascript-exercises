const leapYears = function(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)) {
        return true
    } 
    return false
};
console.log(leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
