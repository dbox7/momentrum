const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.toDoList');

const KEY_TASKS = 'Tasks';
let tasks = [];

function saveTasks() {
    localStorage.setItem(KEY_TASKS, JSON.stringify(tasks));
}

function deleteTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTasks = tasks.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    saveTasks();
}

function showTasks(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = tasks.length + 1;
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteTask);
    span.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const taskObject = {
        name: text,
        id: newId
    }
    tasks.push(taskObject);
    saveTasks();
}

function submitHandler(event) {
    event.preventDefault();
    const newTasks = toDoInput.value;
    showTasks(newTasks);
    toDoInput.value = '';
}

function loadTasks() {
    const loadedTasks = localStorage.getItem(KEY_TASKS);
    if (loadedTasks) {
        const parsedTasks = JSON.parse(loadedTasks);
        parsedTasks.forEach(function(task){
            showTasks(task.name);
        })
    }
}

function init() {
    loadTasks();
    toDoForm.addEventListener('submit', submitHandler)
}

init();