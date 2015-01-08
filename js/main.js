$("header nav ul li").click(function () {
	$("header nav ul li").removeClass("active");
	$(this).addClass("active");
	$("section").hide();
	var activeSection = $(this).attr("name");
	$("#" + activeSection).show();
});

$("section nav ul li").click(function () {
	$("section nav ul li").removeClass("active-app");
	$(this).addClass("active-app");
	$("#js > div, #php > div").hide();
	var activeApp = $(this).attr("name");
	$("#" + activeApp).show();
});
