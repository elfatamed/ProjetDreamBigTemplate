(function ($) {
"use strict";

$('.slider-active').owlCarousel({
     loop:true,
     /*margin:10,*/
     nav:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1   /*3*/
         },
         1000:{
             items:1   /*5*/
         }
     }
 })


 $('.project-active').owlCarousel({
    loop:true,
   /* margin:10,*/
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3   /*3*/
        },
        1000:{
            items:4 /*5*/
        }
    }
})


$('.popup-video').magnificPopup({

    type: 'iframe',
    // other options
  });


  $('.brand-active').owlCarousel({
    loop:true,
   /* margin:10,*/
    nav:false,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3   /*3*/
        },
        1000:{
            items:6 /*5*/
        }
    }
})

})(jQuery);	