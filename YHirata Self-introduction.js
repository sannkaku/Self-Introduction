$(function(){

	//特性の長所と短所、プルダウンメニュー作成 My strong and weak points from my traits. Pull down menu.
	$(".pulldown_menu").on("click", function() {
		$(this).next().slideToggle();
	});

	//プルダウンの色変え Color change when introduction subjects toggle
	$(".pulldown_purple").click(function(){
		$(this).toggleClass("pulldown_purple_click"); //(12.18 toggleするにはどうしよう？ => https://programmercollege.jp/column/9599/)
	});

	$(".pulldown_blue").click(function(){
		$(this).toggleClass("pulldown_blue_click"); //(12.18 toggleするにはどうしよう？ => https://programmercollege.jp/column/9599/)
	});

	$(".pulldown_red").click(function(){
		$(this).toggleClass("pulldown_red_click"); //(12.18 toggleするにはどうしよう？ => https://programmercollege.jp/column/9599/)
	});


	//各都市の画像の紹介文機能作成 / Introductions of each city
	$("#munich").click(munich);
	$("#stockholm").click(stockholm);
	$("#london").click(london);
	$("#newyork").click(newyork);


	//(!WARNING!)クリックで変わる部分まではいいのだが、日本語だと文字化けが起きてしまうので、英語のみ対応。
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
