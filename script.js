
   
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
});


//GRAB INFORMATION FOR PUT OR DELETE



//blog editor submit

const blogPostForm = document.querySelector("#blogPostForm");
blogPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const action = document.querySelector("select#action");
  const blogTitle = document.querySelector("input#formTitle");
  const blogPicture = document.querySelector("input#formPicture");
  const blogPost = document.querySelector("textarea#formBlogPost");
  const IDText = document.querySelector("input#ID");

//POST FUNCTION

  if (action.value === "POST") {
    const newBlogPost = {
      title: blogTitle.value,
      picture: blogPicture.value,
      post: blogPost.value,
      comments: []
     };
     createOnePost(newBlogPost);

     fetch("http://localhost:3000/blogPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBlogPost)
     })
     .then(res => res.json())
     .then(obj => console.log(obj))
     .catch(error => console.log(error.message))
  } 

  //PATCH FUNCTION

  if (action.value === "PUT") {

  }

});


