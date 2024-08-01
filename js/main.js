"use strict";

const openBarBtn = document.querySelector(".bars");
const closeBarBtn = document.querySelector(".close");
const listLink = document.querySelector("ul.links");

openBarBtn.addEventListener("click", function () {
  listLink.classList.add("active");
});

closeBarBtn.addEventListener("click", function () {
  listLink.classList.remove("active");
});

// GSAP CODE

const myText = new SplitType("#reveal");
console.log(myText);
gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.5
})

