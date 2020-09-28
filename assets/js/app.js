$(function() {

    let header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    }
    )

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    })

    $(".nav__link").on("click", function(event) {
        event.preventDefault();
        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
    }
    )


    /* Collapse */
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    })

    /* Slider */
    $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
          slidesToScroll: 1
    });











})
