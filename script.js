let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")

let play = document.querySelector(".play")
let set = document.querySelector(".set")
let pause = document.querySelector(".pause")
let stop = document.querySelector(".stop")

let soundON = document.querySelector(".sound-on")
let soundOff = document.querySelector(".sound-off")
//----------------------------------------------------------------------------------------------//

play.addEventListener("click", function () {
  play.classList.add("hide")
  pause.classList.remove("hide")
})
pause.addEventListener("click", function () {
  play.classList.remove("hide")
  pause.classList.add("hide")
})

set.addEventListener("click", function () {
  hours = prompt("Digite a Hora")
  minutes = prompt("Digite os Minutos")

  
})

soundON.addEventListener("click", function () {
  soundON.classList.add("hide")
  soundOff.classList.remove("hide")
})
soundOff.addEventListener("click", function () {
  soundON.classList.remove("hide")
  soundOff.classList.add("hide")
})
