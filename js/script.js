document.addEventListener("DOMContentLoaded", function(){

/* =========================
   ПОИСК В СПИСКЕ ЛИТЕРАТУРЫ
========================= */

let search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();
let items = document.querySelectorAll("#list li");

items.forEach(function(item){

if(item.textContent.toLowerCase().indexOf(filter) > -1){
item.style.display = "";
}else{
item.style.display = "none";
}

});

});

}


/* =========================
   ПОДСВЕТКА АКТИВНОЙ СТРАНИЦЫ
========================= */

let links = document.querySelectorAll(".nav-link");
let current = window.location.pathname.split("/").pop();

links.forEach(function(link){

let href = link.getAttribute("href");

if(href === current){
link.classList.add("active");
}

});


/* =========================
   ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ
========================= */

let observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{ threshold:0.2 });

let elements = document.querySelectorAll("p, h1, h2, h3, img, .card, .ratio");

elements.forEach(function(el){
el.classList.add("hidden");
observer.observe(el);
});


/* =========================
   УМЕНЬШЕНИЕ NAVBAR ПРИ СКРОЛЛЕ
========================= */

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){
navbar.classList.add("navbar-scrolled");
}else{
navbar.classList.remove("navbar-scrolled");
}

});


/* =========================
   КНОПКА ВВЕРХ
========================= */

let btn = document.createElement("button");

btn.innerHTML = "↑";
btn.id = "scrollTopBtn";

document.body.appendChild(btn);

window.addEventListener("scroll", function(){

if(window.scrollY > 300){
btn.style.display = "block";
}else{
btn.style.display = "none";
}

});

btn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});


/* =========================
   ЭФФЕКТ НА КАРТИНКАХ
========================= */

let images = document.querySelectorAll("img");

images.forEach(function(img){

img.addEventListener("mouseenter", function(){
img.style.transform = "scale(1.05)";
img.style.transition = "0.3s";
});

img.addEventListener("mouseleave", function(){
img.style.transform = "scale(1)";
});

});


/* =========================
   ПЛАВНАЯ ПРОКРУТКА ЯКОРЕЙ
========================= */

let anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(function(anchor){

anchor.addEventListener("click", function(e){

e.preventDefault();

let block = document.querySelector(this.getAttribute("href"));

if(block){

block.scrollIntoView({
behavior:"smooth"
});

}

});

});


/* =========================
   АНИМАЦИЯ ВИДЕО
========================= */

let videos = document.querySelectorAll(".ratio");

videos.forEach(function(video){

video.addEventListener("mouseenter", function(){
video.style.transform = "scale(1.02)";
video.style.transition = "0.3s";
});

video.addEventListener("mouseleave", function(){
video.style.transform = "scale(1)";
});

});


/* =========================
   АНИМАЦИЯ КАРТОЧЕК
========================= */

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseenter", function(){

card.style.transform = "translateY(-8px)";
card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
card.style.transition = "0.3s";

});

card.addEventListener("mouseleave", function(){

card.style.transform = "translateY(0)";
card.style.boxShadow = "";

});

});


/* =========================
   ПЛАВНАЯ ЗАГРУЗКА СТРАНИЦЫ
========================= */

document.body.style.opacity = "0";

setTimeout(function(){
document.body.style.transition = "opacity 0.6s";
document.body.style.opacity = "1";
},100);

document.querySelectorAll('.video.youtube').forEach(video => {
        video.addEventListener('click', function(e) {
            // Предотвращаем всплытие события
            e.stopPropagation();
            
            const videoId = this.dataset.id;
            
            // Проверяем, не загружен ли уже iframe
            if (!this.querySelector('iframe')) {
                // Создаем iframe
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`);
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                
                // Очищаем содержимое и добавляем iframe
                this.innerHTML = '';
                this.appendChild(iframe);
            }
        });
    });
});
