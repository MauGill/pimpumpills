/*                                                      Toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
const car = document.querySelector(".car")
navToggler.addEventListener("click", toggleNav);

function toggleNav (){
    navToggler.classList.toggle("active")
    car.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open")
    document.querySelector(".navbar").classList.add("sticky");

    

}

/*                                                      close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
})
/*                                                      Sticky header */
window.addEventListener("scroll", function(){
    if(this.pageYOffset > 1) {
        document.querySelector(".navbar").classList.add("sticky");
    } else {
        document.querySelector(".navbar").classList.remove("sticky");
    }
    if(this.pageYOffset <= 0) {
        document.querySelector(".nav").classList.remove("open")
        document.querySelector(".nav-toggler").classList.remove("active")
        document.querySelector(".car").classList.remove("active")
    }
})
/*                                                      Animations on scroll */
window.addEventListener("load", function(){
    AOS.init()
})