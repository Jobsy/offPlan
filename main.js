let elem2 = document.querySelector(".properties");
let flkty2 = new Flickity(elem2, {
    accessibility: true,
    freeScroll: true,
    wrapAround: true,
    cellAlign: 'left',
    contain: true
});


let elem3 = document.querySelector(".cService");
let flkty3 = new Flickity(elem3, {
    autoPlay: 3500,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    accessibility: true,
    freeScroll: true,
    wrapAround: true,
    cellAlign: 'left',
    contain: true
});


let modal1 = document.querySelector(".headerAndIntroWrapper2");
function toggleModal1() {
    modal1.classList.toggle("show-modal");
}
function windowOnClick1(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
}
function searchForElemt2(event) {
    if (event.target.nodeName == "A") {
        if (event.target.textContent == "Properties") {
            console.log("Clicked");
            modal1.classList.toggle("show-modal");

        }
    }
}
document.body.addEventListener("click", searchForElemt2);
window.addEventListener("click", windowOnClick1);



let modal2 = document.querySelector(".freeInspection");
function toggleModal2() {
    modal2.classList.toggle("show-modal");
}
function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}
function searchForElemt3(event) {
    if (event.target.nodeName == "BUTTON") {
        if (event.target.textContent == "REQUEST FOR FREE INSPECTION" || event.target.textContent == "FREE INSPECTION") {
            modal2.classList.toggle("show-modal");
        }
    }
}
document.body.addEventListener("click", searchForElemt3);
window.addEventListener("click", windowOnClick2);



let modal3 = document.querySelector(".placeProperties");
let trigger3 = document.querySelector(".placePropBtn");
function toggleModal3() {
    modal3.classList.toggle("show-modal");
}
function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
    }
}
trigger3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);



let modal6 = document.querySelector(".confirmation");
function toggleModal6() {
    modal6.classList.toggle("show-modal");
}
function windowOnClick6(event) {
    if (event.target === modal6) {
        toggleModal6();
    }
}
function searchForElemt(event) {
    if (event.target.nodeName == "BUTTON") {
        if (event.target.textContent == "SEND" || event.target.textContent == "SUBMIT") {
            modal6.classList.toggle("show-modal");

        }
    }
}
document.body.addEventListener("click", searchForElemt);
window.addEventListener("click", windowOnClick6);


function myFunction(x) {
    if (x.matches) { // If media query matches
        let elem = document.querySelector('.info');
        let flkty = new Flickity(elem, {
            autoPlay: 3500,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
            accessibility: true,
            freeScroll: true,
            wrapAround: true,
            cellAlign: 'left',
            contain: true
        });
    }
}

let x = window.matchMedia("(max-width: 568px)")
myFunction(x)
x.addListener(myFunction)

function myFunction3(z) {
    if (z.matches) { // If media query matches
        let modal = document.querySelector(".aboutUs2");
        let trigger = document.querySelector(".aboutUs");
        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
        trigger.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);

    }
}
let z = window.matchMedia("(max-width: 568px)")
myFunction3(z)
z.addListener(myFunction3)

function myFunction2(y) {
    if (y.matches) { // If media query matches
        let modal = document.querySelector(".contactForm2");
        let trigger = document.querySelector(".contact");
        function toggleModal() {
            modal.classList.toggle("show-modal");
        }
        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
        trigger.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
    }
}
let y = window.matchMedia("(max-width: 568px)")
myFunction2(y)
y.addListener(myFunction2)


let docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);
