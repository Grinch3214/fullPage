const burgerButton = document.querySelector('.header__burger');
const headerSection = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.header__navigation-item');
const headerContainer = document.querySelector('.header__container');
const preloader = document.getElementById('preloader');

//? ---- Preload on main page ----
if (preloader) {
    window.onload = function() {
        if (!window.localStorage.getItem('preloaderIsShown')) {
            preloader.style = `
            visibility: visible;
            `;
            setTimeout(() => preloader.style = `
                opacity: 0;
                transition: 0.8s;
                visibility: hidden;
            `, 800);
            window.localStorage.setItem('preloaderIsShown', true);
        } else {
            preloader.style.display = 'none'
        }
    };
};

let fullpage = new Swiper('.fullpage', {
    //! my classes
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

//? ---- add black line on header after 4 screen ----
fullpage.on('slideChange', function () {
    if(this.activeIndex >= 4) {
        headerContainer.classList.add('show')
    } else {
        headerContainer.classList.remove('show')
    }
}); // це справжнiй костиль йопта

//? ---- Click on button Contact Us -- main page ----
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

//? ---- Click to contact on other pages of the site ----
let anotherClickToContact = document.querySelectorAll('.second-contact');

(function() {
    anotherClickToContact.forEach((el) => {
        el.addEventListener('click', function(event) {
            event.preventDefault();
            window.sessionStorage.setItem('clickTo', 'trueClick');
            location.href='/'
        })
    })
})();

(function() {
    if(window.sessionStorage.clickTo) {
        fullpage.slideTo(lastOfSlider,400,lastOfSlider);
        window.sessionStorage.clear('clickTo');
    }
})();

//! swiper destroy
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

