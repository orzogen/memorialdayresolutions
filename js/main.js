$(document).ready(function(){
	$("header").css({'height': $(window).height() + 'px'});
	$(".content").css({'height': $(window).height() + 'px'});
	
	$(window).resize(function(){
		$("header").css({'height': $(window).height() + 'px'});
		$(".content").css({'height': $(window).height() + 'px'});
	});
	
  $(window).scroll(function(){
//  if the page is not scrolled to all the way to the top, hide the arrow
  	if(document.documentElement.scrollTop != 0){
  	  $(".downward-arrow").css({'visibility': 'hidden'}); 
  	}
//  otherwise, show it
  	if(document.documentElement.scrollTop == 0){
  	  setTimeout(function(){
//        this timeout prevents the arrow from being shown when the page briefly hits the 0 point when 'bouncing' upward on macs
  	  		if(document.documentElement.scrollTop == 0){
  	  			$(".downward-arrow").css({'visibility': 'visible'});
  	  		}
  	  	}, 50);
  	}
  });
});
