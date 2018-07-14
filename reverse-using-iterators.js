// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (x) => {
  let newstr = '';
  for (let i = x.length - 1; i >= 0; i -= 1) {
    newstr += x[i];
  }
  return newstr;
};

module.exports = reverse;
