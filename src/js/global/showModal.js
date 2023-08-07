const showModal = () => {
  const btn = document.querySelectorAll('[data-show-modal]')

  if (btn.length == 0) return

  let scroll = calcScroll()

  btn.forEach(elem => {

    if (!elem.getAttribute('data-show-modal').length) return
    let overlay = document.querySelector("#" + elem.getAttribute('data-show-modal'))

    console.log(document.querySelector('#overlay__comment'))

    if (!overlay) return

    const close = overlay.querySelector('.overlay--close')

    elem.addEventListener('click', function (e) {
      e.preventDefault()
      document.documentElement.style.overflowY = 'hidden'

      overlay.style.zIndex = 999
      elem.disabled = true
      setTimeout(() => {
        overlay.classList.add('overlay--show')
        elem.disabled = false
      }, 100)
    })

    close.addEventListener('click', function (e) {
      e.preventDefault()
      clickClose()
    })

    overlay.addEventListener('click', function (e) {
      if (e.target != overlay) return
      clickClose()
    })

    const clickClose = () => {
      if (getComputedStyle(overlay.querySelector('.overlay-wrap')).marginRight != '0px') return
      overlay.classList.remove('overlay--show')
      setTimeout(() => {
        overlay.style.zIndex = -1
        document.documentElement.style.overflowY = 'auto'
      }, 600)
    }
  })
}

function calcScroll() {
  let div = document.createElement('div')
  div.width = '50px'
  div.height = '50px'
  div.style.overflowY = 'scroll'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()
  return scrollWidth
}