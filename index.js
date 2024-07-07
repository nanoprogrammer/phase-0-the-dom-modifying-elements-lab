const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = "Hi";
newHeader.id = 'victory';
newHeader.innerHTML = 'Samson is the champion';