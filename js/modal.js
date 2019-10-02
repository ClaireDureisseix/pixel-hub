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

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgs = document.getElementsByClassName("portfolio-item");
const modalImg = document.getElementById("img01");
console.log(imgs);

for (img of imgs) {
  img.addEventListener('click', (e) => {
    /*const aff = e.target.style.backgroundImage.value;
    modal.style.display = "block";
    modalImg.src = 'img/object/bus-lautaro-andreani.jpg';
    modalImg.style.width = "auto";*/
    //e.target.style.backgroundImage =;
    //modalImg.background = url
  });
}
// Closes the modal on click
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Carrousel in modal
const next = document.getElementById('modal_button--next');
const prev = document.getElementById('modal_button--prev');


// let i = 0;
// for (img of imgs) {
//   let newUrl = imgs[i].style.backgroundImage.split('"')[1];
//   i ++;
//   console.log(newUrl);
//   next.addEventListener('click', () => {
//     modalImg.src = newUrl;
//   });
// }
