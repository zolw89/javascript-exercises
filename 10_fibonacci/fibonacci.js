const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    num = Number(num);
    
    let arr = [1, 1];
    for (let i = 1; i <= num - 2; i++) {
        arr.push(arr[i-1] + arr[i])
    }
    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
