content = document.querySelector('#content');

// Background image
backgroundImage = document.createElement('img');
backgroundImage.classList.add('background-image')
backgroundImage.src = '../src/deli.jpg'

content.appendChild(backgroundImage);

// Header
header = document.createElement('div');
header.classList.add('header');

headerText = document.createElement('h1');
headerText.textContent = 'Fuhgettaboutit';

navBar = document.createElement('nav');
navLinks = ['Home', 'Menu', 'Contact'];
for(let i = 0; i < navLinks.length; i++) {
    btn = document.createElement('button');
    btn.classList.add(`page-${i}`);
    btn.textContent = navLinks[i];
    navBar.appendChild(btn);
}

header.appendChild(headerText);
header.appendChild(navBar);
content.appendChild(header);

// Canvas
canvas = document.createElement('div');
canvas.id = 'canvas';
canvas.textContent = 'Canvas';
content.appendChild(canvas);

// Footer
footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = 'Copyright \xA9 2023 ';

githubLink = document.createElement('a');
githubLink.textContent = 'shakani';
githubLink.href = 'https://github.com/shakani/';
footer.appendChild(githubLink);

// copyright symbol needs unicode escape!

content.appendChild(footer);