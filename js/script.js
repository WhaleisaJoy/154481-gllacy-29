const pageBody = document.querySelector('.page-body');
const contactsButton = document.querySelector('.contacts-button');
const modalFeedback = document.querySelector('.overlay-feedback');
const modalCloseButton = document.querySelector('.modal-close');
const overlay = document.querySelector('.overlay');

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

