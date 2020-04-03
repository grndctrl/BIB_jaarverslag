import zenscroll from 'zenscroll'
import SimpleBar from 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

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

let desktopScrollers = Array.from(document.querySelectorAll('.scroll-desktop'))

window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    desktopScrollers.forEach(scroller => {
      let wrapper = scroller.querySelector('.simplebar-content-wrapper')

      if (scroller.getBoundingClientRect().top < 150) {
        console.log("scroller.getBoundingClientRect().top", scroller.getBoundingClientRect().top)
        scroller.classList.add('show-scrollbar')
        wrapper.style = "overflow: hidden scroll"
      } else {
        scroller.classList.remove('show-scrollbar')
        wrapper.style = "overflow: hidden"
      }
    })
  }
})