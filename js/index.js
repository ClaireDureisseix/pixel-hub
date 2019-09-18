// CONTACT
function openContact() {
  document.getElementById("menu").style.height = "100%";
}

function closeContact() {
  document.getElementById("menu").style.height = "0";
}


// ci-dessous carousel

// automatic carousel
let slideIndex = 0;
showSlides();

function showSlides(){
  const slides = document.querySelectorAll(".slides");
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1 /* pourquoi 1 plutôt que 0?*/
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
// manual carousel



