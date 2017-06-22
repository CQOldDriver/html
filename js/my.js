//轮播
/////////////////////////////////轮播图1
$(function(){
	var $imgs = $(".lunbo1 li"),
		len = $imgs.length,
		currentIndex = 1,
		nextIndex = 2,
		timer = null,
		imgWidth = $imgs.outerWidth(),
		html = "",
		isMoving = false;

	
	var first = $imgs.eq(0).clone(true),
		last = $imgs.eq(len - 1).clone(true);
	$(".lunbo1 ul").append(first).prepend(last);
	len+=2;
	$(".lunbo1 ul").css({
		width:len * imgWidth,
		left: -imgWidth
	});
	
	
//	$(".lunbo1").mouseenter(function(){
//		clearInterval(timer)
//	}).mouseleave(function(){
//		timer = setInterval(move,3000);
//	});
	$(".lunbo1").hover(function(){
		//mouseenter
		clearInterval(timer);
		$(".prev1").css("opacity","1");
		$(".next1").css("opacity","1");
	},function(){
		//mouseleave
		timer = setInterval(move,2000);
		$(".prev1").css("opacity","0");
		$(".next1").css("opacity","0");
	}).trigger("mouseleave");//指明要触发鼠标移开的事件，移开后执行mouseleave事件的函数，没有trigger()方法的话前面要写var timer = setInterval(move,2000);
	
	for(i=0;i<len-2;i++){
		var j = i+1;
		html += "<div>"+j+"</div>";
	}
	$(html).appendTo(".pages").eq(0).addClass("current");
	
	$(".pages").on("mouseover","div",function(){
		nextIndex = $(this).index() + 1;
		move();
	})

//$(".pages div").mouseover(function(){
//	nextIndex = $(this).index() + 1;
//		move();
//})
//		
	
	$(".prev1").click(function(){
		if(!isMoving){
			nextIndex = currentIndex - 1;
			move();
		}
		
	});
	$(".next1").click(function(){
		if(!isMoving){
			move();
		}
		
	});
	
	function move(){
		isMoving = true;
		var _left = -1 * imgWidth * nextIndex;
		$(".lunbo1 ul").stop().animate({left:_left},function(){
			isMoving = false;
			if(nextIndex >= len){
				$(".lunbo1 ul").css({
					left: -imgWidth
				});
				currentIndex = 1;
				nextIndex = 2;
			}else if(currentIndex <= 0){
				$(".lunbo1 ul").css({
					left: -imgWidth * (len - 2)
				});
				currentIndex = len - 2;
				nextIndex = len - 1;
			}
		});
		
		var circleIndex = (nextIndex == len - 1)? 0 : (nextIndex-1);
		$(".lunbo1 .pages div").eq(circleIndex)
							   .addClass("current").siblings().removeClass("current");
		currentIndex = nextIndex;
		nextIndex++;
	}
});


/////////////////////////轮播3
$(function(){
	var $uls = $(".lunbo3 ul"),
		len = $uls.length,
		ulWidth = $uls.outerWidth(),
		timer = null,
		nextIndex = 1;
		
	console.log($uls);
	console.log(len);
	
	$(".lunbo3").css({
				//width : len * ulWidth,
				left : 0
		});


	$("#floor_one").on("mouseover",".title a",function(){
		nextIndex = $(this).parents("li").index();
		console.log("nextIndex:"+nextIndex);
		move();
	});	
	
	
	
	function move(){
		var _left = -1 * ulWidth * nextIndex;
		//console.log(ulWidth);
		//console.log(_left);
		$(".lunbo3").stop().animate({left:_left});
	}
});
