// MODAL GALLERY

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