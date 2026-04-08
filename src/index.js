module.exports = function reverse(n) {
  const nS = n.toString();
  let result = '';
  for (let i = nS.length - 1; i >= 0; i--) {
    result += nS[i];
  }
  return Number(result.replace('-', ''));
};
