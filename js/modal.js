// MODAL GALLERY
// Open the modal
const modal = document.getElementById("myModal")
const imgs = document.getElementsByClassName("portfolio-item")
const modalImg = document.getElementById("images")
const next = document.getElementById('modal_button--next')
const prev = document.getElementById('modal_button--prev')
const portfolio1 = document.querySelector('.first')
const portfolioChilds1 = portfolio1.children
const portfolio2 = document.querySelector('.second')
const portfolioChilds2 = portfolio2.children

const modalCarousel = portfolioChilds => {
  for (let i = 0; i < portfolioChilds.length; i++) {
    portfolioChilds[i].addEventListener('click', () => {
      let url = this.event.target.style.backgroundImage.split('"')[1]
      modal.style.display = "flex"
      modal.style.justifyContent = "center"
      modal.style.alignItems = "center"
      modalImg.src = url
      //modalImg.style.width = "auto";
      next.addEventListener('click', () => {
        if (i === portfolioChilds.length) {
          i = 0
          url = portfolioChilds[i].style.backgroundImage.split('"')[1]
        } else {
          url = portfolioChilds[i++ + 1].style.backgroundImage.split('"')[1]
        }
        modalImg.src = url
      })
      prev.addEventListener('click', () => {
        if (i === 0) {
          i = portfolioChilds.length
          url = portfolioChilds[i].style.backgroundImage.split('"')[1]
        } else {
          url = portfolioChilds[i-- - 1].style.backgroundImage.split('"')[1]
        }
        modalImg.src = url;
      })
    });
  }
}
modalCarousel(portfolioChilds1)
modalCarousel(portfolioChilds2)

// Closes the modal on click
const closeBtn = document.getElementsByClassName("close")[0]
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
})


// Effet d'animation sur les infos textuelles
const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
    console.log(entry.intersectRatio)
  })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(r => {
  observer.observe(r)
})

const imageList = document.getElementsByClassName("list-item");
for (let i =0; i < imageList.length; i++) {
  imageList[i].style.backgroundImage = portfolioChilds1[i].style.backgroundImage;
  imageList[i].addEventListener('click', (e) => {
    urlBis = e.target.style.backgroundImage.split('"')[1];
    modalImg.src = urlBis;
  });
}
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
