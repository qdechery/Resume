$( document	).ready(function() {
	
	//Global Scope vars for revealOnScroll function
	var windowHeight = $(window).height(),
		windowScrollPosTop = $(window).scrollTop(),
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	
	//On Document Ready Functions
	menuToggle();
	smoothScroll(1000);
	revealOnScroll();
	growOnScroll();
	skillOnScroll();

}); //END DOCUMENT READY FN

//Smooth Scroll on ID Anchor Tag
function smoothScroll(duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

//Toggle Menu on Mobile View
function menuToggle() {
	$('.menu').on('click', function(){
		$('nav').toggleClass('showing');
	});
}

//revealOnScroll
function revealOnScroll() {

	$.fn.revealOnScroll = function(direction) {
		return this.each(function() {
			var objectOffset = $(this).offset(),
			objectOffsetTop = objectOffset.top;
	
			if (!$(this).hasClass("hide")) {
				if (direction == "right") {
					$(this).css({
						"opacity" : 0,
						"right" : "700px"
					});
				} else {
					$(this).css({
						"opacity" : 0,
						"right" : "-700px"
					});
				}
				$(this).addClass("hide");
			}
		
			if (!$(this).hasClass("animation-complete")) {
				if (windowScrollPosBottom > objectOffsetTop) {
					$(this).animate({"opacity" : 1, "right" : 0}, 1000).addClass("animation-complete");
				}
			}
		});
	}
} // end revealOnScroll function here
	
//growOnScroll
function growOnScroll() {

	$.fn.growOnScroll = function() {
		return this.each(function() {
			var objectOffset = $(this).offset(),
			objectOffsetTop = objectOffset.top;
			if (!$(this).hasClass("hide")) {
				$(this).addClass("shrink").addClass("hide");
			}
			if (!$(this).hasClass("animation-complete")) {
				if (windowScrollPosBottom > objectOffsetTop) {
					$(this).css("transition", "all 1s ease-in-out");
					$(this).addClass("grow").addClass("animation-complete");
				}
			}
		});
	}
} // end growOnScroll function here

//skillOnScroll
function skillOnScroll() {

	$.fn.skillOnScroll = function() {
		return this.each(function() {
			var objectOffset = $(this).offset(),
			objectOffsetTop = objectOffset.top;
			if (!$(this).hasClass("hide")) {
				$(this).addClass("shrink").addClass("hide");
			}
			if (!$(this).hasClass("animation-complete")) {
				if (windowScrollPosBottom > objectOffsetTop) {
					$(this).css("transition", "all .5s ease-in-out");
					$(this).addClass("grow").addClass("animation-complete");
				}
			}
		});
	}
} // end skillOnScroll function here

	$(window).scroll(function(){
		windowHeight = $(window).height(),
		windowScrollPosTop = $(window).scrollTop(),
		windowScrollPosBottom = windowHeight + windowScrollPosTop;	
		
		var homeOffset = $(".home").offset(),
			homeTop = homeOffset.top,
			headerBottom = $('header').height(); 
		if (headerBottom < homeTop) {
			$(".home").removeClass("hidden");
		} else {
			$(".home").addClass("hidden");
			}

		$(".myface").growOnScroll(); 
		$("#aboutme p").revealOnScroll("right");
		$(".skills").skillOnScroll("right");
		

	
	});
	

