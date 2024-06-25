function isUnique(str) {
  str.split("").sort().join("")
  for(let i = 1; i < str.length; i++){
    if(str[i] === str[i-1]) {
      return false
    }
  }
  return true
}

console.log(isUnique('ahnfbsrg'))