// CONTACT
function openContact() {
  document.getElementById("menu").style.height = "100%";
}

function closeContact() {
  document.getElementById("menu").style.height = "0";
}


// ci-dessous carousel

// automatic carousel + dots
let slideIndex = 0;
showSlides();

function showSlides(){
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dots");
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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