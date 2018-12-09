/* const slike = document.getElementsByClassName('slika'); */
const prethodna = document.getElementById('prethodna');
const naredna = document.getElementById('sledeca');
const prva = document.getElementById('prvi');

prva.style.marginLeft = 0;


naredna.addEventListener('click', function(){
    if( parseInt(prva.style.marginLeft) < -500 * 3  )
    return
    prva.style.marginLeft = parseInt(prva.style.marginLeft) - 500 + 'px';
    console.log(parseInt(prva.style.marginLeft));
});

prethodna.addEventListener('click', function(){
    if( parseInt(prva.style.marginLeft) > -1)
    return
    prva.style.marginLeft = parseInt(prva.style.marginLeft) + 500 + 'px';
    console.log(parseInt(prva.style.marginLeft))
});


