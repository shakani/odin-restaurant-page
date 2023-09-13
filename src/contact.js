// import
import addy from './assets/address.png';

function contact() {
    let canvas = document.querySelector('#canvas');
    canvas.classList.remove('homepage');
    canvas.classList.remove('menu');
    canvas.classList.add('contact');

    // console.log(canvas.firstChild);
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    let phone = document.createElement('p');
    let address = document.createElement('p');
    phone.textContent = '📞 123 456 7890';
    address.textContent = '🏠 2880 Broadway, New York, NY 10025';

    const mapPic = new Image();
    mapPic.src = addy;
    mapPic.classList.add('address');

    canvas.appendChild(phone);
    canvas.appendChild(address);
    canvas.appendChild(mapPic);
}

export {contact};