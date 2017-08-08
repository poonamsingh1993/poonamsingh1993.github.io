$('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        300: {
            items: 2
        },
        700: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})