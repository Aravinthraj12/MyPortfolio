let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onlick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}