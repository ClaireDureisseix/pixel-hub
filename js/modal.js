// MODAL TEST
// Get the modal
const modal = document.getElementById("myModal");

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

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = "none";
});