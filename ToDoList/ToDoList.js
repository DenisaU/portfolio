class ToDo {
    constructor(p_id, p_task, p_isDone) {
        this.id = p_id;
        this.task = p_task;
        this.isDone = p_isDone
    }
}

var tasks = [];
//-----------------Submit Button-----------
function submit() {

    if (document.getElementById("task").value === ""){
        alert('You need to write a task first.')
        return
    }
    tasks.push({ id: tasks.length, task: document.getElementById("task").value, isDone: false })

    var myHTML = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isDone) {
            myHTML.push(`<tr><td id="taskTable" style="text-decoration: line-through">${tasks[i].task}</td><td><button id="doneUndone" onclick="done(${tasks[i].id})">Undone</button></td></tr>`)
        } else {

            myHTML.push(`<tr id="${tasks[i].id}"><td id="taskTable">${tasks[i].task}</td><td><button id="doneUndone" onclick="done(${tasks[i].id})">Done</button></td></tr>`)
        }
    }

    var finalHTML = `<table id="finalTable">${myHTML.join('')}</table>`
    document.getElementById("changeThis").innerHTML = finalHTML
    document.getElementById("task").value = ""
}
//-----------------End of Submit Button-----

//-----------------Done Button--------------
function done(id) {

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isDone = true
            document.getElementById(id).innerHTML = `<td id="taskTable" style="text-decoration: line-through">${tasks[i].task}</td><td><button id="doneUndone" onclick="undone(${tasks[i].id})">Undone</button></td>`
        }
    }
}
//-----------------End of Done Button--------

//-----------------Undone Button-------------
function undone(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].isDone = false
            document.getElementById(id).innerHTML = `<td id="taskTable">${tasks[i].task}</td><td><button id="doneUndone" onclick="done(${tasks[i].id})">Done</button></td>`
        }
    }
}
//-----------------End of Undone Button------
