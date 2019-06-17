	$(function(){
			var index=0;
			var width=$(".tupian>li").width();
			
			var move=null;
			move=function(){
				index= index > 2 ? 0: index;
				$(".tupian").animate({left:-width*index},3000);
			}
			var time=null;
			$(".box").hover(function(){
				$(".jian").show();
				clearInterval(time);
			},function(){
				$(".jian").hide();
				time=setInterval(function(){
					index++;
					move();
				},3000);
			})
			
			
			$(".left").click(function(){
				index--;
				index=index < 0 ? 2 : index;
				move();
			})
			$(".right").click(function(){
				index++;
				move();
			})		
			
		})
