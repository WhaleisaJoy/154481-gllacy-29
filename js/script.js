const sliderButtons = document.querySelectorAll(".slider-controls button");
const sliderContents = document.querySelectorAll(".slider-content");

const pageBody = document.querySelector(".page-body");
const contactsButton = document.querySelector(".contacts-button");
const overlay = document.querySelector(".overlay");
const overlayFeedback = document.querySelector(".overlay-feedback");
const modalFeedback = document.querySelector(".modal-feedback");
const modalFeedbackForm = document.querySelector(".modal-feedback-form");
const modalFeedbackUsername = document.querySelector(".modal-feedback-username");
const modalFeedbackEmail = document.querySelector(".modal-feedback-email");
const modalFeedbackText = document.querySelector(".modal-feedback-text");
const modalCloseButton = document.querySelector(".modal-close");
const modalFeedbackSubmitButton = document.querySelector(".modal-feedback .submit-button");

let isStorageSupport = true;

try{
	localStorage.getItem("username");
} catch (err){
	isStorageSupport = false;
}

//slider
if(sliderButtons){
	sliderButtons.forEach(function(elem, index){
		elem.addEventListener("click", function(evt){
			evt.preventDefault();

			sliderButtons.forEach( (elem) => {elem.classList.remove("current")} );
			sliderContents.forEach( (elem) => {elem.classList.remove("current")} );

			this.classList.add("current");
			sliderContents[index].classList.add("current");

			let pageBodyCurSliderContent = pageBody.getAttribute("class").match(/slider-content-\d/);
			let pageBodyClassMask = pageBodyCurSliderContent[0].substr(0, pageBodyCurSliderContent[0].length - 1);
			let pageBodyNewSliderContent = pageBodyClassMask + (parseInt(index) + 1);

			pageBody.classList.remove(pageBodyCurSliderContent[0]);
			pageBody.classList.add(pageBodyNewSliderContent);
		});
	});
}

// modal feedback
if (contactsButton) {

	contactsButton.addEventListener("click", function(evt){
		evt.preventDefault();
		pageBody.classList.add("scroll-hidden");
		overlayFeedback.classList.add("open");

		if(isStorageSupport){
			modalFeedbackUsername.value = localStorage.getItem("username");
			modalFeedbackEmail.value = localStorage.getItem("email");
			modalFeedbackText.focus();
		} else {
			modalFeedbackUsername.focus();
		}
	});

	modalCloseButton.addEventListener("click", function(evt){
		evt.preventDefault();
		closeFeedbackModal();
	});

	overlay.addEventListener("click", function(evt){
		if(evt.target.classList.contains("overlay") && evt.target.classList.contains("open"))
		{
			evt.preventDefault();
			closeFeedbackModal();
		}
	});

	window.addEventListener("keydown", function(evt){
		if(evt.key === "Escape" && overlayFeedback.classList.contains("open")){
			evt.preventDefault();
			closeFeedbackModal();
		}
	});

	modalFeedbackForm.addEventListener("submit", function(evt){
		if(!modalFeedbackUsername.value || !modalFeedbackEmail.value || !modalFeedbackText.value){
			evt.preventDefault();

			modalFeedback.classList.remove("modal-error");
			modalFeedback.offsetWidth = modalFeedback.offsetWidth;
			modalFeedback.classList.add("modal-error");
		} else {
			if(isStorageSupport){
				localStorage.setItem("username", modalFeedbackUsername.value);
				localStorage.setItem("email", modalFeedbackEmail.value);
			}
		}
	});

	window.addEventListener("keydown", function(evt){
		if(evt.key === "Tab" && overlayFeedback.classList.contains("open")){
			if(!evt.shiftKey && document.activeElement == modalFeedbackSubmitButton){
				evt.preventDefault();
				modalCloseButton.focus();
			} else if(evt.shiftKey && document.activeElement == modalFeedbackSubmitButton){
				evt.preventDefault();
				modalFeedbackSubmitButton.previousElementSibling.focus();
			} else if(evt.shiftKey && document.activeElement == modalCloseButton){
				evt.preventDefault();
				modalFeedbackSubmitButton.focus();
			}
		}
	});

	function closeFeedbackModal(){
		pageBody.classList.remove("scroll-hidden");
		overlay.classList.remove("open");
		modalFeedback.classList.remove("modal-error");
	}
}