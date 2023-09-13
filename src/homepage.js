// content = document.querySelector('#content');
function homepage() {
    console.log('running homepage');
    let canvas = document.querySelector('#canvas');
    canvas.textContent = '';

    canvas.classList.toggle('homepage');

    let motto = document.createElement('p');
    let catchphrase = document.createElement('p');
    motto.textContent = 'Worst deli in your neighborhood';
    catchphrase.textContent = '"If you don\'t like it, then get out!" (est. 1921)';

    canvas.appendChild(motto);
    canvas.appendChild(catchphrase);
}

export {homepage};