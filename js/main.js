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
