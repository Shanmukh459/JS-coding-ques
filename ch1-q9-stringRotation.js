function isSubString(str1, str2) {
  if(!str1 || !str2) return "invalid input"
  if(str1.length !== str2.length) return false

  str1 += str1
  return str1.includes(str2)
}

console.log(isSubString("waterbottle", 'erbottlewat'))