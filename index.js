window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('header-scroll', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('.logo')
    

    if (scrollPosition > 0) {
        navLinks.forEach(function(link) {
            link.classList.add('scroll-black');
        });
    } else {
        navLinks.forEach(function(link) {
            link.classList.remove('scroll-black');
        });
    }
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('.navlist a')
    

    if (scrollPosition > 0) {
        navLinks.forEach(function(link) {
            link.classList.add('scroll-black');
        });
    } else {
        navLinks.forEach(function(link) {
            link.classList.remove('scroll-black');
        });
    }
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

var header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    var sticky = document.querySelector('.sticky');
    
});

