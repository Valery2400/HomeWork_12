function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Введите задание!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.onclick = function() {
        toggleTaskCompletion(this);
    };

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle("completed");
}