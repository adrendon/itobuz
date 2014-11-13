$(document).ready(function(){

	//Disable # jump clicking
	$("body").on("click", "a[href='#']", function(evt) {return false;})
	//Disable # jump clicking
	$("body").on("click", "a[href='']", function(evt) {return false;})
	
		"use strict";
	
	
	
	/*----------------------------------------------------*/
	/*	Portfolio Section  
	/*----------------------------------------------------*/		
		
		var wall = new freewall(".portfolioContainer");
				wall.reset({
					selector: '.element-item',
					animate: true,
					cellW: 20,
					cellH: 200,
					//fixSize: 0,
					onResize: function() {
						wall.fitWidth();
					}
				});
				wall.filter(".video");
				$("#filters li a").click(function() {
					$("#filters li a").removeClass("active");
					var filter = $(this).addClass('active').data('filter');
					if (filter) {
						wall.filter(filter);
					} else {
						wall.unFilter();
					}
					//wall.fitWidth();
				});

				wall.fitWidth();
	



	
	
	/*----------------------------------------------------*/
	/*	Ripple Effects in Button - 
	/*----------------------------------------------------*/
	  var $ripples = $('.ripples');

	  $ripples.on('click', function(e) {

		var $this = $(this);
		var $offset = $this.parent().offset();
		var $circle = $this.find('.ripples__circle');

		var x = e.pageX - $offset.left;
		var y = e.pageY - $offset.top;

		$circle.css({
		  top: y + 'px',
		  left: x + 'px'
		});

		$this.addClass('is-active');

	  });

	  $ripples.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
		$(this).removeClass('is-active');
	  });
	


	
	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 300, // Distance from top before showing element (px)
				topSpeed: 1200, // Speed back to top (ms)
				animation: 'slide', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).click( function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();


		
		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		


		
	/*----------------------------------------------------*/
	/*	Animated scroll to top
	/*----------------------------------------------------*/
	$('#ScrollTop').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px'}, 6000);
        }
    );


	/*----------------------------------------------------*/
	/*	Navbar fixed to top when page scrolled down
	/*----------------------------------------------------*/
   $(window).bind('scroll', function() {
       //INITIALLY NAV WILL BE FIXED TO BOTTOM
       
       // START SCROLLING WHEN when scroll value = 900px - window height
       
			// FIX NAV TO TOP WHEN SCROLLED >=900PX []
       var navHeight = $(window).scrollTop();
       if (navHeight > 452) {
 					 $('#desktop-nav-div').addClass('fixed');
           $('#desktop-navigation-menu').addClass('fixed-nav');
       }
       else {
           $('#desktop-nav-div').removeClass('fixed');
           $('#desktop-navigation-menu').removeClass('fixed-nav');
       }
   });


	/*----------------------------------------------------*/
	/*	Animate show search box
	/*----------------------------------------------------*/
	$('#search a').click(function () {
		$("#search-box").toggleClass("search-box");
        return false; //prevent default click action from happening (page scroll to top)
    });


	/*----------------------------------------------------*/
	/*	Family Hover Details
	/*----------------------------------------------------*/
	// generalizeMouseEnter('#desktop-family-pic-holder-1 .fig');
	// generalizeMouseEnter('#desktop-family-pic-holder-2 .fig');

	

	/*----------------------------------------------------*/
	/*	BLOG PAGE  CLICK-TO-SHOW BUTTONS
	/*----------------------------------------------------*/
	$('.read-comment .comment-btn').click(function () {
			$(this).closest('.blog-posts').find('.comment-form').toggleClass('show-form');
			return false; //prevent default click action from happening (page scroll to top)
    });

	
      
	/*---------------------------------------------------------*/
	/* Navbar fixed to top when page scrolled down [BLOG PAGE]
	/*---------------------------------------------------------*/
	  $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 520;
             if ($(window).scrollTop() > navHeight) {
                 $('.blog-news .second #nav-div').addClass('fixed');
                 $('.blog-news .second #navigation-menu').addClass('fixed-nav');
             }
             else {
                 $('.blog-news .second #nav-div').removeClass('fixed');
                 $('.blog-news .second #navigation-menu').removeClass('fixed-nav');
             }
        });
	 
	 
	 /*---------------------------------------------------------------*/
	/*	LIKES and 'READ MORE' BUTTON APPEAR ON MOUSE-ENTER [BLOG PAGE]
	/*---------------------------------------------------------------*/
	$('#post-blogs figure').mouseenter(function () {
		$(this).find('img').addClass('enter');
		$(this).find('.likes').addClass('appear');
		$(this).find('.more-btn').addClass('appear');
	})
	
	$('#post-blogs figure').mouseleave(function () {
		$(this).find('img').removeClass('enter');
		$(this).find('.likes').removeClass('appear');
		$(this).find('.more-btn').removeClass('appear');
	})

		
 		
		/*----------------------------------------------------*/
		/*	HEADER HIDES ON SCROLL DOWN, APPEARS ON SCROLL UP
		/*----------------------------------------------------*/
		$("#desktop-nav-div").headroom();
		
		


		/*----------------------------------------------------*/
		/*	ACTIVATE PLANS ON HOVER (DESKTOP ONLY)
		/*----------------------------------------------------*/

		$('#prices .prices-plan').hover(function () {
					$("#prices .prices-plan").removeClass("active");
					$(this).toggleClass("active");
		});

		$('#prices .prices-plan').mouseleave(function () {
				$(this).removeClass("active");
		});
		


	/*----------------------------------------------------*/
	/*	Waypoint Animations
	/*----------------------------------------------------*/

	// if ($(window).width() >= 992) {  
	

	// $('#home').waypoint(function() {
	// 	setTimeout(function(){$('.home-figcaption li').addClass('animated fadeInLeft')},100);
 //    setTimeout(function(){$('#home .ipad').addClass('animated fadeInLeftBig')},100);
 //    setTimeout(function(){$('#home .iphone').addClass('animated fadeInRightBig')},100);
 //    setTimeout(function(){$('.home-figcaption').addClass('animated fadeInLeft')},100);
 //    }, { offset: '55%' });


	// $('#prices').waypoint(function() {
	// 	setTimeout(function(){$('.prices-plan.odd').addClass('animated fadeInLeft')},100);			
 //    setTimeout(function(){$('.prices-plan.even').addClass('animated fadeInRight')},100);			
 //    }, { offset: '30%' });

	// $('#contact').waypoint(function() {
	//  	setTimeout(function(){$('#contact .fa-heart').addClass('animated pulse')},600);
 //   	}, { offset: '50%' });

	// }

		/*----------------------------------------------------*/
		/*	PORTFOLIO HOVER FUNCTION
		/*----------------------------------------------------*/

		$('.portfolioContainer .element-item').hover( function(){
			 $(this).find('.project-details').toggleClass('hovered');
			 $(this).find('.project-details-overlay').toggleClass('hovered');
		   });



		/*----------------------------------------------------*/
		/*	IMG-LIQUID
		/*----------------------------------------------------*/
			 $(".imgLiquidFill").imgLiquid();
       
       


    /*----------------------------------------------------*/
		/*	SKILL PERCENTAGE READ FROM HTML [MEMBER-SINGLE PG]
		/*----------------------------------------------------*/
		$( ".percent-bar" ).each(function( index ) {
				var w = $(this).find(".clper").data("skill");
	 			$(this).find(".clper").css("width",w);
	 			$(this).parent(".skillset").find(".skillset-percent").html(w);
	  });

});/*=======================================================================/
/*===================== DOCUMENT.READY ENDS ===================================/
/*=======================================================================/






/*---------------------------------------------------------------*/
/*	LIGHTEN/DARKEN COLOR JS
/*---------------------------------------------------------------*/
// var lightenDarkenColor = function (col, amt) {
// 	var usePound = false;
// 	if (col[0] == "#") {
// 		col = col.slice(1);
// 		usePound = true;
// 	}
// 	var num = parseInt(col, 16);
// 	var r = (num >> 16) + amt;
// 	if (r > 255) {
// 		r = 255;
// 	} else if (r < 0) {
// 		r = 0;
// 	}
// 	var b = ((num >> 8) & 0x00FF) + amt;
// 	if (b > 255) {
// 		b = 255;
// 	} else if (b < 0) {
// 		b = 0;
// 	}
// 	var g = (num & 0x0000FF) + amt;
// 	if (g > 255) {
// 		g = 255;
// 	} else if (g < 0) {
// 		g = 0;
// 	}
// 	return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
// }




// function generalizeMouseEnter(element)
// {		
// 		$(element).click(function () 
// 		{	
// 			tr=$(this).find('figcaption').hasClass("clicked");// status for the current element						 
// 					$( "#desktop-family-pic-holder-1 figure" ).each(function( index ) 
// 					{						 				
// 						 		if($(this).find('figcaption').hasClass("clicked"))
// 								{
// 										$(this).parent().children("figure").toggleClass('fig');
// 										$(this).parent().children("figure").off("mouseenter");
// 										$(this).find('figcaption').toggleClass('clicked');
// 										$(this).find("img").toggleClass("details");
// 										$(this).parent().children("figure").toggleClass('disappear');						
// 										$(this).toggleClass("disappear");
// 								}										
// 				  });
// 					if(!tr)						
// 					{							  
// 						  $(this).parent().children("figure").removeClass('fig');
// 							$(this).parent().children("figure").off("mouseenter");
// 							$(this).find('figcaption').addClass('clicked');
// 							$(this).find("img").addClass("details");
// 							$(this).parent().children("figure").addClass('disappear');						
// 							$(this).removeClass("disappear");
// 					}
// 		});
// }
