let switchBtn = document.querySelector(".switch-btn");
let navbar = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let p = document.querySelectorAll(".paragraph");
let body = document.querySelector("body");
let card = document.querySelector(".card");
let modalBody = document.querySelectorAll(".modal-content");
let card2 = document.querySelectorAll(".card3");
let card3 = document.querySelectorAll(".card2");
let svg = document.querySelectorAll(".svg");
let button = document.querySelector(".button")
let buttonText = document.querySelector(".font8")


switchBtn.addEventListener("click",function(){
    switchBtn.classList.toggle("slide");
})

menu.addEventListener("click",function(){
    navbar.classList.toggle("show");
  })

switchBtn.addEventListener("click",function(){
    body.classList.toggle("darkMode");
    card.classList.toggle("darkMode");
    card.classList.toggle("outline3");
    button.classList.toggle("button-color");
    buttonText.classList.toggle("button-text");
})
switchBtn.addEventListener("click",function(){
    p.forEach((e) => {
        e.classList.toggle("color-white");
    })
    modalBody.forEach((e) => {
        e.classList.toggle("darkMode");
    })
    card2.forEach((e) => {
     e.classList.toggle("darkMode");
    })
    card3.forEach((e) =>{
        e.classList.toggle("outline3");
    })
    svg.forEach((e) => {
        e.classList.toggle("svg-color")
    })
})
