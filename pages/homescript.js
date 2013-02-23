$(document).ready(function(){
	
	$(".subtext").hide();
	
	$(".sell").mouseenter(function(){
		$(".buy").fadeTo("slow",0.5);
		$(".sell").fadeTo("slow",1);
		$("#ad").fadeTo("slow",1);
		$("#offers").fadeTo("slow",0);
		
	});
	$(".buy").mouseenter(function(){
		$(".sell").fadeTo("slow",0.5);
		$(".buy").fadeTo("slow",1);
		$("#offers").fadeTo("slow",1);
		$("#ad").fadeTo("slow",0);
	});
});

