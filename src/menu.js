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

    let menuContents = {
        'Reuben': 'Traditional, turkey, or pastrami served grilled with kraut & swiss',
        'Classic': 'Roast beef, corned beef, turkey, slaw, 1000 island',
        'Hot & Red': 'Cajun roast beef, bbq chicken, pepper jack cheese, red pepper hummus',
        'Beastwich': 'Turkey, pepperoni, pepper jack cheese',
        'Westsider': 'Hot corned beef, hot pastrami, slaw, 1000 island',
        'Godmother': 'Salami, gabagool, prosecution, provolone cheese',
        'Italiano': 'Hickory turkey, salami, capicola, cheese',
        'Melty': 'Hot tuna or chicken salad, cheese',
        'Noo Yoiker': 'Hot corned beef, hot pastrami, swiss cheese',
        'Olympia': 'Ham, salami, bologna, capicola, turkey, pepperoni, provolone cheese',
        'American': 'Italiano topped off with hot water',
        'Big Stack': 'Jerk & blackened turkey, pork sausage, bacon, provolone, pepper jack, spicy mayo',
        'Chicken Club': 'Triple decker chicken, ham, bacon, & cheese',
        'Supawich': 'Turkey, feta cheese, greek mayo',
    };

    for(let i in menuContents) {
        let card = document.createElement('div');
        card.classList.add('card');
        // card.textContent = `card ${i}`;
        let menuTitle = document.createElement('div');
        menuTitle.classList.add('card-title');
        menuTitle.textContent = i;

        let menuContent = document.createElement('div');
        menuContent.classList.add('card-content');
        menuContent.textContent = menuContents[i];

        card.appendChild(menuTitle);
        card.appendChild(menuContent);

        canvas.appendChild(card);
    }
}

export {menu}; 