const services = document.getElementById("services-dropdown");

services.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent closing immediately
  this.classList.toggle("active"); // toggle open/close
});

// Close dropdown if clicking outside
document.addEventListener("click", function () {
  services.classList.remove("active");
});