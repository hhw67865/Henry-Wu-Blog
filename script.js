let slideIndex = 1;

showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let informations = document.getElementsByClassName("information");
  if (n > slides.length) {
    slideIndex = 1;
    }
  if (n < 1) {
    slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    informations[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  informations[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



//BLOG EDITOR MODE

const blogEditorButton = document.querySelector(".blogEditorMode");
blogEditorButton.addEventListener("click", () => {
  const box = document.querySelector(".box");
  const editorBox = document.querySelector(".editorBox");
  if (box.style.display === "block") {
    box.style.display = "none";
    editorBox.style.display = "block";

  }
  else {
    box.style.display = "block";
    editorBox.style.display = "none";
  }
})