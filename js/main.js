'Use strict'

/* array immagini */
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let itemsContent = '';
let active = 0;

const sliders = document.querySelector('.sliders');

/* creo ciclo per immagini */
for(let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt="img1"></div>`
}

/* operazione per mostrare le immagini */
sliders.innerHTML += itemsContent;
document.querySelector('.item').classList.add('show');

/* aggiungo variabili per i pulsanti */
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const items = document.querySelectorAll('.item');

/* click al bottone down */
down.addEventListener('click', function(){

    if(active < items.length - 1){
        console.log('stiamo aumentando')
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
})

/* click al bottone up */
up.addEventListener('click', function() {

    if(active > 0){
        console.log('stiamo diminuendo')
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
})