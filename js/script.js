const topo = document.body
const menu = document.querySelector("nav ul");
const menuIcon = document.querySelector(".menu-icon");
const sobre = document.querySelector("#menuSobre")
const tech = document.querySelector("#menuTecnologias")
const quali = document.querySelector("#menuQualificação")
const port = document.querySelector("#menuPortfolio")
const contact = document.querySelector("#menuContato")

sobre.addEventListener(`click`, closeMenu)
tech.addEventListener(`click`, closeMenu)
quali.addEventListener(`click`, closeMenu)
port.addEventListener(`click`, closeMenu)
contact.addEventListener(`click` , closeMenu)

function closeMenu() {
    menu.classList.remove("open")
}

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
