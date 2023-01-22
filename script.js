//your code here
let txt = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

txt.addEventListener("input" , caclLength)

function caclLength() {
    let word = txt.value;
    let wordLength = word.length;
    count.innerHTML = wordLength
}
