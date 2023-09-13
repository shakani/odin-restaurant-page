// Imports
import chef from './assets/chef.jpg'

function menu() {
    let canvas = document.querySelector('#canvas');
    canvas.classList.remove('homepage');
    canvas.classList.remove('contact');
    canvas.classList.add('menu');

    // console.log(canvas.firstChild);
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    let menuItems = ['Reuben', 'Classic', 'Hot & Red', 'Beastwich', 'Wetsider', 'Godmother', 'Italiano', 'Melty', 'Noo Yoiker', 'Olympia', 'American', 'Big Stack', 'Chicken Club', 'Supawich'];
    for(let i = 0; i < menuItems.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `card ${i}`;

        canvas.appendChild(card);
    }
}

export {menu}; 