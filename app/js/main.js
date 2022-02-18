const burgerButton = document.querySelector('.header__burger');
const headerSection = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.header__navigation-item');


let fullpage = new Swiper('.fullpage', {
    //my classes
    wrapperClass: 'fullpage__wrapper',
    slideClass: 'fullpage__screen',

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