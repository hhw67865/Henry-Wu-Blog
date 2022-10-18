
   
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

const idForm = document.querySelector("form#idForm");
idForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const idValue = e.target.ID.value;
  const blogTitle = document.querySelector("input#formTitle");
  const blogPicture = document.querySelector("input#formPicture");
  const blogPost = document.querySelector("textarea#formBlogPost");
  fetch(`http://localhost:3000/blogPosts/${idValue}`)
  .then(res => res.json())
  .then(blogGrabbed => {
    blogPostForm.formTitle.value = blogGrabbed.title;
    blogPostForm.formPicture.value = blogGrabbed.picture;
    blogPostForm.formBlogPost.value = blogGrabbed.post;
  
  });
  
  
});

//blog editor submit

const blogPostForm = document.querySelector("#blogPostForm");
blogPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const action = document.querySelector("select#action");
  const blogTitle = document.querySelector("input#formTitle");
  const blogPicture = document.querySelector("input#formPicture");
  const blogPost = document.querySelector("textarea#formBlogPost");

//POST FUNCTION

  if (action.value === "POST") {
    const newBlogPost = {
      title: blogTitle.value,
      picture: blogPicture.value,
      post: blogPost.value,
      comments: []
     };
     

     fetch("http://localhost:3000/blogPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBlogPost)
     })
     .then(res => res.json())
     .then(obj => createOnePost(obj))
     .catch(error => console.log(error.message));
     blogPostForm.reset();
  } 

  //PATCH FUNCTION

  if (action.value === "PATCH") {
    const newBlogPost = {
      title: blogTitle.value,
      picture: blogPicture.value,
      post: blogPost.value
     };

     fetch(`http://localhost:3000/blogPosts/${idForm.ID.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBlogPost)
     })
     .then(res=>res.json())
     .then(obj => {
      const allSlides = document.querySelectorAll(".mySlides");
      const image = allSlides[idForm.ID.value-1].firstChild;
      image.src = newBlogPost.picture;

      const allInformation = document.querySelectorAll(".information");
      const informationTitle = allInformation[idForm.ID.value-1].querySelector("h3");
      const informationPost = allInformation[idForm.ID.value-1].querySelector("p");
      informationTitle.innerText = newBlogPost.title;
      informationPost.innerText = newBlogPost.post;

     })
     .catch(error => console.log(error.message));





     blogPostForm.reset();
  }

  //DELETE FUNCTION

  if (action.value === "DELETE") {
    fetch(`http://localhost:3000/blogPosts/${idForm.ID.value}`, {
      method: "DELETE"      
     })
     .then(res=>res.json())
     .then(obj => console.log(obj))
     .then(()=>{
        const allSlides = document.querySelectorAll(".mySlides");
        const selectedSlide = allSlides[idForm.ID.value-1];
        selectedSlide.remove();
        const allDots = document.querySelectorAll(".dot");
        const selectedDot = allDots[idForm.ID.value-1];
        selectedDot.remove();
        const allInformation = document.querySelectorAll(".information");
        const selectedInformation = allInformation[idForm.ID.value-1];
        selectedInformation.remove();


     })
     .catch(error => console.log(error.message));
     blogPostForm.reset();
  }

});


