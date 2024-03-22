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

let header_btn = document.querySelectorAll('.header_btn')
let main_modal = document.querySelector('.main_modal')
let modal_bg = document.querySelector('.modal_bg')

header_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    main_modal.classList.add('active')
    modal_bg.classList.add('active')
  })
})

modal_bg.addEventListener('click', () => {
  main_modal.classList.remove('active')
  modal_bg.classList.remove('active')
})


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
