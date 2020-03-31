let closeButtons = Array.from(document.getElementsByClassName('close-button'))
let gandalf = document.querySelector('.gandalf')
let wrapper = document.querySelector('.wrapper')

if (gandalf && wrapper) {
  closeButtons.forEach(button => {
    button.onclick = event => {
      event.preventDefault()
      
      gandalf.classList.add('fallen')
      wrapper.classList.remove('limited')
    }
  })
}