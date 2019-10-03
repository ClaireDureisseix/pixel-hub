// MENU mobile
const openMenu = () => {
  document.getElementById("menu").style.height = "40%";
};

const closeMenu = () => {
  document.getElementById("menu").style.height = "0";
};

// Hide and show on click button MENU mobile

const showOffButton = document.getElementById("contactBtnJs"); 
const toggleShowOffButton = () => {
  showOffButton.style.display = "none";
};
showOffButton.addEventListener("click", () => toggleShowOffButton());

document.getElementById("closebtnID").addEventListener("click", showOnButton);

function showOnButton() {
  document.getElementsByClassName((contactBtnJs.style.display = "block"));
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
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

//  Authentification
const logInModalBtn = document.getElementById("logInModalBtn");
const logInText = document.getElementById("logInText");
const logInModal = document.getElementById("logInModal");
const logInModalBody = document.getElementById("logInModalBody");
const logInModalFooter = document.getElementById("logInModalFooter");
const closeBtnModal = document.getElementById("closeBtnModal");
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userMail = document.getElementById("userMail");
const logInBtn = document.getElementById("logInBtn");
const toast = document.getElementById("toast");

const toggleLogInModal = () => {
  logInModal.classList.toggle("login-show-modal");
};

const showToast = () =>{
  toast.classList.add("show");
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

const logInSucceed = () => {
  let name = userFirstName.value;
  let lastName = userLastName.value;
  let mail = userMail.value;
  if (name.length > 0 && mail.length > 0 && lastName.length > 0) {
    toggleLogInModal();
    showToast();
    logInText.innerHTML = ` ${name}`;
    userFirstName.value = "";
    userLastName.value = "";
    userMail.value = "";
  } else {
    alert("All the fields must be filled.");
  }
  logInModalBody.innerHTML = "You are already logged in. Congratulations";
  logInModalFooter.innerHTML = "";
};

logInModalBtn.addEventListener('click', toggleLogInModal)
logInBtn.addEventListener('click', logInSucceed)
closeBtnModal.addEventListener('click', toggleLogInModal)

// Cards appearing effect + concept appearing effect
const screenPosition = window.innerHeight / 2;

scrollCardsAppear = () => {
  const cardPartners = document.querySelector(".card-container");
  const cardPosition = cardPartners.getBoundingClientRect().top;
  if (cardPosition < screenPosition) {
    cardPartners.classList.add("card-appear");
  }
};

scrollConceptAppear = () => {
  const conceptBlock = document.querySelector(".about-container");
  const conceptPosition = conceptBlock.getBoundingClientRect().top;
  if (conceptPosition < screenPosition) {
    conceptBlock.classList.add("about-appear");
  }
};

window.addEventListener("scroll", scrollConceptAppear);
window.addEventListener("scroll", scrollCardsAppear);
window.addEventListener("scroll", scrollCardsAppear);


// top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}