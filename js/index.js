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
play.addEventListener("click", function () {
  play.classList.add("hide")
  pause.classList.remove("hide")
  set.classList.add("hide")
  stop.classList.remove("hide")
  countDown()
})

pause.addEventListener("click", function () {
  pause.classList.add("hide")
  play.classList.remove("hide")
  clearTimeout(TimerTimeOut)
})

stop.addEventListener("click", function () {
  resetControls()
  resetTimer()
})

set.addEventListener("click", function () {
  let newMinutes = prompt("Digite os minutos")
  if (!newMinutes) {
    resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})
//--------------------------------------FUNÇÕES-----------------------------------------------//
function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(lTimerTimeOut)
}

function resetControls() {
  play.classList.remove("hide")
  pause.classList.add("hide")
  set.classList.remove("hide")
  stop.classList.add("hide")
}

function countDown() {
  TimerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }
    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))
    countDown()
  }, 1000)
}
//----------------------------------------------------------------------------------------------//
soundON.addEventListener("click", function () {
  soundON.classList.add("hide")
  soundOff.classList.remove("hide")
})
soundOff.addEventListener("click", function () {
  soundON.classList.remove("hide")
  soundOff.classList.add("hide")
})
