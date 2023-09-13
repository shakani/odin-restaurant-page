// imports
import './styles.css';
import deli from './assets/deli.jpg';
import { homepage } from './homepage';
import { menu } from './menu';


let content = document.createElement('div');
content.id = "content";
document.body.appendChild(content);

// Background image
let backgroundImage = new Image();
backgroundImage.classList.add('background-image');
backgroundImage.src = deli;

content.appendChild(backgroundImage);

// Header
let header = document.createElement('div');
header.classList.add('header');

let headerText = document.createElement('h1');
headerText.textContent = 'Fuhgettaboutit';

let navBar = document.createElement('nav');
let navLinks = ['Home', 'Menu', 'Contact'];
let navFunctions = [homepage, menu, homepage]; // methods to change pages
for(let i = 0; i < navLinks.length; i++) {
    let btn = document.createElement('button');
    btn.classList.add(`page-${i}`);
    btn.textContent = navLinks[i];
    btn.addEventListener('click', navFunctions[i]);
    navBar.appendChild(btn);
}

header.appendChild(headerText);
header.appendChild(navBar);
content.appendChild(header);

// Canvas
let canvas = document.createElement('div');
canvas.id = 'canvas';
canvas.textContent = 'Canvas';
content.appendChild(canvas);

// Footer
let footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = 'Copyright \xA9 2023 ';

let githubLink = document.createElement('a');
githubLink.textContent = 'shakani';
githubLink.href = 'https://github.com/shakani/';
footer.appendChild(githubLink);

// copyright symbol needs unicode escape!

content.appendChild(footer);
homepage();