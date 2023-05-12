let str = document.getElementById("text").value

let wordCounter = 1

let charMap = {}

function mostCommonChar() {

  str = str.trim().toLowerCase()

  str = str.replace(/\s+/g, "");
  

    for (let i = 0; i < str.length; i++) {
        charMap[str[i]] = charMap[str[i]] + 1 || 1
  }
  document.getElementById("results").innerHTML= charMap
}



const wordCount = () => {
  for (let j = 0; j < str.length; j++){
    if (str[j] === " "){
      wordCounter++
    }
  }
  document.getElementById("results").innerHTML= "word count: " + wordCounter
}
