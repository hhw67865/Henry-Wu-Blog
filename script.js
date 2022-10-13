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

function createNewPost(array) {

    for (let i = 0; i < array.length; i++) {
        
        const slideshowContainer = document.querySelector(".slideshow-container");
        const mySlidesFade = document.createElement("div");
        mySlidesFade.className = "mySlides fade";
        const numbertext = document.createElement("div");
        numbertext.className = "numbertext";
        numbertext.innerText = `${i+1} / ${array.length}`
        const image = document.createElement("img");
        image.src = array[i].picture;
        image.alt = array[i].picture;
        image.style.width = "100%";
        image.style.height = "100%";
        const text = document.createElement("div");
        text.className = "text";
        text.innerText = array[i].title;

        slideshowContainer.append(mySlidesFade);
        mySlidesFade.append(numbertext, image, text);

        const dotHolder = document.querySelector(".dotHolder");
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick=`currentSlide(${i+1})`

        dotHolder.append(dot);

        const box = document.querySelector(".box");
        const informationFade = document.createElement("div");
        informationFade.className = "information fade";
        const h3 = document.createElement("h3");
        h3.innerText = array[i].title;
        const p = document.createElement("p");
        p.innerText = array[i].post;

        informationFade.append(h3, p);
        box.append(informationFade);

    }
}