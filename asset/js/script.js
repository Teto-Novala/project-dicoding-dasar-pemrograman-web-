// nav opacity 
window.onscroll = function() {
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    const scrollNav = header.offsetTop;

    if(window.scrollY > scrollNav) {
        nav.classList.add('nav-blur');
    } else {
        nav.classList.remove('nav-blur');
    }
}


// hamburger button
const Hamburger = document.querySelector('.button');
const ul = document.querySelector('nav ul')

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburgerActive');
    ul.classList.toggle('active');
    ul.classList.toggle('ulAnimasi');
})
