var slides = document.querySelectorAll(".slide");
        var btns = document.querySelectorAll(".btn");
        let currentSlide = 1;

        // javascript for image slider manual navigation
        var manualNav = function(manual){
            slides.forEach((slide) => {
                slide.classList.remove("active");

                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });
            });

            slides[manual].classList.add("active");
            btns[manual].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualNav(i);
                currentSlide = i;
            });
        });

        // javascript for image silder autoplay navigation
        var repeat = function(activeClass){
            let active = document.getElementsByClassName("active");
            let i = 1;

            var repeater = () => {
                setTimeout(function(){
                    [...active].forEach((activeSlide) => {
                        activeSlide.classList.remove("active");
                    });

                    slides[i].classList.add("active");
                    btns[i].classList.add("active");
                    i++;

                    if(slides.length == i){
                        i = 0;
                    }
                    if(i >= slides.length){
                        return;
                    }
                    repeater();
                }, 10000);
            }
            repeater();
        }
        repeat();





       // Get the modal
var modall = document.getElementById("myModall");

// Get the button that opens the modal
var bttn = document.getElementById("myBttn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closse")[0];

// When the user clicks the button, open the modal 
bttn.onclick = function() {
  modall.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}


/* Scroll top */
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
}) 









