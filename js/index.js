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

//  Authentification
const logInModalBtn = document.getElementById('logInModalBtn');
const logInText = document.getElementById('logInText');
const logInModal = document.getElementById('logInModal');
const logInModalBody = document.getElementById('logInModalBody');
const logInModalFooter = document.getElementById('logInModalFooter');
const closeBtnModal = document.getElementById('closeBtnModal');
const userFirstName = document.getElementById('userFirstName');
const userLastName = document.getElementById('userLastName');
const userMail = document.getElementById('userMail');
const logInBtn = document.getElementById('logInBtn');


const toggleLogInModal = () =>{
  logInModal.classList.toggle("login-show-modal");
}

const logInSucceed = () =>{
  let name = userFirstName.value
  let lastName = userLastName.value
  let mail = userMail.value
  if(name.length > 0 && mail.length > 0 && lastName.length > 0 ){
    toggleLogInModal()
    logInText.innerHTML = ` ${name}`
    userFirstName.value = ""
    userLastName.value = ""
    userMail.value = ""
  } else{
    alert('All the fields must be filled.')
  }
  logInModalBody.innerHTML = 'You are already logged in. Congratulations'
  logInModalFooter.innerHTML = ""
}

logInModalBtn.addEventListener('click', () => toggleLogInModal());
closeBtnModal.addEventListener('click', () => toggleLogInModal());
logInBtn.addEventListener('click', () => logInSucceed());


// Cards appearing effect + concept appearing effect
const screenPosition = window.innerHeight / 2;


scrollCardsAppear = () =>{
  const cardPartners = document.querySelector('.card-container');
  const cardPosition = cardPartners.getBoundingClientRect().top;
  if(cardPosition < screenPosition){
    cardPartners.classList.add('card-appear');
  }
}

scrollConceptAppear = () => {
  const conceptBlock = document.querySelector('.about-container');
  const conceptPosition = conceptBlock.getBoundingClientRect().top;
  if(conceptPosition < screenPosition){
    conceptBlock.classList.add('about-appear');
  }
}

window.addEventListener('scroll', scrollConceptAppear);
window.addEventListener('scroll', scrollCardsAppear);
