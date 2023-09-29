import './style.scss'

let openNav = document.querySelector(".open-nav")
let closeNav = document.querySelector(".close-nav")


openNav.addEventListener("click", () => {
  document.body.classList.add("active")
})

closeNav.addEventListener("click", () => {
  document.body.classList.remove("active")
})