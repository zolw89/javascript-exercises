const ftoc = function(temp) {
  let cel = (temp - 32) * 5 / 9;
  cel = (Math.round(cel * 10)) / 10;
  return cel

};

const ctof = function(temp) {
  let fahr = temp * 9 / 5 + 32;
  fahr = (Math.round(fahr * 10)) / 10;
  return fahr

};

console.log(ftoc(-36));
console.log(ctof(25))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
