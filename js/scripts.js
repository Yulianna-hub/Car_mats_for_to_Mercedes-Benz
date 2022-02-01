const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 60,
    centeredSlides: true,
    slideToSlides: true,
    toggle: true,
    // breakpoints: {
    //     //cleanStyles:true,
    //     // when window width is >= 320px
    //     320: {
    //       //direction: "vertical",
    //       slidesPerView: 1,
    //       //spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       //direction: "vertical",
    //       slidesPerView: 1,
    //       //spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       //direction: "vertical",
    //       slidesPerView: 2,
    //       //spaceBetween: 40
    //     }
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display_button');

buttonModal.addEventListener('click', ()=> {
  modalWindow.classList.add('active');
});
modalWindow.addEventListener('click', (e)=> {
  const isModal = e.target.closest('.modal_inner');
  const closeBtn = e.target.closest('.close-btn');
  if (!isModal || closeBtn) {
    modalWindow.classList.remove('active');
  }
});
