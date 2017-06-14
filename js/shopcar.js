$(function(){
	$(".lunbo3 ul").on("click","div a",function(){
		var product = {
			name : $(this).parents("li").children("h2").text(),
			price: Number($(this).prev().text().substring(1)), 
			src:  $(this).parents("li").find("img").attr("src"),
			amount: 1 
		};
		console.log(product);
		
		$.cookie.json = true;
		var _products = $.cookie("products") || [];
				var _index = indexOf(product.name, _products);
				if (_index === -1) { 
					_products.push(product);
				} else { 
					_products[_index].amount++;
				}
				$.cookie("products", _products, {expires:7});
				console.log($.cookie("products"));
			});
								
		function indexOf(name, products) {
			for (var i = 0, len = products.length; i < len; i++) {
				if (name === products[i].name)
					return i;
			}
			return -1;
		}
});