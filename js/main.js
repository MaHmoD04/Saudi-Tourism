"use strict";

const openBarBtn = document.querySelector(".bars");
const closeBarBtn = document.querySelector(".close");
const listLink = document.querySelector("ul.links");
const header = document.querySelector("header");

const removeAcitve = function () {
  listLink.classList.remove("active");
};
const addAcitve = function () {
  listLink.classList.add("active");
};

openBarBtn.addEventListener("click", addAcitve);
closeBarBtn.addEventListener("click", removeAcitve);

// GSAP CODE

const myText = new SplitType("#reveal");
console.log(myText);
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.5,
});
