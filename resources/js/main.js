$("section nav ul li").click(function () {
	$("section nav ul li").removeClass("active-app");
	$(this).addClass("active-app");
	$("#js > div, #php > div").hide();
	var activeApp = $(this).attr("name");
	$("#" + activeApp).show();
});
