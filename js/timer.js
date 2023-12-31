// retorno de uma função chamada FACTORY
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  minutes,
}) {
  let TimerTimeOut

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(TimerTimeOut)
  }

  function countDown() {
    TimerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0) {
        resetControls()
        return
      }
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))
      countDown()
    }, 1000)
  }
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(TimerTimeOut)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}
