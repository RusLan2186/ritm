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
      $('body').toggleClass('lock');
   })
})


$('.back').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back').addClass('active');
   } else {
      $('.back').removeClass('active');
   }
});