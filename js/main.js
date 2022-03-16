const burgerButton = document.querySelector('.header__burger');
const headerSection = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.header__navigation-item');
const headerContainer = document.querySelector('.header__container');

window.onload = function() {
    let preloader = document.getElementById('preloader');
    setTimeout(() => 
    preloader.style = `
      opacity: 0;
      transition: 1s;
    `
    ,1000);
    
    setTimeout(() => preloader.style.display = 'none', 2000);
    // preloader.style.display = 'none';
};

let fullpage = new Swiper('.fullpage', {
    //my classes
    wrapperClass: 'fullpage__wrapper',
    slideClass: 'fullpage__screen',
    // ............. //
    direction: "vertical",
    slidesPerView: 'auto',

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // allowTouchMove: false,

});
fullpage.on('slideChange', function () {
    if(this.activeIndex === 4) {
        headerContainer.classList.add('show')
    } else {
        headerContainer.classList.remove('show')
    }
}); // це справжнiй костиль йопта

const contactUsLink = document.querySelectorAll('.contact-us');
let lastOfSlider = fullpage.slides.length;

(function() {
    contactUsLink.forEach((elem) => {
        elem.addEventListener('click', function(event) {
            event.preventDefault();
            
            fullpage.slideTo(lastOfSlider,400,lastOfSlider);
        });
    })
})();


// (function() {
//     'use strict';
  
//     const breakpoint = window.matchMedia( '(max-width:767px)' );
//     let fullpage;
  
//     const breakpointChecker = function() {
//       if ( breakpoint.matches === true ) {
//           if ( fullpage !== undefined ) fullpage.destroy( true, true );
//           return;
//       } else if ( breakpoint.matches === false ) {
//         return enableSwiper();
//       }
//     };
  
//     const enableSwiper = function() {
//         fullpage = new Swiper('.fullpage', {
//             wrapperClass: 'fullpage__wrapper',
//                 slideClass: 'fullpage__screen',
            
//                 direction: "vertical",
//                 slidesPerView: 'auto',
            
//                 keyboard: {
//                     enabled: true,
//                     onlyInViewport: true,
//                     pageUpDown: true,
//                 },
            
//                 mousewheel: {
//                     sensitivity: 1,
//                 },
            
//                 watchOverflow: true,
            
//                 speed: 800,
            
//                 observer: true,
//                 observeParents: true,
//                 observeSlideChildren: true,
//       });
//     };
  
//     breakpoint.addEventListener('change', breakpointChecker);
  
//     breakpointChecker();
  
//   })();



(function() {
    const burgerList = headerSection.classList;
    function toggleClass() {
        burgerList.toggle('active')
    };
    burgerButton.addEventListener('click', toggleClass);
})();


(function() {
    if(menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                headerSection.classList.remove('active')
            })
        })
    }
})();

