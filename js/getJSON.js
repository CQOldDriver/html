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
		$(".lunbo3 .shengxian_ul").append(html);
	})
});
