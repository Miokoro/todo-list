const entertask = document.getElementById("entertask");
const subBtn = document.getElementById("subBtn");
const label = document.getElementById("label");
const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const tasks = document.getElementById("tasks");

window.onload = function() {
    loadTasks();
};

function sub() {
    const taskText = entertask.value.trim();
    if (taskText === "") return;

    const taskList = JSON.parse(localStorage.getItem("tasks") || "[]");

    const taskId = Date.now().toString();

    const task = document.createElement("div");
    const taskBtn = document.createElement("button");
    task.id = taskId;
    taskBtn.id = "btn-" + taskId;
    task.classList.add("text");
    taskBtn.classList.add("taskButtons");
    taskBtn.textContent = "delete";
    task.textContent = taskText;

    taskBtn.onclick = () => del(taskId);

    tasks.appendChild(task);
    task.appendChild(taskBtn);

    taskList.push({ id: taskId, text: taskText });
    localStorage.setItem("tasks", JSON.stringify(taskList));

    entertask.value = "";
}

function loadTasks() {
    tasks.innerHTML = "";
    const taskList = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskList.forEach(taskObj => {
        const task = document.createElement("div");
        const taskBtn = document.createElement("button");
        task.id = taskObj.id;
        taskBtn.id = "btn-" + taskObj.id;
        task.classList.add("text");
        taskBtn.classList.add("taskButtons");
        taskBtn.textContent = "delete";
        task.textContent = taskObj.text;

        taskBtn.onclick = () => del(taskObj.id);

        tasks.appendChild(task);
        task.appendChild(taskBtn);
    });
}

function del(taskId) {
    let taskList = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    const task = document.getElementById(taskId);
    if (task) tasks.removeChild(task);
}

function darkM() {
    document.body.classList.add("darkMod");
}

function lightM() {
    document.body.classList.remove("darkMod");
}