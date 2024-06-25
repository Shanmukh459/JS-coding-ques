function URLify(str, l) {
  str = str.trim().slice(0, l)
  str = str.split(" ").join("%20")
  return str
}

console.log(URLify("  Hello world!   ", 12))