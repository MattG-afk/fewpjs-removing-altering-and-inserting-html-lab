document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = 'Matt is the champion'

document.body.appendChild(newHeader)