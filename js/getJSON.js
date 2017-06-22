$(function(){
	$.getJSON("../data/goodproducts.json",function(responseData){
		var data = {
			goodproducts:responseData
		};
		var html = template("goodproduct_template",data);
		$(".product_2 ul").append(html);
	});
});


$(function(){
	$.getJSON("../data/shengxian.json",function(responseData){
		var data = {
			shengxian:responseData
		};
		var html = template("shengxian_template",data);
		var html1 = template("floor_template",data);
		var html2 = template("floor_template",data);
		//$("#floor_one").append(html1);
		$("#floor_two").append(html2);
		$(".lunbo3 .shengxian_ul").append(html);
		
		
	});
});

