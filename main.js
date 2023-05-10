let str = " hello  world      "

str = str.trim().toLowerCase()

str = str.replace(/\s+/g, "");

    let charMap = {}

function mostCommonChar() {


    for (let i = 0; i < str.length; i++) {
        charMap[str[i]] = charMap[str[i]] + 1 || 1
  }
}

mostCommonChar()

console.log(charMap)

let wordCountText = "Please count the words properly"
let wordCounter = 1
const wordCount = () => {
  for (let j = 0; j < wordCountText.length; j++){
    if (wordCountText[j] === " "){
      wordCounter++
    }
  }

}
  wordCount()
  console.log(wordCounter)

