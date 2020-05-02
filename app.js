



// Current day is shown on the screen above schedule
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;


var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["12 PM - Learn HTML", "6 PM - Learn JavaScript"];

renderTodos();

function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");

        button.textContent = "Delete";


        li.appendChild(button);
        todoList.appendChild(li);
    }

}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";

    // Re-render the list
    renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function (event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("button") === true) {
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        // Re-render the list
        renderTodos();
    }
});













var currtime = document.getElementById("currtime");

function zeropadder(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function updateTime() {
    var timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds(),
        formatAMPM = (hh >= 12 ? 'PM' : 'AM');
    hh = hh % 12 || 12;

    currtime.innerHTML = hh + "<span>:</span>" + zeropadder(mm) + "<span>:</span>" + zeropadder(ss) + " " + formatAMPM;
    setTimeout(updateTime, 1000);

}

updateTime();




var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if (email && password === null) {
        return;
    }

    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
        displayMessage("error", "cannot be blank");
    } else {
        displayMessage("success", "My plan-1");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderLastRegistered();
    }
});


var currtime = document.getElementById("currtime");

function zeropadder(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function updateTime() {
    var timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds(),
        formatAMPM = (hh >= 12 ? 'PM' : 'AM');
    hh = hh % 12 || 12;

    currtime.innerHTML = hh + "<span>:</span>" + zeropadder(mm) + "<span>:</span>" + zeropadder(ss) + " " + formatAMPM;
    setTimeout(updateTime, 1000);

}

updateTime();
