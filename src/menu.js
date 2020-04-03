import zenscroll from "zenscroll";

let burger = document.querySelector(".burger");
let menu = document.querySelector(".mobile-menu");
let wrapper = document.querySelector(".wrapper");
let scrollY = 0;

zenscroll.setup(600, -2)

if (burger && menu && wrapper) {
  burger.addEventListener("click", event => {
    event.preventDefault();
    if (!burger.classList.contains("disabled")) {
      if (burger.classList.contains("active")) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        wrapper.classList.remove("limited");
        zenscroll.toY(scrollY, 0);
      } else {
        menu.classList.add("active");
        burger.classList.add("active");
        scrollY = window.scrollY;
        burger.classList.add("disabled");
        setTimeout(() => {
          wrapper.classList.add("limited");
          burger.classList.remove("disabled");
        }, 500);
      }
    }
  });

  let navItems = Array.from(document.getElementsByClassName('mobile-nav-item'))
  let pages = Array.from(document.querySelectorAll('[data-page]'))
  console.log("pages", pages.length)
  console.log("pages", pages)

  navItems.forEach(item => {
    let target = parseInt(item.getAttribute('data-target'))
    console.log(target, pages[target])
    let element = pages[target].querySelector('.container')

    item.addEventListener('click', event => {
      menu.classList.remove("active");
      burger.classList.remove("active");
      wrapper.classList.remove("limited");

      zenscroll.to(element, 600)
    })
  })
}