module.exports = function check(str, bracketsConfig) {
  let stck = [];
  for(let i=0; i<str.length; i++) {
    let chr = stck[stck.length-1];
    if (getCloseBracket(chr, bracketsConfig) == str[i]) {
      stck.pop();
    } else if(getCloseBracket(str[i], bracketsConfig) != '') {
      stck.push(str[i]);
    } else
      return false;
  }

  return stck.length == 0;
}

function getCloseBracket(chr, bracketsConfig) {
  for(let i=0; i<bracketsConfig.length; i++) {
    if(bracketsConfig[i][0] == chr) return bracketsConfig[i][1];
  }
  return '';
}
