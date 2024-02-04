
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



// PORTFOLIO SECTION
//select cataegory variables
const selectCategory = document.querySelector("[data-select]");
const selectCategoryItems = document.querySelectorAll("[data-select-item]");
const selectCategoryValue = document.querySelector("[data-select-value]");


selectCategory.addEventListener("click", function() {toggleElFunction(this); });

// Add the eventListener for the select Category Items

for(let i = 0; i < selectCategoryItems.length; i++){
    selectCategoryItems[i].addEventListener("click", function(){

        let selectedCategoryValue = this.innerText.toLowerCase();
        selectCategoryValue.innerText = this.innerText;
        toggleElFunction(selectCategory);
        filterFunction(selectedCategoryValue);


    });
}

// Variables for filter
// filter variables for cataegory items that are selected in dropdown list
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunction = function (selectedCategoryValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedCategoryValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedCategoryValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// adding an eventListener in all the filter button items for large screen access/view
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedCategoryValue = this.innerText.toLowerCase();
//     selectedCategoryValue.innerText = this.innerText;
//     filterFunction(selectedCategoryValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }


// CONTACT FORM SECTION
//Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// adding an eventlistener to all contact form input fields
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function() {

    //This is to add the validation for the form
    if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
    } else {
        formBtn.setAttribute("disabled", "");
    }

  });
} 


// NAVIGATING THROUGH THE PAGES
const myNavLinks = document.querySelectorAll("[data-nav-link]");
const webPortfolioPages = document.querySelectorAll("[data-page]");

// adding the eventListener to all the nav links
for (let i = 0; i < myNavLinks.length; i++) {
    myNavLinks[i].addEventListener("click", function () {

    for (let i = 0; i < webPortfolioPages.length; i++) {
      if (this.innerHTML.toLowerCase() === webPortfolioPages[i].dataset.page) {
        webPortfolioPages[i].classList.add("active");
        myNavLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        webPortfolioPages[i].classList.remove("active");
        myNavLinks[i].classList.remove("active");
      }
    }

  });
}