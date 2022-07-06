const palindromes = function (str) {
let letterStr = str.toLowerCase().replace(/[\W]/gi, '');;
let reversedStr = letterStr.split('').reverse().join('')

return letterStr === reversedStr;



};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes;
