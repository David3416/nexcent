// console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  (function () {
    const header = document.querySelector('.header');
    if (!header) return;

    const headfones_img = header.querySelector('.headfones_img');
    const burger_class = header.querySelector('.burger_class');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 56) {
        // console.log("hi!");
        header.classList.add('header_active');
        headfones_img.src = '/img/ic_headfones_blue.gif';
        burger_class.classList.add('burger_active');
      } else {
        header.classList.remove('header_active');
        headfones_img.src = '/img/ic_headfones_white.gif';
        burger_class.classList.remove('burger_active');
      }
    })
  }());

  const dropdown = document.querySelector('.lang_dropdown');

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  const menu = document.querySelector('.lang_menu');
  const currentText = document.querySelector('.lang_span');

  console.log('menu:', menu);
  console.log('currentText:', currentText);

  menu.addEventListener('click', (e) => {
    // console.log('clicked:', e.target);

    if (e.target.classList.contains('lang_menu_item')) {
      // console.log('TEXT:', e.target.textContent);

      currentText.textContent = e.target.textContent;
    }
  });


  // --------TRANSLATIOТS START-----------//

  const translations = {
    RU: {
      booking: "БРОНИРОВАНИЕ",
      concept: "Концепция"
    },
    EN: {
      booking: "BOOKING",
      concept: "Concept"
    }
  };

  function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(el => {
      const key = el.dataset.key;
      el.textContent = translations[lang][key];
    });
  }
  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang_menu_item')) {
      const lang = e.target.textContent;

      currentText.textContent = lang;
      setLanguage(lang);
    }
  });
  // --------TRANSLATIOТS END-----------//




  /*-- BURGER MENU START ----------------------*/
  const burgerBtn = document.querySelector('.burger_class');
  const burgerMenu = document.querySelector('.burger_menu');
  const closeBtn = document.querySelector('.close_btn');
  const overlay = document.querySelector('.burger_overlay');

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  });

  /*---- BURGER MENU END ----------------------*/


  //!----------- ВЕРХНИЙ СЛАЙДЕР КНОПКИ START ------------>

  const track = document.querySelector('.slider_track_img');
  const slides = document.querySelectorAll('.slider_track_img img');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let index = 0;
  console.log(slides.length);
  console.log('index:' + index);
  function updateSlider() {
     console.log("!!!!"+index);
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener('click', () => {
    
    index = (index + 1) % slides.length;
    // console.log('index:'+ index);
    updateSlider();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

});
//!----------- ВЕРХНИЙ СЛАЙДЕР КНОПКИ END ------------>