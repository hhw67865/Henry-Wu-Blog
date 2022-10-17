const myBlogs = [
    {
        title: "Coding Bootcamp Week 1: How I set myself up for success",
        picture: "Bootcamp cartoon.png",
        post: "Weird"
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



    createAllPost(myBlogs);


    function createAllPost(array) {    

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

    function createOnePost(object) {
        
        const prev = document.querySelector(".prev");
        const slideshowContainer = document.querySelector(".slideshow-container");
        const mySlidesFade = document.createElement("div");
        mySlidesFade.className = "mySlides fade";
        const numbertext = document.createElement("div");
        numbertext.className = "numbertext";
        let slides = document.getElementsByClassName("mySlides");
        numbertext.innerText = `${slides.length} / ${slides.length}`
        const image = document.createElement("img");
        image.src = object.picture;
        image.alt = object.picture;
        image.style.width = "100%";
        image.style.height = "100%";
        const text = document.createElement("div");
        text.className = "text";
        //text.innerText = object.title; Repetitive currently.

        slideshowContainer.insertBefore(mySlidesFade, prev);
        mySlidesFade.append(numbertext, image, text);

        const dotHolder = document.querySelector(".dotHolder");
        dotHolder.innerHTML += `
        <span class="dot" onclick="currentSlide(${slides.length})"></span>`
    
        const box = document.querySelector(".box");
        const informationFade = document.createElement("div");
        informationFade.className = "information fade";
        const h3 = document.createElement("h3");
        h3.innerText = object.title;
        const p = document.createElement("p");
        p.innerText = object.post;

        informationFade.append(h3, p);
        box.append(informationFade);     
    }

    function postOnServer (object) {
        fetch("http://localhost:3000/blogPosts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"        
            },
            body: JSON.stringify(object)
        })
        .then(res => res.json())
        .then(obj => console.log(obj))
        .catch(error => console.log(error.message))
    }