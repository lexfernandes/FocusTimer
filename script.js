const minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")
let minutes

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
  minutes = prompt("Digite a Hora")
  seconds = prompt("Digite o Segundos")
  minutesDisplay.textContent = minutes
  secondsDisplay.textContent = seconds
})

soundON.addEventListener("click", function () {
  soundON.classList.add("hide")
  soundOff.classList.remove("hide")
})
soundOff.addEventListener("click", function () {
  soundON.classList.remove("hide")
  soundOff.classList.add("hide")
})
