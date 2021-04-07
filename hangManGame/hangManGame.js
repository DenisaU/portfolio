class HangMan {
    constructor(p_word) {
        this.word = p_word;
    }
}

let hangManWords = [
    { word: 'interdependence' },
    { word: 'congratulations' },
    { word: 'thermochemistry' },
    { word: 'syllabification' },
    { word: 'achondroplastic' },
    { word: 'acclimatization' },
    { word: 'methamphetamine' },
    { word: 'interdependence' },
    { word: 'unprepossessing' },
    { word: 'confidentiality' },
];

let shownArray = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_'];
let randomWord = '';

//------------Start Game button------------------------
function startGame() {
    nextWord();
}

let hangManCount = 1;

//------------Check button------------------------------
function check() {

    if (randomWord.includes(document.getElementById("textArea").value)) {

        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === document.getElementById("textArea").value) {
                shownArray.splice(i, 1, document.getElementById("textArea").value);
                if (shownArray.includes('_') === false) {
                    alert('Congratulation!');
                }
            }
        }
    }

    if (randomWord.includes(document.getElementById("textArea").value) === false && hangManCount <= 11) {
        document.getElementById("picture").innerHTML = `<img src="assets\\hangMan${hangManCount++}.png">`;

        if (hangManCount === 12) {
            setTimeout(function () { alert("Try it next time"); }, 300);
        }
    }

    document.getElementById("shownArray").innerHTML = shownArray.join('');
    document.getElementById("textArea").value = "";

}
//------------End of Check button-------------------------

//------------Check button on key ENTER-------------------
window.onkeydown = function checkEnter(event) {

    if (event.keyCode == "13") {
        check();
        return false;
    }
};
//------------End of Check button on key ENTER--------------

//------------New word button-------------------------------
function nextWord() {

    shownArray = ['_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_ ', '_'];
    refreshPage();
    var randomNumber = Math.floor(Math.random() * (hangManWords.length));
    randomWord = hangManWords[randomNumber].word;
    hangManCount = 1;
    console.log(randomWord)

}
//------------End of New word button-------------------------

//---Function to help refreash the page after new word is loaded---
function refreshPage() {

    let playField = `<h1>Can you guess the word?</h1><textarea placeholder="Write character here" maxlength="1" id="textArea"></textarea><br><button onclick="check()">Check my Character</button><br><br><div id="shownArray">${shownArray.join('')}</div><br><br><button id="nextWordButton" onclick="nextWord()">New Word</button><div id="picture"></div>`;
    document.getElementById('playField').innerHTML = playField;
}