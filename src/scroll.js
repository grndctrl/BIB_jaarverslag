import zenscroll from 'zenscroll'

let navItems = Array.from(document.getElementsByClassName('nav-item'))
let pages = Array.from(document.getElementsByClassName('page'))
let pageHeaders = Array.from(document.getElementsByClassName('page-header'))

let targets = Array.from(document.querySelectorAll('[data-page]'))
console.log(targets)
// targets.concat(pages)
// targets.concat(pageHeaders)

navItems.forEach((item) => {
  let target = item.getAttribute('data-target')
  let page = document.querySelector('[data-page="' + target +'"]')
  if (page) {
    let element = page.querySelector('.container')
    
    item.addEventListener('click', (event) => {
      zenscroll.to(element, 600)
    })
  }
})

let upItem = document.querySelector('.up')

if (upItem) {
  upItem.addEventListener('click', (event) => {
    let element = document.querySelector('.header')
    zenscroll.to(element, 600)
  })
}
