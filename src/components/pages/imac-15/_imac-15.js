const fixedMenu = () => {
  let headerWrapper = document.querySelector('.course-anchors');
  const header = document.querySelector('.header');
  const burger = document.querySelector('.course-anchors__burger');

  if (!headerWrapper || !header || !burger) return;

  let scrollTop = headerWrapper.getBoundingClientRect();
  document.querySelector('.main').style.overflow = 'visible';
  scrollTop = headerWrapper.getBoundingClientRect();
  const offset = window.pageYOffset + scrollTop.top - 50;

  window.onscroll = () => {
    if (window.innerWidth < 901) return;

    if (window.pageYOffset > offset) {
      headerWrapper.classList.add('course-anchors--fixed');
      burger.classList.add('course-anchors__burger-open');

      if (burger.querySelector('.burger-menu').classList.contains('open')) header.style.zIndex = 999;
      else header.style.zIndex = 999;
    } else {
      headerWrapper.classList.remove('course-anchors--fixed');
      burger.classList.remove('course-anchors__burger-open');

      header.style.zIndex = 999;

      if (burger.querySelector('.burger').classList.contains('open')) {
        headerWrapper.classList.remove('course-anchors--clear');
        burger.querySelector('.burger-menu').classList.remove('open')
      }
    }
  }
};

const openBurger = () => {
  const burger = document.querySelectorAll('.burger-menu')
  let anchors = document.querySelector('.course-anchors')
  const header = document.querySelector('.header');

  if (!anchors || !header || burger.length == 0) return;

  burger.forEach(elem => {
    elem.addEventListener('click', (e) => {


      if (elem.classList.contains('open')) {
        document.querySelector('.burger-menu').classList.remove('open')
        if (anchors) {
          anchors.classList.remove('course-anchors--clear');
          header.style.zIndex = 9;
        }
      } else {
        document.querySelector('.burger-menu').classList.add('open')
        if (anchors) {
          anchors.classList.add('course-anchors--clear');
          header.style.zIndex = 999;
        }
      }
    })
  })
}

const spinnerBtn = (e) => {
  const btn = document.querySelectorAll('.dflt-bttn.bttn-spinner')
  if (btn.length == 0) return;

  btn.forEach(elem => {
    elem.addEventListener('click', () => {
      elem.querySelector('.dflt-bttn__text').style.display = 'none';
      elem.querySelector('.spinner').style.display = 'flex';
      elem.classList.add('dflt-bttn__spinner');

      setTimeout(() => {
        elem.querySelector('.dflt-bttn__text').style.display = 'flex';
        elem.querySelector('.spinner').style.display = 'none';
        elem.classList.remove('dflt-bttn__spinner');
      }, 3000);

    })
  })
}

const showSpinnerNavigation = () => {
  let headerWrapper = document.querySelector('#paginationCourse');
  const spinner = document.querySelector('.course-spinner');
  let lastPos = 0;
  const body = document.querySelector('body');
  const cards = document.querySelector('.content-grid__table-list');

  if (!headerWrapper || !spinner || !cards) return;

  if ('onwheel' in document) {
    body.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    body.addEventListener("mousewheel", onWheel);
  } else {
    body.addEventListener("MozMousePixelScroll", onWheel);
  }

  function onWheel(e) {
    let scrollTop = headerWrapper.getBoundingClientRect();
    if (!(window.pageYOffset <= lastPos)) {

      if ((scrollTop.top < window.innerHeight) && scrollTop.top > 0) {
        let card = cards.querySelector('.course-hidden');
        if (!card) return;

        headerWrapper.classList.add('course-hidden')
        spinner.classList.add('course-spinner--show')
        setTimeout(() => {
          headerWrapper.classList.remove('course-hidden')
          spinner.classList.remove('course-spinner--show')
          card.classList.remove('course-hidden')
        }, 1500);
      }
    }

    lastPos = window.pageYOffset;
  }
}