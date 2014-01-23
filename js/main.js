$(document).ready(function(){
	$("header").css({'height': $(window).height() + 'px'});
	$(".content").css({'height': $(window).height() + 'px'});
	
	$(window).resize(function(){
		$("header").css({'height': $(window).height() + 'px'});
		$(".content").css({'height': $(window).height() + 'px'});
	});
	
  $(window).scroll(function(){

  	if(document.documentElement.scrollTop > 0){
  	  $(".downward-arrow").css({'visibility': 'hidden'}); 
  	}

  	if(document.documentElement.scrollTop <= 0){
  	  $(".downward-arrow").css({'visibility': 'visible'});
  	}
  });
});
