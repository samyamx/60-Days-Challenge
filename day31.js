const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const total = document.getElementById("total");
const completed = document.getElementById("completed");
const remaining = document.getElementById("remaining");

function updateStats() {
    const tasks = document.querySelectorAll("#taskList li");

    const completedTasks =
        document.querySelectorAll("#taskList li.completed");

    total.textContent = tasks.length;
    completed.textContent = completedTasks.length;
    remaining.textContent =
        tasks.length - completedTasks.length;
}

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Completed";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const actions = document.createElement("div");
    actions.append(checkBtn, deleteBtn);

    li.append(span, actions);

    taskList.appendChild(li);

    taskInput.value = "";

    updateStats();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addTask();
    }

});

taskList.addEventListener("click", function(e){

    if(e.target.textContent === "Delete"){

        e.target.closest("li").remove();

    }

    if(e.target.textContent === "Completed"){

        e.target
            .closest("li")
            .classList.toggle("completed");

    }

    updateStats();

});