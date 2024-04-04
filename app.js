"use strict";
// hamburger
function menu() {
  const burgerButton = document.querySelector(".hamburger");
  const navbar = document.querySelector(".mobile_nav");
  const closeButton = document.querySelector(".close");

  burgerButton.addEventListener("click", () => {
    navbar.style.left = "0";
  });
  closeButton.addEventListener("click", () => {
    navbar.style.left = "-350px";
  });
}
menu();

// swiper responsive
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    449: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// scroll animation
ScrollReveal().reveal(".page1_top", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".header_nav", {
  delay: 100,
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal("#page_1", {
  duration: 200,
  delay: 200,
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal("main>section", {
  duration: 200,
  delay: 300,
  origin: "bottom",
  distance: "25px",
  opacity: 0,
});
ScrollReveal().reveal("footer", {
  duration: 200,
  delay: 200,
  origin: "bottom",
  distance: "25px",
  opacity: 0,
});


//cart register and login
const  LogButton=document.querySelectorAll('.rev__button');
if(LogButton){
  const authContainer= document.querySelectorAll(".auth_wrapper");
  LogButton.forEach(button=>{
    button.addEventListener('click',handleReverse.bind(this))
  })
  function handleReverse(e){
    e.preventDefault();
    authContainer.forEach(auth=>{
      auth.classList.toggle('hidden_form')
    })
  }
}
