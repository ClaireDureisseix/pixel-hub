// MODAL TEST
// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.addEventListener('click', e => {
  modal.style.display = "block";
  modalImg.src = 'img/object/bus-lautaro-andreani.jpg';
  modalImg.style.width = "auto";
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = "none";
});