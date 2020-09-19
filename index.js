const main = document.getElementById("main");
main.remove()

/* Create your new element here and assign it to newHeader */

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerText = "Angela is the champion!";
document.body.appendChild(newHeader);
