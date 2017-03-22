// $( document ).ready(function() {
 
//     $( "a" ).click(function( event ) {
 
//         alert( "Thanks for visiting!" );
 
//     });

//     $(".red").click(function() {
//         $(".red").animate({opacity : 0}, 600);

//     });

//     $(".blue").click(function() {
//         $(".blue").fadeOut("slow");
//     });


//     $(".orange").click(function() {
//         $(".orange").fadeOut("slow");
//     });

//     $(".orange").mouseover(function(){
//         $(".orange").effect("shake", {}, "fast");
//     });


//     $(".green").click(function() {
//         $(".green").animate({opacity : 0}, 600);
//     });


//     $(".yellow").click(function() {
//         $(".yellow").animate({down:"250px"; height:"400px"; width:"400px";});
//     });


// jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
//     this.each(function() {
//         $(this).css("position","relative"); 
//         for (var x=1; x<=intShakes; x++) {
//         $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
//     .animate({left:intDistance}, ((intDuration/intShakes)/2))
//     .animate({left:0}, (((intDuration/intShakes)/4)));
//     }
//   });
// return this;
// };


 
// });

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
  var items = products[i].split(':');
  var prices = Number(items[1]);
  total += price;
  itemText = items[0] + ' $' + prices;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);