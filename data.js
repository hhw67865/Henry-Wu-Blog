
    

    function createAllPost(array) {    

        for (let i = 0; i < array.length; i++) {
            
            const prev = document.querySelector(".prev");
            const slideshowContainer = document.querySelector(".slideshow-container");
            const mySlidesFade = document.createElement("div");
            mySlidesFade.className = "mySlides fade";
            const image = document.createElement("img");
            image.src = array[i].picture;
            image.alt = array[i].picture;
            image.style.width = "100%";
            image.style.height = "100%";
                
            slideshowContainer.insertBefore(mySlidesFade, prev);
            mySlidesFade.append(image);
    
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

            const commentHeader = document.createElement("h4");
            commentHeader.innerText = "Comments";
            commentHeader.style.textAlign = "left";
            commentHeader.style.textDecoration = "underline";
            
            informationFade.append(commentHeader);
            array[i].comments.forEach(element => {
                const comment = document.createElement("p")
                comment.className = "comments"
                comment.style.textAlign = "left";
                comment.innerText = element;
                informationFade.append(comment);
            });
    
        }
    
    }

    function createOnePost(object) {
        
        const prev = document.querySelector(".prev");
        const slideshowContainer = document.querySelector(".slideshow-container");
        const mySlidesFade = document.createElement("div");
        let slides = document.getElementsByClassName("mySlides");
        mySlidesFade.className = `mySlides fade ${slides.length+1}`;
        const image = document.createElement("img");
        image.src = object.picture;
        image.alt = object.picture;
        image.style.width = "100%";
        image.style.height = "100%";
        
        slideshowContainer.insertBefore(mySlidesFade, prev);
        mySlidesFade.append(image);

        const dotHolder = document.querySelector(".dotHolder");
        dotHolder.innerHTML += `
        <span class="dot ${slides.length}" onclick="currentSlide(${slides.length})"></span>`
    
        const box = document.querySelector(".box");
        const informationFade = document.createElement("div");
        informationFade.className = `information fade ${slides.length}`;
        const h3 = document.createElement("h3");
        h3.innerText = object.title;
        const p = document.createElement("p");
        p.innerText = object.post;

        informationFade.append(h3, p);
        box.append(informationFade);
        
        //Comments
        const commentHeader = document.createElement("h4");
            commentHeader.innerText = "Comments";
            commentHeader.style.textAlign = "left";
            commentHeader.style.textDecoration = "underline";
            
            informationFade.append(commentHeader);
            object.comments.forEach(element => {
                const comment = document.createElement("p");
                comment.className = `comments ${slide.length}`;
                comment.style.textAlign = "left";
                comment.innerText = element;
                informationFade.append(comment);
            });
         
    }


