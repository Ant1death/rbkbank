const checkAssessment = () => {


  const assssmnt = document.querySelectorAll('[data-assssmnt]')

  if (assssmnt.length == 0) return

  assssmnt.forEach(elem => {
    const stars = elem.querySelectorAll('.assessment-star')
    const input = elem.querySelector('input')

    stars.forEach((element, item) => {
      element.addEventListener('click', () => {

        stars.forEach(el => {
          el.classList.remove('active')
        })
        element.classList.add('active')
        input.value = 5 - item;
      })
    })
  })
}