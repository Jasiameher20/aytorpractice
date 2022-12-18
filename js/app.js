$(function(){

//'*BANNER SLIDER
$('#banner').slick({
   arrows:false,
   dots:true,
});

$('#latest_news').slick({
  arrows:false,
  dots:true,
});

$('.wrapper_slider').slick({
  slidesToShow: 2,
  arrows:false,
  dots:true,
});

$('.news_slider').slick({
  slidesToShow: 4,
  arrows:false,
  dots:true,
});


$('.seler_slider').slick({
  slidesToShow: 4,
  arrows:false,
  dots:true,
});


$(".product_slider").slick({
   slidesToShow: 4,
   prevArrow: '.arrows .left',
   nextArrow: '.arrows .right',

   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          
        }
      },

      {
         breakpoint: 991,
          settings: {
           slidesToShow: 3,
           
         }
       },
       
      {
         breakpoint: 767,
          settings: {
           slidesToShow: 2,
           
         }
       },
       {
         breakpoint: 450,
          settings: {
           slidesToShow: 1,
           
         }
       },
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],

});

//*COUNT DOWN JS
$('.countdown').countdown("2022/12/20 11:00:00", function(e){
  let time = e.strftime('%D days %H:%M:%S');
  $('.countdown .days').html(e.strftime('%D'));
  $('.countdown .hours').html(e.strftime('%H'));
  $('.countdown .mins').html(e.strftime('%M'));
  $('.countdown .sec').html(e.strftime('%S'));


});

new VenoBox({
  selector: ".venobox",
});


//*SHOP_DETAIL PAGE
$(".top_img_slider").slick({
 arrows: false,
 asNavFor: '.bottom_img_slider',

});

$(".bottom_img_slider").slick({
  arrows: false,
  slidesToShow:5,
  asNavFor: '.top_img_slider',

 });

});