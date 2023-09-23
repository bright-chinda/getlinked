let hideAccordion = document.querySelectorAll(".faq-accordion-header");
let openAccordion = document.querySelectorAll(".faq-accordion-visible");
let topAccordionIcon = document.querySelectorAll(".faq-top-icon");
let bottomAccordionIcon = document.querySelectorAll(".faq-bottom-icon");
let menuBtn = document.querySelector(".menu-bar");
let menuNav = document.querySelector(".header-links");
let closeMenuIcon = document.querySelector(".close-menu-cont");
let openMenuIcon = document.querySelector(".open-menu-icon");
// let overlaypopup = document.querySelector(".overlay-popup")
let popupBtn = document.querySelector(".register-btn");
// let cancelpopup = document.querySelector(".back-btn")
let removeNave = document.querySelectorAll(".remove-nav");

for (let i = 0; i < removeNave.length; i++) {
  removeNave[i].addEventListener("click", function () {
    menuNav.classList.remove("nav-active");
  });
}

console.log(hideAccordion);
for (let i = 0; i < hideAccordion.length; i++) {
  hideAccordion[i].addEventListener("click", function () {
    openAccordion[i].classList.toggle("faqactive");
    if (openAccordion[i].classList.contains("faqactive")) {
      topAccordionIcon[i].style.display = "none";
      bottomAccordionIcon[i].style.display = "block";
    } else if (!openAccordion[i].classList.contains("faqactive")) {
      topAccordionIcon[i].style.display = "block";
      bottomAccordionIcon[i].style.display = "none";
    }
  });
}

menuBtn.addEventListener("click", function () {
  menuNav.classList.toggle("nav-active");
  if (menuNav.classList.contains("nav-active")) {
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
  } else if (!menuNav.classList.contains("nav-active")) {
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  }
});

// function popup(){
//     overlaypopup.classList.toggle ("active-popup")
// }
// cancelpopup.addEventListener("click",function(){
//     overlaypopup.classList.remove ("active-popup")
// })
