var navToggle = document.querySelector('.bar');
var navMenu = document.querySelector('.menu');

navMenu.classList.remove('menu');

navToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('closed')) {
        navMenu.classList.remove('closed');
        navMenu.classList.add('opened');
    } else {
        navMenu.classList.add('closed');
        navMenu.classList.remove('opened');
    }
});