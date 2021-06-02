let node = document.getElementById("main");
    node.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';