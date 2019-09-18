// CONTACT
function openContact() {
  document.getElementById("menu").style.height = "100%";
}

function closeContact() {
  document.getElementById("menu").style.height = "0";
}


// ci-dessous carousel

let slideIndex = 0;
showSlides();

function showSlides(){
  let i = 0;
  const slides = document.querySelectorAll(".slides");
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex - 1 < slides.length){
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000)
  }else{
    slideIndex = 0
    setTimeout(showSlides, 0);
  }
}

