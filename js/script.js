


const menu = document.getElementById('menu');
let toggle = false;

const  hendleToggle = () => {
    if(toggle === false) {
        menu.style.transform = 'translate(0%)';
        toggle = true
    } else if(toggle === true) {
        menu.style.transform = 'translate(-100%)';
        toggle = false
    }
}

