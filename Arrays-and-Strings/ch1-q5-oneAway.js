function isOneAway(str1, str2) {
  if(Math.abs(str1.length - str2.length) > 1) return false
  let isEdited = false
  for(let i = 0, j = 0; i < str1.length && j < str1.length ; i++, j++) {
    if(str1[i] !== str2[j]) {
      if(isEdited) return false

    if(str1.length < str2.length) i--
    else if(str2.length < str1.length) j--
    isEdited = true
    }
  }
  return true
}

console.log(isOneAway("pale", "bake"))