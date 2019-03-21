'use strict'

const showContactsTemplate = require('../templates/contacts-listing.handlebars')

const createContactSuccess = (responseData) => {
  $('#create-contact-message').addClass('show')
  setTimeout(() => {
    $('#create-contact-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateSuccess = (responseData) => {
  $('#update-contact-message').addClass('show')
  setTimeout(() => {
    $('#update-contact-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

// const onUpdateFailure = (responseData) => {
//   $('#update-contact-err-msg').addClass('show')
//   setTimeout(() => {
//     $('#update-contact-err-msg').removeClass('show')
//   }, 2000)
//   $('form').trigger('reset')
// }

const onDeleteContact = (responseData) => {
  $('#delete-contacts-message').addClass('show')
  setTimeout(() => {
    $('#delete-contacts-message').removeClass('show')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateContactFailure = id => {
  $(`#update-${id}-user-message`).html('You can ONLY update your contacts')
  $('form').trigger('reset')
}
const getContactsSuccess = (responseData) => {
  const showContactsHtml = showContactsTemplate({ contacts: responseData.contacts })
  $('.content').html(showContactsHtml)
  $('.user-feedback').text('Click "Get Contacts Button" to see new contact.')
  setTimeout(() => {
    $('.user-feedback').hide()
  }, 2000)
}

const onDeleteContactFailure = id => {
  $(`#deleteable-${id}-user-message`).html('this is not deleteable')
}

module.exports = {
  createContactSuccess,
  getContactsSuccess,
  onUpdateContactFailure,
  onDeleteContact,
  onUpdateSuccess,
  onDeleteContactFailure
}
