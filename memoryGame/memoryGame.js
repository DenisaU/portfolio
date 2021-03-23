class MemoryGame {
    constructor(p_id, p_path, p_isTurned) {
        this.id = p_id;
        this.path = p_path;
        this.isTurned = p_isTurned;
    }
}

let pictures = [
    { id: uuidv4(), path: "assets/Polonnaruwa.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/adamsPeak.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/adamsPeak.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/skeleton.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/Polonnaruwa.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/skeleton.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/beach.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/bus.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/Galle.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/beach.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/Galle.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/park2.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/bus.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/park2.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/park3.JPG", isTurned: false },
    { id: uuidv4(), path: "assets/park3.JPG", isTurned: false },
];

//------------------------Make Playfield-------------------------------
function playFieldID() {

    let makePlayField = [];
    for (i = 0; i < pictures.length; i++) {
        makePlayField.push(`<img src="assets/memoryGamePage.jpg" id="frontImg${pictures[i].id}" onclick="turnPicture('${pictures[i].id}')">`);
        document.getElementById("playField").innerHTML = makePlayField.join("");
    }
}

window.onload = function () {
    playFieldID();
};
//------------------------End of Make Playfield-----------------------

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


//------------------------Turning Card-------------------------------------
let turnCounter = 0  ;  //max value is 2 - you can turn just 2 cards
let score = 0;
function turnPicture(id) {

    let paths = [];
    for (let i = 0; i < pictures.length; i++) {
        if (pictures[i].id === id && turnCounter < 2) {
            document.getElementById(`frontImg${pictures[i].id}`).src = pictures[i].path;
            if (pictures[i].isTurned === true) {
                return;
            } else {
                turnCounter++;
                pictures[i].isTurned = true;

            }
        }

        if (pictures[i].isTurned === true) {    //Add 2 cards in array to check if paths match
            paths.push(pictures[i].path);
        }
    }

    if (paths[0] === paths[1]) {       //Check if cards match - paths must be same
        if (turnCounter = 2) {
            score++;
            document.getElementById("scoreNumber").innerHTML = score;
        }
        for (let i = 0; i < pictures.length; i++) {   //changes isTurned property from true to "done"
            if (pictures[i].path === paths[1]) {
                pictures[i].isTurned = "done";
            }
        }
        turnCounter = 0; 
        return;
    }

    if (turnCounter < 2) {
        return;
    }

    setTimeout(wait,1000);    //Waits 1 second before turning unmatched cards back

}

//---------End of Turning Card----------------------------------------------


//---------If cards do not match they are turned back after 1 second--------
function wait() {

    for (let i = 0; i < pictures.length; i++) {
        if (pictures[i].isTurned === "done") {

        } else {
            pictures[i].isTurned = false;
            document.getElementById('frontImg' + pictures[i].id).src = "assets/memoryGamePage.jpg";
        }

    } turnCounter = 0;

}
//---------End of If cards do not match they are turned back after 1 second--




