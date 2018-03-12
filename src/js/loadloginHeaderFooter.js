define(["jquery"],function(){
	/*加载头部*/
	$("header").load("/html/loginheader.html",function(){
		$("#li_change1").mouseenter(function(){
			$("#li_change1 ul").css({"display":"block"})
		}).mouseleave(function(){
			$("#li_change1 ul").css({"display":"none"})
		});
		$("#li_change2").mouseenter(function(){
			$("#li_change2 ul").css({"display":"block"})
		}).mouseleave(function(){
			$("#li_change2 ul").css({"display":"none"})
		});
		$(".top_right").on("mouseenter","li",function(){
			$(this).css({
				"text-decoration":"underline"
			})
		}).on("mouseleave","li",function(){
			$(this).css({
				"text-decoration":"none"
			})
		});
		$(".li_img").mouseenter(function(){
			$(".img_div").show();
		}).mouseleave(function(){
			$(".img_div").hide()
		})
	});
	//加载尾部
	$("footer").load("/html/loginfooter.html",function(){

	})
})