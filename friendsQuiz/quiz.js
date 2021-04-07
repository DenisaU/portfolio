class FriendsQuiz {

    constructor(p_id, p_question, p_answers) {
        this.id = p_id;
        this.question = p_question;
        this.answers = p_answers
    }
}

let friendsQuestions = [
    { id: uuidv4(), question: 'How many seasons of Friends are there?', name: "friendsQuizName_0", answers: [{ id: uuidv4(), option: 9, isCorrect: false }, { id: uuidv4(), option: 10, isCorrect: true }, { id: uuidv4(), option: 11, isCorrect: false }] },
    { id: uuidv4(), question: 'What year did Friends first start?', name: "friendsQuizName_1", answers: [{ id: uuidv4(), option: 1994, isCorrect: true }, { id: uuidv4(), option: 1995, isCorrect: false }, { id: uuidv4(), option: 1996, isCorrect: false }] },
    { id: uuidv4(), question: 'Rachel got a job with which company in Paris?', name: "friendsQuizName_2", answers: [{ id: uuidv4(), option: 'Bloomingdale\'s', isCorrect: false }, { id: uuidv4(), option: 'Hugo Boss', isCorrect: false }, { id: uuidv4(), option: 'Louis Vuitton', isCorrect: true }] },
    { id: uuidv4(), question: 'True or false, Rachel kissed all of her Friends (male and female) on the show?', name: "friendsQuizName_3", answers: [{ id: uuidv4(), option: 'True', isCorrect: true }, { id: uuidv4(), option: 'False', isCorrect: false }] },
    { id: uuidv4(), question: 'Who pees on Monica after she is stung by a jellyfish?', name: "friendsQuizName_4", answers: [{ id: uuidv4(), option: 'Joey', isCorrect: false }, { id: uuidv4(), option: 'Chandler', isCorrect: true }, { id: uuidv4(), option: 'Ross', isCorrect: false }] },
    { id: uuidv4(), question: 'Who is Joey’s agent?', name: "friendsQuizName_5", answers: [{ id: uuidv4(), option: 'Elle', isCorrect: false }, { id: uuidv4(), option: 'Esther', isCorrect: false }, { id: uuidv4(), option: 'Estelle', isCorrect: true }] },
    { id: uuidv4(), question: 'What was the name of the “hot girl from the Xerox place?', name: "friendsQuizName_6", answers: [{ id: uuidv4(), option: 'Claire', isCorrect: false }, { id: uuidv4(), option: 'Chloe', isCorrect: true }, { id: uuidv4(), option: 'Clara', isCorrect: false }] },
    { id: uuidv4(), question: 'Who is the first Friend to speak on the show?', name: "friendsQuizName_7", answers: [{ id: uuidv4(), option: 'Joey', isCorrect: false }, { id: uuidv4(), option: 'Chandler', isCorrect: false }, { id: uuidv4(), option: 'Monica', isCorrect: true }] },
    { id: uuidv4(), question: 'Who gave birth to Chandler and Monica’s twins?', name: "friendsQuizName_8", answers: [{ id: uuidv4(), option: 'Erica', isCorrect: true }, { id: uuidv4(), option: 'Elina', isCorrect: false }, { id: uuidv4(), option: 'Elianna', isCorrect: false }] },
    { id: uuidv4(), question: 'Chandler and Rachel ate cheesecake off the floor from what bakery?', name: "friendsQuizName_9", answers: [{ id: uuidv4(), option: 'Cakes, Cookies & Pies', isCorrect: false }, { id: uuidv4(), option: 'Sweet cakes', isCorrect: false }, { id: uuidv4(), option: 'Mama’s Little Bakery', isCorrect: true }] },
]

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


let myHTML = []
function startQuiz() {
    myHTML.push(`<h1>Show your Friends skills</h1>`)
    for (k = 0; k < friendsQuestions.length; k++) {

        myHTML.push(`<p id="question">${friendsQuestions[k].question}</p>`)

        for (let l = 0; l < friendsQuestions[k].answers.length; l++) {

            myHTML.push(`
             <input type="radio" id="${friendsQuestions[k].answers[l].id}" name="${friendsQuestions[k].name}">
             <label for="${friendsQuestions[k].answers[l].id}">${friendsQuestions[k].answers[l].option}</label><br>`)
        }
        myHTML.push(`</form><br><div id="${friendsQuestions[k].id}"> <button id="checkButton" onclick="Check('${friendsQuestions[k].id}')">Check</button></div>`)
    }
    
    myHTML.push(`score: <div id="score">${score}</div>`)
    document.getElementById("quizBody").innerHTML = myHTML.join('')
    
}


let score = 0
function Check(id) {

    for (k = 0; k < friendsQuestions.length; k++) {


        for (let l = 0; l < friendsQuestions[k].answers.length; l++) {

            if(document.getElementById(friendsQuestions[k].answers[l].id).checked === true && friendsQuestions[k].answers[l].isCorrect===true && id===friendsQuestions[k].id){
                score++
                document.getElementById(friendsQuestions[k].id).innerHTML='<button style="background-color:green; color:black; margin-left: 2%;" type="button" disabled>✓</button>'
                
            }
            if(document.getElementById(friendsQuestions[k].answers[l].id).checked === true && friendsQuestions[k].answers[l].isCorrect===false){
                document.getElementById(friendsQuestions[k].id).innerHTML='<button style="background-color:red; color:black; margin-left: 2%;" type="button" disabled>X</button>'
                
            }


        }
        
    }
    console.log(score)
    document.getElementById("score").innerHTML=score
}

