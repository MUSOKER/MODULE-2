// VARIABLES
let thumbnails = document.querySelector(".thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let sliderLeft = document.getElementById("slide-left");

sliderLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
//alert(maxScrollLeft);

//autoPlay slider
function autoPlay() {
    if (slider.scrollLeft > maxScrollLeft - 1) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

//PAUSE THE SLIDER ON HOVER
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play);
    });

    thumbnails[i].addEventListener("mouseout", () => {
        return (play = setInterval(autoPlay, 50));
    });
}

// let productcontainer = [...document.querySelectorAll(".slide-container")];
// let buttonRight = [...document.querySelectorAll("arrow")];
// let sliderLeft = [...document.querySelectorAll("arrow")];

// productcontainer.forEach((item, i) => {
//             let containerDimension = item.getBoundingClientRect();
//             let containerWidth = containerDimension.width;

//             buttonLeft.addEventListener("click", () => {
//                 slider.scrollLeft -= 125;
//             });

//             buttonRight.addEventListener("click", () => {
//                 slider.scrollLeft += 125;
//             })

//         }