const toggle = document.querySelector('.bar');
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".unlist");

let moveDown = false;

toggle.addEventListener("click", ()=> {
    if(!moveDown){
        toggle.classList.add("open");
        overlay.classList.add("open");
        nav.classList.add("open");
        moveDown = true;
    }else{
        toggle.classList.remove("open");
        overlay.classList.remove("open");
        nav.classList.remove("open");
        moveDown = false;
    }
});

overlay.addEventListener('click', function(){
     nav.classList.remove("open");
     overlay.classList.remove("open");
     toggle.classList.remove("open");
})

// scrol animation
AOS.init();