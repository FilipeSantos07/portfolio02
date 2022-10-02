var topo = document.body
var menu = document.querySelector("nav ul");
var menuIcon = document.querySelector(".menu-icon");

function abrirMenu() {
    menu.classList.toggle("open")
}

function toTop() {
    topo.scrollIntoView({behavior:"smooth"})
}
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior:"smooth"})
}
document.querySelector("#menuSobre").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".sobre")
})
document.querySelector("#menuTecnologias").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".tecnologies")
})
document.querySelector("#menuQualificação").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".qualification")
})
document.querySelector("#menuPortfolio").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".portfolio")
})
document.querySelector("#menuContato").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".contact")
})
