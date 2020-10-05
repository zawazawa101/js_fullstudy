function find (str) {
  let finda = false, findb = false
  for (let c of str) {
    if(c === 'a') {
      finda = true
    } else if(finda && c === 'b') {
      findb = true
    } else if(findb && c === 'c'){
      return true
    } else {
      finda = false
      findb = false
    }
  }
}