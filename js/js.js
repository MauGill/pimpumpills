
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

/*                                                      Carousel scroll */
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 4,
      draggable: true,
      arrows: {
          prev:'.glider-prev',
          next:'.glider-next'
      },
      dots:'dots'
    })
  })
/*                                                      Back to top btn */
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction ( ) {
    if (window.pageYOffset > 300) { //Show btn

        if(!topBtn.classList.contains("btnEntrance")) {
            topBtn.classList.remove("btnExit");
            topBtn.classList.add("btnEntrance");
            topBtn.style.display = "block";
          }
        
    } else { // Hide btn

        if(topBtn.classList.contains("btnEntrance")) {
            topBtn.classList.remove("btnEntrance");
            topBtn.classList.add("btnExit");
            setTimeout(function() {
              topBtn.style.display = "none";
            }, 250);
          }
        }
      }
topBtn.addEventListener("click", backToTop);

function backToTop() {
        const targetPosition = 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 750;
        let start = null;
        
        window.requestAnimationFrame(step);
      
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        }
      }    
      function easeInOutCubic(t, b, c, d) {
          t /= d/2;
          if (t < 1) return c/2*t*t*t + b;
          t -= 2;
          return c/2*(t*t*t + 2) + b;
      };  