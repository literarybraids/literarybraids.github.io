'use strict'

<<<<<<< HEAD
var secretRevealed = false
=======
var secretRevealed = true
>>>>>>> bb3c3ca11523235966b9fe3e162b1af1015aa761
var doSecretReveal
var resetSecretReveal

doSecretReveal = function () {
  // Remove the negative offset from the banner, while also scrolling down the page
  // this reveals the secret without affecting the users position on the page
  document.body.className = document.body.className.replace('is-offset', '')
<<<<<<< HEAD
  window.scroll(0, window.scrollY + 195)
=======
  window.scroll(0, window.scrollY + 0)
>>>>>>> bb3c3ca11523235966b9fe3e162b1af1015aa761
  secretRevealed = true
}

resetSecretReveal = function () {
  if (secretRevealed) {
    // The native browser behaviour of automatically scrolling to a users last position on refresh
    // is upset by our revealing of the secret banner. This meant that, on refresh, the position
    // the browser returns the user to is incorrect. To compensate for this, we hide the secret banner
    // section again and adjust the page scroll value accordingly
    document.body.className += ' is-offset'
<<<<<<< HEAD
    window.scroll(0, Math.max(window.scrollY - 195, 0))
=======
    window.scroll(0, Math.max(window.scrollY*0, 0))
>>>>>>> bb3c3ca11523235966b9fe3e162b1af1015aa761
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // 3000 ms is arbitrary, though there must be at least some
  // delay here, otherwise it doesn't seem to play ball
<<<<<<< HEAD
  setTimeout(doSecretReveal, 3000)
=======
  setTimeout(doSecretReveal, 5)
>>>>>>> bb3c3ca11523235966b9fe3e162b1af1015aa761
})

window.addEventListener('beforeunload', function () {
  resetSecretReveal()
})
