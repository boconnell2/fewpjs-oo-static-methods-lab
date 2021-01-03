class Formatter {
  //add static methods here 
  static capitalize(string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1)
    return newString
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let stringArray = string.split(' ')
    let modifiedString = ''
    let counter = 0
    let dontCapitalize = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArray.forEach((word) => {
      if (counter = 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      } else if (!dontCapitalize.includes(word)) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      modifiedString += (word + ' ')
      counter++
    })
    return modifiedString.slice(0,-1)
  }
}