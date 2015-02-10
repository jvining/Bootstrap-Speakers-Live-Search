// Bootstrap Speakers Live Search
$(document).ready(function(){
	$(".search").keyup(function(){
		var str = $(".search").val();
		$(".speaker-listing").each(function(index){
			if($(this).attr("id")){
				if(!$(this).attr("id").match(new RegExp(str, "i"))){
					$(this).fadeOut("10");
 				}else{
					$(this).fadeIn("10");
 				}
			}
		});		
	});
});
