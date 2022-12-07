"use strict"
const rewiesSwiper = document.querySelector('.swiper-rewies')
if (rewiesSwiper) {
   const swiper = new Swiper('.swiper-rewies', {
      // Optional parameters
      autoheight: true,
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         clickable: true
      },


   });
}


$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})