import { resetControls } from "./controls.js"
import { Timer } from "./timer.js"

//-------------------VARIAVEIS--------------------------//
let secondsDisplay = document.querySelector(".seconds")
const minutesDisplay = document.querySelector(".minutes")
let minutes = Number(minutesDisplay.textContent)
let TimerTimeOut

const play = document.querySelector(".play")
const set = document.querySelector(".set")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")

let soundON = document.querySelector(".sound-on")
let soundOff = document.querySelector(".sound-off")
//--------------------------EVENTOS------------------------------------------//
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  TimerTimeOut,
  resetControls,
})

play.addEventListener("click", function () {
  play.classList.add("hide")
  pause.classList.remove("hide")
  set.classList.add("hide")
  stop.classList.remove("hide")
  timer.countDown()
})

pause.addEventListener("click", function () {
  pause.classList.add("hide")
  play.classList.remove("hide")
  clearTimeout(TimerTimeOut)
})

stop.addEventListener("click", function () {
  timer.resetControls()
  timer.resetTimer()
})

set.addEventListener("click", function () {
  let newMinutes = prompt("Digite os minutos")
  if (!newMinutes) {
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
//--------------------------------------FUNÇÕES-----------------------------------------------//

//----------------------------------------------------------------------------------------------//
soundON.addEventListener("click", function () {
  soundON.classList.add("hide")
  soundOff.classList.remove("hide")
})
soundOff.addEventListener("click", function () {
  soundON.classList.remove("hide")
  soundOff.classList.add("hide")
})
