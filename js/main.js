$(document).ready(function () {

    $(".arrivals__card .card__img").click(function () {


        $(this).parent().toggleClass("arrivals__card__active");


    });

    $(".arrivals__card .card__name").click(function () {


        $(this).parent().toggleClass("arrivals__card__active");


    });
    $("  .like i").on("click", function (e) {
        e.preventDefault();
        var i = $(this).children();
        var This = $(this);
        if (This.hasClass("far")) {
            This.removeClass("far");
            This.addClass("fas");

        }
        else if (This.hasClass("fas")) {
            This.removeClass("fas");
            This.addClass("far");
        }
    });

    $(".plus").click(function () {

        var z = $(".shop__bucket__number").text();
        z = Number(z);
        z = z + 1;
        if (z > 0) {
            $(".shop__bucket").css({ "color": " #ff5912" });
            $(this).css({ "color": " #ff5912" });

        }
        var stringnum = z.toString()
        $(".shop__bucket__number").text(stringnum);

    });



});
//SLIDER
$(document).ready(function () {
    var owl = $("#index__slider").owlCarousel({
        loop: true,
        pagination: false,
        autoplay: false,
        autoplayTimeOut: 2000, //5sec
        items: 1,
        // autoplay:true,
        dotsClass: "arrivals__dots  ",
        dotClass: "arrivals_dot  ",

        // animateIn:"animated rollIn"/true,
        // animateOut:"animated rollIn"/true,
    });

});
//Star Raitings
$(document).ready(function () {

    $(document).ready(function () {
        var bul = 0;

        $(".raintg__list li").click(function () {
            var This = $(this).children();
            if ($(".active").length > 0) {
                $(".active").toggleClass("active");
            }
            var DataAttr = $(this).data().index;
            for (var i = 1; i <= (DataAttr); i++) {
                $("[data-index='" + i + "']").addClass("active");
            }
            if (DataAttr == 1) {
                if ($(this).hasClass("active") && bul == 0) {
                    $(this).removeClass("active");
                    bul = 1;
                } else {
                    $(this).addClass("active");
                    bul = 0;
                }
            }


        })
    });



});
//ADD SHOP BUCKET
$(document).ready(function () {

    $(".best__title").click(function () {


        $(this).parent().parent().parent().toggleClass("diw__active");

    });
    $(".best__tocard").click(function () {


        var z = $(".shop__bucket__number").text();
        z = Number(z);
        z = z + 1;
        if (z > 0) {
            $(".shop__bucket").css({ "color": " #ff5912" });
            $(this).css({ "color": " #ff5912" });

        }
        var stringnum = z.toString()
        $(".shop__bucket__number").text(stringnum);
    });



});

// ------------------------------------------------
// PRODUCT PAGE
// select photo

$(document).ready(function () {


    $(".all__photos li").click(function () {
        var mySrc = $(this).children().attr('src');
        if ($(".active__photo").length > 0) {
            $(".active__photo").toggleClass("active__photo");
        }
        $(this).toggleClass("active__photo");

        $('.single__photo img').attr('src', mySrc);
    });



});

$(document).ready(function () {


    $(".size__list li").click(function () {
        var mySrc = $(this).children().attr('src');
        if ($(".active__size").length > 0) {
            $(".active__size").toggleClass("active__size");
        }
        $(this).toggleClass("active__size");


    });



});


$(document).ready(function () {

    $(".showPro__plus").click(function () {

        var z = $(".shop__bucket__number").text();
        z = Number(z);
        z = z + 1;
        if (z > 0) {
            $(".shop__bucket").css({ "color": " #ff5912" });
            $(this).css({ "color": " #ff5912" });

        }
        var stringnum = z.toString()
        $(".shop__bucket__number").text(stringnum);

    });

});

$(document).ready(function () {

    $(".plus__quantity").click(function () {

        var z = $(".quantity__count").text();
        z = Number(z);

        if ((z = z + 1) > 0) {
            $(".quantity__count").css({ "color": " #ff5912" });
        }
        var stringnum = z.toString()
        $(".quantity__count").text(stringnum);

    });

    $(".minus__quantity").click(function (event) {



        var z = $(".quantity__count").text();
        z = Number(z);

        if ((z = z - 1) == 0) {
            $(".quantity__count").css({ "color": " black" });
        }

        var stringnum = z.toString()
        if ((z = z - 1) < 0) {
            stringnum = "0";
        }
        $(".quantity__count").text(stringnum);

    });



});

//Categories
$(document).ready(function () {


    $(".category__list li").click(function () {
        if ($(".category__active").length > 0) {
            $(".category__active").toggleClass("category__active");
        }
        $(this).toggleClass("category__active");

    });



});

//sizes
$(document).ready(function () {

    $(".sizes__list li").click(function () {

        var This = $(this).children();

        // $(".sizes__boxactive").toggleClass("sizesbox__active");

        $(This).toggleClass("sizes__box__active");
    });

});


//brands
$(document).ready(function () {

    $(".brands__list li").click(function () {

        var This = $(this).children();

        $(This).toggleClass("brand__box__active");
    });

});
//for mobile menu "div"
$(document).ready(function () {
    $(".mobile__icon--bars__div").click(function () {
        //  $(".body .up").css({ display: "none" });
        //  $(".mobile__wrap").css({display:"block"});

        $(".mobile__wrap").css({
            right: 0
        });

        $('html, body').css('overflow', 'hidden'); 
    });

    $(".mobile__wrap__close").click(function () {
        $(".mobile__wrap").css({
            right: ''
        });
        $('html, body').css('overflow', 'visible'); 

});

});