require(["/js/config.js"],function(){
	require(["jquery","load2"],function(){
		$(function(){		
			$(".dianpu").css({"display":"block"});
			$(".img2").hide();
			$(".con").css({"display":"block"});
			$(".my_cart").css({"display":"block"});
			$(".log_btm").css({"display":"none"});
			//点击时，图片发生变化
			console.log($("#li1"))
			$("#li1").click(function(){
				$("#img_1").attr("src","/images/b_14187157133660.jpg");
				$("#img_11").attr("src","/images/m_1418715713311660.jpg");
			});
			$("#li2").click(function(){
				$("#img_11").attr("src","/images/m_14187157104850.jpg");
				$("#img_1").attr("src","/images/12112.jpg");
			})
			//小盒子的宽高
			let _smWidth=$("#yidong").width(),
				_smHeight=$("#yidong").height();
			//大盒子的宽高
			let _bigWidth=$("#img_sm").width(),
				_bigHeight=$("#img_sm").height();
			//移入的时候，显示放大窗口
			$("#img_sm").mouseenter(function(){
				$(".img_big").show();
				$("#yidong").show();
			}).mouseleave(function(){
				$(".img_big").hide();
				$("#yidong").hide();
			}).mousemove(function(){
				//获取鼠标位置
				let _pageX=event.pageX,
					_pageY=event.pageY,
					_big=$("#img_sm").offset(),//获得大盒在文档中的定位
					_sm=$("#yidong").offset();
				let _left=_pageX-_big.left-_smWidth/2,
					_top=_pageY-_big.top-_smHeight/2;
					if(_left<0)
						{_left=0;
						}
					if(_left>=_bigWidth-_smWidth)
						_left=_bigWidth-_smWidth;
					if(_top<0){
						_top=0
					}
					if(_top>=_bigHeight-_smHeight)
						_top=_bigHeight-_smHeight
					$("#yidong").css({
						left:_left,
						top:_top
					})
				// 	console.log(_sm.left)
				// console.log(_big,_sm)
					$("#img_11").css({
						left:-1.5*_left,
						top:-1.5*_top
					})
			});
			

		})
	})
})