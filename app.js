let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');
let itachi = document.getElementById('ita');
let kakashi = document.getElementById('kak');
let madara = document.getElementById('mad');
let naruto = document.getElementById('nar');
let sasuke = document.getElementById('sas');
var Imusic=document.querySelector("#imusic")
var Kmusic=document.querySelector("#kmusic")
var Mmusic=document.querySelector("#mmusic")
var Nmusic=document.querySelector("#nmusic")
var Smusic=document.querySelector("#smusic")

itachi.onclick = function(){
    Imusic.play();
}

kakashi.onclick = function(){
    Kmusic.play();
}

madara.onclick = function(){
    Mmusic.play();
}

naruto.onclick = function(){
    Nmusic.play();
}

sasuke.onclick = function(){
    Smusic.play();
}

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 45000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type == 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}