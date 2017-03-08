$( document ).ready(function() {
 
    $( "a" ).click(function( event ) {
 
        alert( "Thanks for visiting!" );
 
    });

    $(".red").click(function() {
        $(".red").animate({opacity : 0}, 600);

    });

    $(".blue").click(function() {
        $(".blue").fadeOut("slow");
    });


    $(".orange").click(function() {
        $(".orange").fadeOut("slow");
    });


    $(".green").click(function() {
        $(".green").animate({opacity : 0}, 600);
    });


    $(".yellow").click(function() {
        $(".yellow").fadeOut("slow");
    });



 
});