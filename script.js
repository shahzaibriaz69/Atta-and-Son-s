"use strict";

// services dropdown (li has id "services-dropdown" and ul has class "dropdown-menu")
const services = document.getElementById("services-dropdown");

if (services) {
  services.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
}

document.addEventListener("click", function () {
  if (services) services.classList.remove("active");
});

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
// corrected selector: ul has class "dropdown-menu"
const servicesDropdown = document.querySelector(".dropdown-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Only attach if element exists (prevents runtime error)
if (servicesDropdown) {
  servicesDropdown.addEventListener("click", (e) => {
    // you may not want preventDefault for links inside the dropdown; keep if you do
    e.preventDefault();
    servicesDropdown.classList.toggle("active");
  });
}

// carousel buttons
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slide = document.querySelector(".slide");

if (next) {
  next.addEventListener("click", function () {
    const items = slide ? slide.querySelectorAll(".item") : [];
    if (!slide || items.length === 0) return;
    // move first item to end
    slide.appendChild(items[0]);
  });
}

if (prev) {
  prev.addEventListener("click", function () {
    const items = slide ? slide.querySelectorAll(".item") : [];
    if (!slide || items.length === 0) return;

    // move last item to front
    slide.prepend(items[items.length - 1]);
  });
}
