$(document).ready(function(){
    let owl = $('#portfolio-carousel'),
        url = null,
        prev = $('#portfolio-btn-prev'),
        next = $('#portfolio-btn-next');
    
    owl.owlCarousel({
        //center: true,
        loop: true,
        items: 1,
        dots: false,
        //autoWidth: true,
        nav: true,
        navText: ["<img src='./assets/img/prev.svg'>", "<img src='./assets/img/next.svg'>"],
        stagePadding: 400,
        margin: 64,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            1440:{
                items: 2,
            },
        },
    });
});







$(document).ready(function(){
    let owl = $('#reviews-carousel'),
        url = null,
        prev = $('#reviews-btn-prev'),
        next = $('#reviews-btn-next');
    
    owl.owlCarousel({
        center: true,
        loop: true,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<img src='./assets/img/prev.svg'>", "<img src='./assets/img/next.svg'>"],
        stagePadding: 400,
        margin: 64,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,

            },
            1440:{
                items: 1,
            },
        },

    });
});

;(function gallery (){
    var buttonPrev = document.querySelector('#btn--prev');
    var buttonNext = document.querySelector('#btn--next');
    var initImgNumber = 1;
    var maxImgNumber = 4;
    
    buttonPrev.addEventListener('click', moveBackward);
    buttonNext.addEventListener('click', moveForward);
    
    function moveBackward (){
        let galleryImg = document.querySelector('#gallery-img');
        initImgNumber--;
        if ( initImgNumber == 0 ){
            initImgNumber = maxImgNumber;
        };
        galleryImg.setAttribute('src', './assets/img/gallery/pic' + initImgNumber + '.jpg');
    };
    
    function moveForward (){
        let galleryImg = document.querySelector('#gallery-img');
        initImgNumber++;
        if ( initImgNumber > maxImgNumber ){
            initImgNumber = 1;
        };
        galleryImg.setAttribute('src', './assets/img/gallery/pic' + initImgNumber + '.jpg');
    };
})();

