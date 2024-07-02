jQuery(document).ready(function($) {
	//loader js
    setTimeout(function () {
      $('#loader').toggle();
    }, 2000);
    
	// Responsive Menu
	$('#menu').slicknav({
		'label' : '',
		'prependTo': '#mobile-menu',
		'brand': ''
	});

	// ScrollSpy Effect
    var scrollLink = $('.main-menu a');
    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 800 );
    });
    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 20;
        if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
    });

	//jQuery to collapse the navbar on scroll
	var scroll_start = 0;
	var startchange = $('.hero-wrap');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function(){
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top){
				$(".header-wrap").css('top','0');
				$(".header-wrap").css('background','#fff');
				$(".header-wrap").css('box-shadow','0px 2px 2px 0px rgba(210, 210, 210, 0.5)');
				$(".header-wrap .nav-wrap").removeClass('shadows');
				$("#mobile-menu").css('top','0');
			}else{
				$(".header-wrap").css('top','25px');
				$(".header-wrap").css('background','transparent');
				$(".header-wrap").css('box-shadow','none');
				$("#mobile-menu").css('top','25px');
				$(".header-wrap .nav-wrap").addClass('shadows');
			}
		})
	};
	// Button Hover JS
	$(function() {
		$('.btn-primary')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});

	//Team Slider
	$('#team-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	// counterup JS
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Blog Slider
	$('#blog-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	// Scroll To Top
    $(window).scroll(function(){
      if($(this).scrollTop() > 400){
        $("#scrolltotop").fadeIn(500);
      }else{
        $("#scrolltotop").fadeOut(500);
      }
    });
    $("#scrolltotop").click(function(){
      $("html,body").animate({scrollTop : 0},800);
    });

	// WOW JS
    new WOW({ mobile: false }).init();
});