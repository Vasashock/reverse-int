module.exports = function reverse (n) {
  let nS = n.toString();
  let result = '';
  for (let i = nS.length - 1  ; i >= 0; i--) {
    const element = nS[i];
    console.log(nS[i]);
    result += nS[i];
  }
  return Number(result.replace('-',''));
}
