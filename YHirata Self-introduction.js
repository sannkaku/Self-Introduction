$(function(){
	//特性の長所と短所、プルダウンメニュー作成
	$(".pulldown_menu").on("click", function() {
		$(this).next().slideToggle();
	});
	
	
	//各都市の画像の紹介文機能作成
	$("#munich").click(munich);
	$("#stockholm").click(stockholm);
	$("#london").click(london);
	$("#newyork").click(newyork);
	
	
	//(!WARNING!)クリックで変わる部分まではいいのだが、日本語だと文字化けが起きてしまう。
	function munich(){
		$("#image_cities_click").text("Gute Reise nach --- Munich").css("color","#804000");
	}
	function stockholm(){
		$("#image_cities_click").text("Bra resa till --- Stockholm").css("color","#005ce6");
	}
	function london(){
		$("#image_cities_click").text("Have a nice trip to London").css("color","#800000");
	}
	function newyork(){
		$("#image_cities_click").text("Have a nice trip to New York").css("color","#000d1a");
	}
});
