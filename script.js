// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add Task
function addTask() {

    const input = document.getElementById("taskInput");

    if (!input) return;

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskText);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    displayPreview();

    alert("Task Added Successfully!");
}

// Display preview on home page
function displayPreview() {

    const previewList = document.getElementById("previewList");

    if (!previewList) return;

    previewList.innerHTML = "";

    tasks.slice(0, 5).forEach(task => {

        const li = document.createElement("li");

        li.textContent = task;

        previewList.appendChild(li);
    });
}

// Display all tasks on tasks page
function displayTasks() {

    const taskList = document.getElementById("taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
    ${task}
    <button class="delete-btn" onclick="deleteTask(${index})">
        Delete
    </button>
    `;

        taskList.appendChild(li);
    });
}

// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    displayPreview();
}

// Run functions
displayPreview();
displayTasks();