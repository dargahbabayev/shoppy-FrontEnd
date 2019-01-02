$(document).ready(function () {

    $(".arrivals__card .card__img").click(function () {


        $(this).parent().toggleClass("arrivals__card__active");


    });

    $(".arrivals__card .card__name").click(function () {


        $(this).parent().toggleClass("arrivals__card__active");


    });
    $(" .card__active__list .like i").on("click", function (e) {
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

    $(".arrivals__card .plus").click(function () {

        var z = $(".shop__bucket__number").text();
        z = Number(z);
        z = z+1;
        if(z>0){
            $(".shop__bucket").css({"color": " #ff5912"});
            $(this).css({"color":" #ff5912"});

        }
        var stringnum=z.toString()
       $(".shop__bucket__number").text(stringnum);

    });



});

$(document).ready(function () {
    var owl = $("#index__slider").owlCarousel({
        loop: true,
        pagination: false,
        autoplay: true,
        autoplayTimeOut: 2000, //5sec
        items: 1,
        // autoplay:true,
        dotsClass: "arrivals__dots  ",
        dotClass: "arrivals_dot  ",
      
        // animateIn:"animated rollIn"/true,
        // animateOut:"animated rollIn"/true,
    });

});

$(document).ready(function(){

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
                if ($(this).hasClass("active")&&bul==0) {
                    $(this).removeClass("active");
                    bul=1;
                } else {
                    $(this).addClass("active");
                    bul=0;
                }
            }

          
        })
    });



});

$(document).ready(function () {

    $(".best__title").click(function () {


        $(this).parent().parent().parent().toggleClass("diw__active");

    });
    $(".best__tocard").click(function () {


       var z = $(".shop__bucket__number").text();
        z = Number(z);
        z = z+1;
        if(z>0){
            $(".shop__bucket").css({"color": " #ff5912"});
            $(this).css({"color":" #ff5912"});

        }
        var stringnum=z.toString()
       $(".shop__bucket__number").text(stringnum);
    });

    

});