function checkPalindormePermutation(str) {
  str = str.trim().split(" ").join("").toLowerCase()
  let s = new Set()
  for (let i = 0; i < str.length; i++) {
    if(s.has(str[i])) s.delete(str[i])
    else s.add(str[i])
  }
  return s.size <= 1
}

console.log(checkPalindormePermutation("  Tact   Coa"))