const myBlogs = [
    {
        title: "Coding Bootcamp Week 1: How I set myself up for success",
        picture: "Bootcamp cartoon.png",
        post: "asd"
    },
    {
        title: "Java",
        picture: "Java.png",
        post: "asd"
    },
    {
        title: "HTML",
        picture: "HTML.png",
        post: "asd"
    }
    ];



    createNewPost(myBlogs);


    function createNewPost(array) {    

        for (let i = 0; i < array.length; i++) {
            
            const prev = document.querySelector(".prev");
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
            //text.innerText = array[i].title; Repetitive currently.
    
            slideshowContainer.insertBefore(mySlidesFade, prev);
            mySlidesFade.append(numbertext, image, text);
    
            const dotHolder = document.querySelector(".dotHolder");
            dotHolder.innerHTML += `
            <span class="dot" onclick="currentSlide(${i+1})"></span>`
        
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
