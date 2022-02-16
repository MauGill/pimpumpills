/*                                                      Toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
const car = document.querySelector(".car")
navToggler.addEventListener("click", toggleNav);

function toggleNav (){
    navToggler.classList.toggle("active")
    car.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");

}