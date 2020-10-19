// let menuCatalog = document.querySelector('.menu-catalog');
// let submenuCatalog = document.querySelector('.submenu-catalog');

let mainHeaderButton = document.querySelectorAll('.main-header-button');
let popupAll = document.querySelectorAll('.popup');

let pageBody = document.querySelector('.page-body');
let contactsButton = document.querySelector('.contacts-button');
let modalFeedback = document.querySelector('.overlay-feedback');
let modalCloseButton = document.querySelector('.modal-close');
let overlay = document.querySelector('.overlay');

// menuCatalog.addEventListener("mouseenter", function(){
//     this.classList.add('open');
//     // submenuCatalog.classList.toggle('open');
// });

// submenuCatalog.onmouseleave = function(){
//     // submenuCatalog.classList.toggle('open');
// }

// menuCatalog.onmouseleave = function(){
//     this.classList.remove('open');
//     // submenuCatalog.classList.toggle('open');
// }

/*menuCatalog.addEventListener("mouseenter", function(){
    menuCatalog.classList.add('open');
    submenuCatalog.classList.add('open');
});

submenuCatalog.addEventListener("mouseleave", function(){
    menuCatalog.classList.remove('open');
    submenuCatalog.classList.remove('open');
});*/

// main header button
mainHeaderButton.forEach(function(elem){
    elem.addEventListener("mouseover", function(){
        mainHeaderButton.forEach(function(elem){
            elem.classList.remove('open');
        });

        popupAll.forEach(function(elem){
            elem.classList.remove('open');
        });

        this.classList.add('open');
        let parentElem = this.parentNode;      
        let popup = parentElem.querySelector('.popup');
        popup.classList.add('open');   
    });
});

popupAll.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        let parentElem = this.parentNode;      
        let curButton = parentElem.querySelector('.main-header-button');
        curButton.classList.remove('open');

        this.classList.remove('open');
    });  
});

// modal feedback
contactsButton.addEventListener("click", function(evt){
    evt.preventDefault();
    pageBody.classList.add('scroll-hidden');
    modalFeedback.classList.add('open');
});

modalCloseButton.addEventListener("click", function(evt){
    evt.preventDefault();
    pageBody.classList.remove('scroll-hidden');
    overlay.classList.remove('open');
});

overlay.addEventListener("click", function(evt){
    if(evt.target.classList.contains('overlay') && evt.target.classList.contains('open'))
    {
        evt.preventDefault();
        pageBody.classList.remove('scroll-hidden');
        overlay.classList.remove('open');
    }
});

