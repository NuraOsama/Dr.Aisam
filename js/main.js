(function ($) {

    "use strict";
    new WOW().init();

      //preloader
      var  mainStatus  = $('#status'),
      mainBody = $('body'),
      mainPreloader  = $('#preloader');
 
      window.onload = function() {
       mainStatus.fadeOut();
       mainPreloader.delay(500).fadeOut('slow');
       mainBody.delay(500)
      }

       //sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('.navbar-light').addClass('sticky-top').animate({

            }, 4000);

        } else {
            $('.navbar-light').removeClass('sticky-top').animate({

            }, 4000);

        }
    });
  


    //scroll
   $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 100;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active').siblings().removeClass('active');
        }
        
      })
      
    }) 
  })

    //slider
    $('.owl-slider').owlCarousel({
       
        items:1,
        lazyLoad:true,
        loop:true,
        smartSpeed:500,
        nav:true,
        dots:true,
        autoplay:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
       
    });

    //first lignhgallery 
 $(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true,
    useLeft:true,	
    thumbnail:true

  });
});
$(document).ready(function() {
  var $lightgallery = $('#lightgallery');
  $lightgallery.lightGallery();
  var data = $lightgallery.data('lightGallery');
  
  $lightgallery.on('onBeforeSlide.lg', function(event, prevIndex, index){
    var img = data.$items.eq(index).attr('data-src');
    $('.lg-backdrop').css('background-image', 'url('+img+')');
  });
});

//counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 30000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});
  
  //testimonials
  $('.owl-testimonials').owlCarousel({

       items:3,
       nav:false,
       dots:true,
       margin:30,
       lazyLoad:true,
       loop:true,
       smartSpeed:500,
       autoplay:true,
       responsiveClass:true,
       responsive:{
           0:{
               items:3,
           },
          
             
             1440 : {
     
               items:3,
              
             },
             1024 : {
     
              items:3,
             
            },
     
             992 : {
     
               items:1,
              
             },
            
             768: {
     
               items:1,
                  
              },
              575: {
     
                items:1,
                   
               },
               425: {
     
                items:1,
                   
               },
               375: {
     
                items:1,
                   
               },
               320: {
     
                items:1,
                   
               }, 
               200: {
     
                items:1,
                   
               },                   
       }
     
  });

  //scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
     $(".auto-scroll-to-top").addClass("visible");                    
   } else {
       $(".auto-scroll-to-top").removeClass("visible");
   }        
  });
   
 $(".auto-scroll-to-top").click(function(){
   $("html, body").animate({scrollTop: 0}, 1000);
 });

 //nice scroll
 $("body").niceScroll({
  cursorcolor:"#207FDC",
  cursorborderradius:6,
  cursorborder:'none',
  zindex:900,
  scrollspeed:80,
  });

})(jQuery);