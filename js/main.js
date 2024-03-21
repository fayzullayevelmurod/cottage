let swiper = new Swiper(".cardsSwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".card-button-next",
    prevEl: ".card-button-prev",
  },
});

let swiper2 = new Swiper(".commentSwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
});

let swiper3 = new Swiper(".gallerySwiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
});


// accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
   });
});
// accordion