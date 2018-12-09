const slika = document.getElementById('slika');
const prethodna = document.getElementById('prethodna');
const naredna = document.getElementById('naredna');

const niz = ["1.jpg" ,"2.jpg" ,"3.jpg" ,"4.jpg" ,"5.jpg" ];

let index = 0;

function promeniSliku(){
    index++;
    if(index >= niz.length) {
        index = 0;
    }
    slika.src = niz[index];
};

/* sledeca.addEventListener('click', promeniSliku);

prethodna.addEventListener('click', function(){
    if(index > 0) {
        index--;
    }
    slika.src = niz[index];
}); */

setInterval(promeniSliku, 1000);

