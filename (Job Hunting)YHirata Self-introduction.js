$(function(){
	//�����̒����ƒZ���A�v���_�E�����j���[�쐬
	$(".pulldown_menu").on("click", function() {
		$(this).next().slideToggle();
	});
	
	
	//�e�s�s�̉摜�̏Љ�@�\�쐬
	$("#munich").click(munich);
	$("#stockholm").click(stockholm);
	$("#london").click(london);
	$("#newyork").click(newyork);
	
	
	//(!WARNING!)�N���b�N�ŕς�镔���܂ł͂����̂����A���{�ꂾ�ƕ����������N���Ă��܂��B
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
