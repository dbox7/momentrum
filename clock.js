const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const options =  { 
        hour: '2-digit', 
        minute: '2-digit' };
    clockTitle.innerHTML = `${date.toLocaleTimeString(navigator.language, options)}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();