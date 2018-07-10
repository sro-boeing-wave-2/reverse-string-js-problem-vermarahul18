// The intent of this file is to reverse
// the string using built in functions.
const reverse = (x) => {
  const arr = x.split('').reverse().join('');
  return arr;
};

module.exports = reverse;
