// import
import chef from './assets/chef.jpg';

// content = document.querySelector('#content');
function homepage() {
    let canvas = document.querySelector('#canvas');
    canvas.textContent = '';

    canvas.classList.toggle('homepage');

    let motto = document.createElement('p');
    let catchphrase = document.createElement('p');
    motto.textContent = 'Best deli in your neighborhood';
    catchphrase.textContent = '"If you think there\'s a better one, fuhgettaboutit!" (est. 1921)';

    // let chefPic = document.createElement('img');
    // chefPic.classList.add('chefPic');
    // chefPic.src = '../src/chef.jpg';
    const chefPic = new Image();
    chefPic.src = chef;
    chefPic.classList.add('chefPic');

    canvas.appendChild(motto);
    canvas.appendChild(catchphrase);
    canvas.appendChild(chefPic);
}

export {homepage};