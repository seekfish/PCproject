require(["/js/config.js"],function(){
	require(["jquery","template","load"],function($,template){
		//立即执行函数
		$(function(){
			//动态加载数据
			$.getJSON("/mock/list.json",function(data){
				let _data={
				list:data.res_body.list
				}
				let html=template("list_tem",_data);
				$(".main .box").html(html);
				//加载完成以后
					//划过
				$(".con_one").mouseenter(function(){
					$(this).children().last().show();
				}).mouseleave(function(){
					$(this).children().last().hide();
				});
			})
			
		});
	})
})