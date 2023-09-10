let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")

const play = document.querySelector(".play")
const set = document.querySelector(".set")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")

let soundON = document.querySelector(".sound-on")
let soundOff = document.querySelector(".sound-off")
//----------------------------------------------------------------------------------------------//

play.addEventListener("click", function () {
  play.classList.add("hide")
  pause.classList.remove("hide")
  set.classList.add("hide")
  stop.classList.remove("hide")
})
pause.addEventListener("click", function () {
  play.classList.remove("hide")
  pause.classList.add("hide")
})
stop.addEventListener("click", function () {
  set.classList.remove("hide")
  stop.classList.add("hide")
  pause.classList.add("hide")
  play.classList.remove("hide")
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
