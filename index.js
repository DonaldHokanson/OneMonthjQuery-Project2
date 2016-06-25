var main =function(){
	
	$(".question").click(function(){
		$(this).next().slideToggle('slow');
		$(this).parent().animate({borderWidth: "20px"})
		$(this).children().toggleClass('collapse');
	});
};



$(document).ready(main)