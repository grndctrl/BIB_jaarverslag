import Swiper from 'swiper'

let swipers = Array.from(document.getElementsByClassName('swiper-container'))

swipers.forEach(container => {
  new Swiper (container, {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 6000
    },
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    threshold: 20,
  })

  let captions = Array.from(container.getElementsByClassName('slide-caption'))
  captions.forEach(caption => {
    if (window.innerWidth > 768) {
      caption.style.marginLeft = caption.getAttribute('data-margin-left')
      caption.style.marginTop = caption.getAttribute('data-margin-top')
    } 
  })
})

window.addEventListener('resize', event => {
  swipers.forEach(container => {
    let captions = Array.from(container.getElementsByClassName('slide-caption'))

    captions.forEach(caption => {
      if (window.innerWidth > 768) {
        caption.style.marginLeft = caption.getAttribute('data-margin-left')
        caption.style.marginTop = caption.getAttribute('data-margin-top')
      } else {
        caption.style.marginLeft = '1rem'
        caption.style.marginTop = '1rem'
      }
      
    })
  })
})
