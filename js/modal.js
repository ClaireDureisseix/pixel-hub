// MODAL GALLERY
// Open the modal
const modal = document.getElementById("myModal");
const imgs = document.getElementsByClassName("portfolio-item");
const modalImg = document.getElementById("images");
for (img of imgs) {
  img.addEventListener('click', e => {
    const url = e.target.style.backgroundImage.split('"')[1];
    modal.style.display = "block";
    modalImg.src = url;
    modalImg.style.width = "auto";
  });
}

// Closes the modal on click
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Carrousel in modal
const next = document.getElementById('modal_button--next');
const prev = document.getElementById('modal_button--prev');

const mainPictures = document.querySelectorAll('div.portfolio-item');
console.log(mainPictures.length);

next.addEventListener('click', e => {
  alert("hello");
});

// let i = 0;
// for (img of imgs) {
//   let newUrl = imgs[i].style.backgroundImage.split('"')[1];
//   i ++;
//   console.log(newUrl);
//   next.addEventListener('click', () => {
//     modalImg.src = newUrl;
//   });
// }