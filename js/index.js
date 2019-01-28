$( document ).ready(function() {
    console.log( "ready!" );


    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        dotsEach:3,
        margin:30,
        responsive:{
            600:{
                items:4
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:30,
        responsive:{
            600:{
                items:4
            }
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();

        } else {
            $('#scroll').fadeOut();
        }

    });
    $('#scroll').click(function(){
        $("html, body").animate( {scrollTop: 0 }, 1500);
        return false;
    });
























});