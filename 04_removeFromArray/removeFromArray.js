const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    for (let i=arr.length - 1; i >= 0; i--) {
        for (let j=0; j < nums.length; j++) {
            if(arr[i] === nums[j]) {
            arr.splice(i, 1)
            console.log(arr)
            }
        }
    }
    return arr;

};

console.log(removeFromArray([1,5,3,8,10], 10, 3, 5, 8, 1))


// Do not edit below this line
module.exports = removeFromArray;
