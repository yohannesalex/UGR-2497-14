let nav = document.querySelector('.mobile__nav');
let closed = document.querySelector(".header__closed");
let menuIcon = document.querySelector(".header__menu");
menuIcon.addEventListener("click", function () {
        nav.style.display = "flex";
        menuIcon.classList.add("header__closed");
        closed.style.display="block";})
closed.addEventListener("click",function(){
     
        nav.style.display = "none";
        menuIcon.classList.remove("header__closed");
        closed.style.display="none"; 
})
nav.addEventListener("click",function(){
    nav.style.display = "none";
        menuIcon.classList.remove("header__closed");
        closed.style.display="none";
})


