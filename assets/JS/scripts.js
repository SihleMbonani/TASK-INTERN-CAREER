
//function that will toggle the elements in our navigtaion bar
const toggleElFunction = function (elem){
    elem.classList.toggle("active");
}

//our variables on our sidebar section
const sidebarVar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");


//the functionality of the sidebar toggle in mobile view
sidebarButton.addEventListener("click", function() {toggleElFunction(sidebarVar); });

// TESTIMONAL MODAL SECTION
// get the attribute for the testimonial item
const dataTestimonialItem = document.querySelectorAll("[data-testimonials-item]");
// modal section
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseButton = document.querySelector("[data-modal-close-btn]");
const  overlay = document.querySelector("[data-overlay]");

// My variables for modal
const modalImage = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// TOGGLE FINCTION FOR MODAL
const  toggleTestimonialModalFunction = function() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// MY CLICKEVENT FOR ALL THE MODAL BUTTON
// for-loop
for (let i=0;i<dataTestimonialItem.length;i++) {
    dataTestimonialItem[i].addEventListener("click",  function(){
        modalImage.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImage.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        // Call Function
        toggleTestimonialModalFunction();

    });
    //    let btn = dataTestimonialItem[i].querySelector("[data-btn]") ;
    //    btn.addEventListener("click" , () =>{
    //        let content = dataTestimonialItem[i].dataset;
    //        modalTitle.innerHTML = content.name;
    //        modalText.innerHTML = content.text;
    //        modalImage.src = content.image;
    //     }

}

//  CLOSE BUTTON EVENT LISTENER
modalCloseButton.addEventListener("click", toggleTestimonialModalFunction);
overlay.addEventListener("click", toggleTestimonialModalFunction);

