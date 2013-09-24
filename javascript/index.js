$(document).on("ready",function(){
	$("#contact").on("click",function(event){
		event.preventDefault();
		$(".form").modal();
	});
	$("#centerImages").on("mouseenter",function(event){
		$("#spiral_container").children('img').addClass("spiral");
	});
	$("#centerImages").on("mouseleave",function(event){
		$("#spiral_container").children('img').removeClass("spiral");
	});
});

