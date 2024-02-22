let imgs = Array.from(document.querySelectorAll(".image img"));
let close1 = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let overlay = document.querySelector(".overlay");
let boxPhoto = document.querySelector(".boxPhoto");
let autoPlay = document.getElementById("autoPlay");

let counter;

for(let i = 0; i < imgs.length;i += 1){
    imgs[i].addEventListener("click", function(e){
        counter = imgs.indexOf(e.target)
        overlay.style.display = "flex";
        let src = e.target.src;
        boxPhoto.style.backgroundImage = `url(${src})`
    })
};

function nextSlide(){
    counter++;
    if(counter > imgs.length - 1){
        counter = 0
    };
    let src = imgs[counter].src;
    boxPhoto.style.backgroundImage = `url(${src})`
};
next.addEventListener("click", nextSlide);

function prevSlide(){
    counter--;
    if(counter < 0){
        counter = imgs.length - 1
    };
    let src = imgs[counter].src;
    boxPhoto.style.backgroundImage = `url(${src})`
}
prev.addEventListener("click", prevSlide);

function closeOverLay(){
    overlay.style.display = "none"
};
close1.addEventListener("click", closeOverLay);

function autoPlayBox(){
    setInterval(function(){
        counter++;
        if(counter > imgs.length - 1){
            counter = 0
        };
        let src = imgs[counter].src;
        boxPhoto.style.backgroundImage = `url(${src})`
    }, 5000)
}
autoPlay.addEventListener("click", autoPlayBox)

document.addEventListener("keyup", function(e){
    if(e.keyCode == 39){
        nextSlide()
    }else if(e.keyCode == 37){
        prevSlide()
    }else if(e.keyCode == 27){
        closeOverLay()
    }
});

let aside = document.querySelector(".aside1");
let close2 = document.querySelector(".close2");
let bars = document.getElementById("bars");

bars.addEventListener("click", function(){
    aside.style.transform = "translateX(0)"
});

close2.addEventListener("click", function(){
    aside.style.transform = "translateX(calc(100% + 2px))"
});