"use strict";

let vorname = "rene";
document.querySelector('h1').textContent = `Todos von ${vorname}`;

// sucht alle li mit Klasse 'done'
document.querySelector('li')[1].classList.add('done');

const newTask = document.createElement('li');

newTask.textContent = "Auto reparieren";
document.getElementById('todoList').appendChild(newTask);
const firstTask = document.querySelector('li');
firstTask.remove(`Einkaufen`);
newTask.style.backgroundColor = 'red';

document.getElementById('Auto reparieren').style.backgroundColor = 'red';
