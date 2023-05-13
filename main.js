

function mostCommonChar() {
  let charMap = {}
  let str = document.getElementById("text").value
  str = str.trim().toLowerCase()

  str = str.replace(/\s+/g, "");
  

    for (let i = 0; i < str.length; i++) {
        charMap[str[i]] = charMap[str[i]] + 1 || 1
  }
    
  let json = JSON.stringify(charMap);
  json = json.replace(/[`~!@#$%^&*()_|+\-=?;'".<>\{}\[\]\\\/]/gi, '')


  document.getElementById("results1").innerText = json;

  wordCount()
}



const wordCount = () => {
   let wordCounter = 1
  let str = document.getElementById("text").value
  console.log(str)
  for (let j = 0; j < str.length; j++){
    if (str[j] === " "){
      wordCounter++
    }
  }
  document.getElementById("results").innerHTML= "word count: " + wordCounter
}
