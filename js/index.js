// CONTACT
function openContact() {
  document.getElementById("menu").style.height = "40%";
}

function closeContact() {
  document.getElementById("menu").style.height = "0";
}

// Add active class to the current button (display none)
var btnContainer = document.getElementById("contactBtn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// remove active class to the current button (display block)
var btnContainer = document.getElementById("menu");
var btns2 = btnContainer.getElementsByClassName("closebtn");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += "";
  });
}


// ci-dessous carousel

// automatic carousel + dots
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
// manual carousel



/*automatic carousel ok

let slideIndex = 0;
showSlides();

function showSlides(){
  const slides = document.querySelectorAll(".slides");
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
*/