const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greetings = document.querySelector('h2');

const KEY_NAME = 'Name';
const SHOW_CLASS = 'showing';

function submitHandler(event) {
    event.preventDefault(); //перехватывает стандартное поведение события
    showGreetings(input.value);
    localStorage.setItem(KEY_NAME, input.value);
}

function showGreetings(text) {
    greetings.innerText = `Привет, ${text}!`;
    greetings.classList.add(SHOW_CLASS);
    form.classList.remove(SHOW_CLASS);
}

function getUserName() {
    form.classList.add(SHOW_CLASS);
    form.addEventListener('submit', submitHandler)
}

function loadUserName() {
    const userName = localStorage.getItem(KEY_NAME);
    if (userName) {
        showGreetings(userName);
    } else {
        getUserName();
    } 
}

function init() {
    loadUserName();
}

init();