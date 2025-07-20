$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})

$( function() {
    $( "#accordion" ).accordion();
} );