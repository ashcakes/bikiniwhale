$(document).on("ready",function(){
	$("#contact").on("click",function(event){
		event.preventDefault();
		$(".form").modal();
	});
	$("#spiral").on("mouseenter",function(event){
		$("#spiral").addClass("spiral");
	});
	$("#spiral").on("mouseleave",function(event){
		$("#spiral").removeClass("spiral");
	});
});

