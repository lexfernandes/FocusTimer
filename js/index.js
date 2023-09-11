import Controls from "./controls.js"
import Timer from "./timer.js"

//-------------------VARIAVEIS--------------------------//
let secondsDisplay = document.querySelector(".seconds")
const minutesDisplay = document.querySelector(".minutes")
let minutes = Number(minutesDisplay.textContent)
let TimerTimeOut

const buttonPlay = document.querySelector(".play")
const buttonSet = document.querySelector(".set")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")

let soundON = document.querySelector(".sound-on")
let soundOff = document.querySelector(".sound-off")
//--------------------------EVENTOS------------------------------------------//
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  TimerTimeOut,
  resetControls: controls.reset,
})

play.addEventListener("click", function () {
  controls.play()
  timer.countDown()
})

pause.addEventListener("click", function () {
  controls.pause()
  clearTimeout(TimerTimeOut)
})

stop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
})

set.addEventListener("click", function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.resetTimer()
    return
  }
  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
})

//----------------------------------------------------------------------------------------------//
soundON.addEventListener("click", function () {
  soundON.classList.add("hide")
  soundOff.classList.remove("hide")
})
soundOff.addEventListener("click", function () {
  soundON.classList.remove("hide")
  soundOff.classList.add("hide")
})
