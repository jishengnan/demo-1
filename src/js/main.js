require.config({
    paths: {
        'swiper': './libs/swiper',
        'scroll': './libs/bscroll.min',
    }
});
require(['scroll', 'swiper'], function(scroll, Swiper) {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        direction: "horizontal",
        // autoplay: {
        //     delay: 2000,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    var scrolls = new scroll('.show', {
        click: true
    })
});