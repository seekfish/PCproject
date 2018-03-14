require(["/js/config.js"],function(){
	require(["jquery","load2","cookie"],function(){
		$(function(){
			$(".img3").show();
			$(".img4").show();
			$(".img2").hide();
			$(".dianpu").hide();
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
	})
})