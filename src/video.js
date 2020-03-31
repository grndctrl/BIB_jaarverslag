let videoWrappers = Array.from(document.getElementsByClassName('video-wrapper'))

videoWrappers.forEach(wrapper => {
  let isPlaying = false
  let video = wrapper.querySelector('.video')

  window.addEventListener('scroll', () => {
    if (!isPlaying) {
      let tracker = wrapper.querySelector('.video-tracker')
      let trackerOffset = offset(tracker).top 
      let trackerPosition = trackerOffset - window.scrollY

      if (checkTrackerPos(trackerPosition)) {
        video.play()
        isPlaying = true;
      }
    }
  })
})

function offset(element) {
  var rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

function checkTrackerPos(trackerPosition) {
  let triggerTop = offset(document.querySelector('.video-trigger-top')).top - window.scrollY

  let triggerBottom = offset(document.querySelector('.video-trigger-bottom')).top - window.scrollY
  if (trackerPosition >= triggerTop && trackerPosition <= triggerBottom) {
    return true
  }

  return false;
}