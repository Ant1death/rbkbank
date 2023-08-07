const changeActiveTags = (elements, className) => {
  const tags = document.querySelectorAll(elements);
  tags.forEach(element => {
    element.addEventListener('click', () => {
      tags.forEach(item => {
        item.classList.remove(className)
      });
      element.classList.add(className)
    })
  });
};

const changeActiveTag = () => {
  const wrap = document.querySelectorAll('[data-tag]');

  if (wrap.length == 0) return

  wrap.forEach(item => {
    const tags = item.querySelectorAll('[data-tag-item]');

    tags.forEach(element => {
      element.addEventListener('click', () => {
        // if (element.classList.contains('tag-active')) {
        //   tags.forEach(item => {
        //     item.classList.remove('tag-active')
        //   });
        // } else {
        tags.forEach(item => {
          item.classList.remove('tag-active')
        });
        element.classList.add('tag-active')
        //}
      })
    });
  });


};

const showMoreText = () => {
  const wrap = document.querySelectorAll('[data-text-more]');

  wrap.forEach(element => {
    const btn = element.querySelector('[data-text-more-open]');
    const text = element.querySelector('[data-text-more-text]');

    if (!btn || !text) return

    let heightStart = text.clientHeight;
    text.style.setProperty('max-height', heightStart + 'px');

    btn.addEventListener('click', () => {
      if (text.classList.contains('active')) {
        text.style.setProperty('max-height', heightStart + 'px');
        btn.innerHTML = 'Развернуть отзыв'
        setTimeout(() => text.classList.remove('active'), 600);
      } else {
        text.classList.add('active');
        btn.innerHTML = 'Свернуть отзыв';
        text.style.setProperty('max-height', text.scrollHeight + 'px');
      }
    })
  })
};

const showMoreComments = () => {
  const wrap = document.querySelectorAll('[data-comments]');

  wrap.forEach(element => {
    const open = element.querySelector('[data-comments-open]');
    const close = element.querySelector('[data-comments-close]');
    const content = element;

    if (!open || !close || !content) return

    let heightStart = open.offsetHeight;
    content.style.setProperty('max-height', heightStart + 'px');

    open.addEventListener('click', () => {
      content.classList.add('active');
      content.style.setProperty('max-height', content.scrollHeight + 'px');
    })

    close.addEventListener('click', () => {
      content.style.setProperty('max-height', heightStart + 'px');
      setTimeout(() => content.classList.remove('active'), 600);
    })
  })
};

const showMoreBlok = () => {
  const wrap = document.querySelectorAll('[data-blok-more]');

  wrap.forEach(element => {
    const open = element.querySelector('[data-blok-more-open]');
    const content = element.querySelector('[data-blok-more-content]');

    if (!open || !content) return;

    const textOpen = open.innerHTML;
    let textClose = 'Скрыть';
    if (open.hasAttribute('data-block-more-close')) textClose = open.getAttribute('data-block-more-close')

    let heightStart = content.offsetHeight;
    content.style.setProperty('max-height', heightStart + 'px');

    open.addEventListener('click', () => {
      if (content.classList.contains('active')) {
        content.style.setProperty('max-height', heightStart + 'px');
        open.innerHTML = textOpen
        setTimeout(() => content.classList.remove('active'), 600);
      } else {
        content.classList.add('active');
        open.innerHTML = textClose;
        content.style.setProperty('max-height', content.scrollHeight + 'px');
      }
    })
  })
};

const scrolling = () => {

  try {
    let link = document.querySelectorAll('a[href="#_"]');
    link.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        return false;
      });
    });
  } catch {}

  try {
    let links = document.querySelectorAll('[href^="#_"]'),
      speed = 0.3;

    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        let widthTop, hash, toBlock, start;

        widthTop = document.documentElement.scrollTop - 120,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;

        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          let progress = time - start,
            r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

          document.documentElement.scrollTo(0, r);


          if (r != widthTop + toBlock) {
            requestAnimationFrame(step);
          } else {
            //location.hash = hash;
          }
        }
      });
    });
  } catch {}

};

const changeRange = () => {
  const range = document.querySelectorAll('.range');
  if (range.length == 0) return;

  range.forEach(elem => {
    if (!elem.hasAttribute('data-range')) return;

    elem.style.width = elem.getAttribute('data-range') + '%'
  })
}