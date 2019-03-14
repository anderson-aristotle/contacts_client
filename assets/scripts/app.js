'use strict'
const authEvents = require('./events.js')
const contactEvents = require('./contacts/contact-events.js')
// const gameEvents = require('./game/game-events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn).hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out-button').on('submit', authEvents.onSignOut).hide()
  contactEvents.addHandlers()
})
