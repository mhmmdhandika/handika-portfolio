const scriptURL = 'https://script.google.com/macros/s/AKfycbxJHR66ii0F390YHGNGeAyiUwRILeScoV9AMGBV8VjGUH5k_p7C-3qI68xSF9AF6zwCLA/exec'
const form = document.forms['submit-to-google-sheet']
const sendButton = document.querySelector('#send-button')
const loadingButton = document.querySelector('.btn-loading')
const alertMessage = document.querySelector('.alert-message')

form.addEventListener('submit', e => {
  e.preventDefault()
  // when submit's button is clicked
  // show laoding button, remove send button
  loadingButton.classList.toggle('d-none')
  sendButton.classList.toggle('d-none')

  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      // show send button, remove loading button
      loadingButton.classList.toggle('d-none')
      sendButton.classList.toggle('d-none')

      // show alert button
      alertMessage.classList.toggle('d-none')

      // reset the form
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})