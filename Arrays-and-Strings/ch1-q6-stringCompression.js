function compressString(str) {
  let curChar = str[0]
  let res = ''
  let curCount = 0
  for(c of str) {
    if(curChar === c) curCount++
    else {
      res = res + curChar + curCount
      curChar = c
      curCount = 1
    }
  }
  res  = res + curChar + curCount
  return res.length === str.length ? str : res
}

console.log(compressString('aabbcc'))