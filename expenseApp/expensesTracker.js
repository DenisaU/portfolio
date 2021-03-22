class MyMoney {
    constructor(p_id, p_description, p_date, p_amount) {
        this.id = p_id;
        this.description = p_description;
        this.date = p_date;
        this.amount = p_amount;
    }
}


var expenses = [];  //Array of expenses


function generateHTML() {
    let myHTML = []
    let priceSummary = 0

    for (let i = 0; i < expenses.length; i++) {
        myHTML.push(`<tr id="${expenses[i].id}"><td id="description${i}">${expenses[i].description}</td><td id="date${i}">${expenses[i].date}</td><td id="amount${i}">${expenses[i].amount}</td><td><button id = "editButton" onclick="editButton('${expenses[i].id}')">Edit</button><button id="deleteButton" onclick="deleteButton('${expenses[i].id}')">Delete</button></td><tr>`)
        priceSummary = priceSummary + parseInt(expenses[i].amount)
    }

    document.getElementById("expensesTable").innerHTML = `<table id="expTable"><tr><th>Description</th><th>Date</th><th>Amount</th></tr>${myHTML.join("")}<tr><td></td><td>Total</td><td>${priceSummary}</table>`
    document.getElementById("description").value = ""
    document.getElementById("date").value = ""
    document.getElementById("amount").value = 0
}

//----------ADD EXPENSE BUTTON---------------
function addExpense(id) {
    
    let expDescription = document.getElementById("description").value
    let expDate = document.getElementById("date").value
    let expAmount = document.getElementById("amount").value

    //---ADD EXPENSE AFTER EDDIT-------
    for (i = 0; i < expenses.length; i++) {
       if(document.getElementById("hiddenID").innerHTML===expenses[i].id){
        id=expenses[i].id
        deleteButton(id)
       }
    }
    //---END OF ADD EXPENSE AFTER EDDIT--


    if (expDescription === "") {
        alert('Please enter the description.')
        return
    }
    if (expAmount < 0) {
        alert("The amount cannot be less than 0.")
        return
    }
    let expense = new MyMoney(uuidv4(), expDescription, expDate, expAmount)
    expenses.push(expense)


    generateHTML()
}
//----------END OF ADD EXPENSE BUTTON--------------------

//----------ADDING EXPENSE BY PRESSING ENTER-------------
window.onkeydown=function addExpenseEnter(event){
    if(event.keyCode=="13"){
        addExpense()
        return false
    }
}
//----------END OF ADDING EPENSE BY PRESSING ENTER------


//----------DELETE BUTTON--------------------------------
function deleteButton(id) {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === id) {
            id = i
            expenses.splice(id, 1)
        }
    }
    generateHTML()
}
//---------END OF DELETE BUTTON--------------------------


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//----------EDIT BUTTON----------------------------------
function editButton(id) {
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === id) {
            document.getElementById("description").value = document.getElementById("description" + i).innerHTML
            document.getElementById("date").value = document.getElementById("date" + i).innerHTML
            document.getElementById("amount").value = document.getElementById("amount" + i).innerHTML
            document.getElementById("hiddenID").innerHTML=expenses[i].id
        }
    }
}
//----------END OF EDIT BUTTON--------------------------









