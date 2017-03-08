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

    $(".orange").mouseover(function(){
        $(".orange").effect("shake", {}, "fast");
    });


    $(".green").click(function() {
        $(".green").animate({opacity : 0}, 600);
    });


    $(".yellow").click(function() {
        $(".yellow").animate({down:"250px"; height:"400px"; width:"400px";});
    });


jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css("position","relative"); 
        for (var x=1; x<=intShakes; x++) {
        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
    .animate({left:intDistance}, ((intDuration/intShakes)/2))
    .animate({left:0}, (((intDuration/intShakes)/4)));
    }
  });
return this;
};


 
});