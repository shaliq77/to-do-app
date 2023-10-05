//js code toDO App

var listOfActivities = [];

// create an named list to store our to-do activities

var input = document.getElementById("input");

//create a DOM variable named input to get the to-do activities added from HTML form

var todolist = document.getElementById("todolist");

//Create a DOM variable todolist ul tag (unordered list)
document.getElementById("button").onclick = click;

//using onclick to run the button 

// Adding a to-do activity
function click() {
    //function ->click

    listOfActivities.push(input.value);
    console.log(listOfActivities);
    //adding push array opperation
    input.value = "";
    // Calling a funtion showlist () to display activities
    showlist();
}

//Function -> showlist()

function showlist() {
    //using innerHTML property

    todolist.innerHTML =" ";
    //to display each to-do activities
    listOfActivities.forEach(function (n,i){
        todolist.innerHTML +=
        "<li>"+
    n +
    "<a onclick='editItem("+
    i+
    ")'>Edit</a>"+
    "<a onclick='deleteItem("+
     i+
    ")'>&times | </a></li>";
    });
}
//deleting an activity
function deleteItem(i) {
    //using prompt to get knew value 
    listOfActivities.splice(i,1);

    showlist();
}
function editItem(i) {
    //using prompt to get knew value 
    var newValue = prompt("please insert your new value");

    listOfActivities.splice(i,1, newValue);

    showlist();
}