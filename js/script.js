"use strict";

// variable deklarieren rene
let vorname = "rene";

// Template Strings die Variable vorname ein: "Todos von (vorname)
document.querySelector('h1').textContent = `Todos von ${vorname}`;

//zweite listenelement soll durch Hinzufügen einer CSS-klasse .done durchgestrichen werden.
document.querySelectorAll('li')[1].classList.add('done');


// neues <li>-Element.
var neuesElement = document.createElement('li');
neuesElement.textContent = "Auto waschen";

// am Ende der Liste das Listenelement hinzufühgen 
document.querySelector('ul').appendChild(neuesElement);

// erste Element löschen <li>Einkaufen</li>
var erstesElement = document.querySelector('li');
erstesElement.parentNode.removeChild(erstesElement);

// Hintergrundfarbe auf rot
neuesElement.style.backgroundColor = "red";
