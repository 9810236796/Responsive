
$(document).ready(function(){
	/*FOR FULL WIDTH MENU*/
	$(".bars a").click(function(){
		$(".menu").toggleClass("active");
	});

	/*FOR CUSTOM ACCORDION*/
	$("li.q").click(function(){
		$(this).next().slideToggle(500).siblings("li.a").slideUp();
		$(".arrow").toggleClass("rotate");

	});

	/*FOR SLIDING MENU*/
	$(".search-icon").click(function(){
		$(".search").fadeIn();
	});

	$(".close").click(function(){
		$(".search").fadeOut();
	});

	/*FOR VIDEOPLAYERBOX*/
	$(".pointer").click(function(){
		$(".aside_container").toggleClass("active");
	});

	//FOR SCROLL DOWN CIRCLE
	$(window).scroll(function(){
		if($(this).scrollTop()>100 ){
			$(".circle").addClass("active");
		}else{
			$(".circle").removeClass("active");
		}
	});



});