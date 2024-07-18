const addEventOnElement = function(element, type, callback){
    if(element.length>1){
        for(var i=0;i<element.length;i++){
            element[i].addEventListener(type,callback);
        }
    } else{
        element.addEventListener(type, callback);
    }
}

const navbarToggle = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleOfNavbar = function() {
    navbar.classList.toggle("active");
    navbarToggle.classList.toggle("active");
}

addEventOnElement(navbarToggle,"click",toggleOfNavbar);

const closeNavbar = function(){
    navbar.classList.remove("active");
    navbarToggle.classList.remove("active");
}

addEventOnElement(navbarLinks,"click",closeNavbar);


const header = document.querySelector("[data-header]");

const backToTopButton= document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function(){
    if(window.scrollY > 100){
        header.classList.add("active");
        backToTopButton.classList.add("active");
    } else{
        header.classList.remove("active");
        backToTopButton.classList.remove("active");
    }
}

addEventOnElement(window,"scroll",activeElementOnScroll);
