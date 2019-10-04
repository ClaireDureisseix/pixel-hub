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

const track = document.querySelector(".track_container");
const slides = Array.from(track.children);
const leftButton = document.querySelector(".button-left");
const rightButton = document.querySelector(".button-right");
const nav = document.querySelector(".carousel_nav");
const dots = Array.from(nav.children);


const amountToMove = slides[0].getBoundingClientRect().width;


slides.forEach((item, index) => {
  item.style.left = amountToMove * index + "px";
})

const moveClass = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
}

rightButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = nav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  moveClass(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot)


})

leftButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = nav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  moveClass(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot)
})

nav.addEventListener("click", e => {

  const targetDot = e.target.closest("button");

  if (!targetDot) return

  const currentDot = nav.querySelector(".current-slide");
  const currentSlide = track.querySelector(".current-slide");
  const dotIndex = dots.findIndex(dot => dot === targetDot);
  const jambon = slides[dotIndex];

  moveClass(track, currentSlide, jambon);

  updateDots(currentDot, targetDot);
})

// // first-one
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   const slides = document.querySelectorAll(".slides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000);
// }
// // first-one

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

const showToast = () => {
  toast.classList.add("show");
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
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