function move(fish) {
	var zx, zy;
	zx = Math.round(Math.random() * 568);
	zy = Math.round(Math.random() * 268);

	if (fish.className === "flipped" && parseInt(fish.style.left, 10) < zx) {
		$(fish).removeClass("flipped");
	} else if (fish.className === "" && parseInt(fish.style.left, 10) > zx) {
		$(fish).addClass("flipped");
	}

	$(fish).animate({left: zx + "px", top: zy + "px"}, 3000, function () {
		move(fish);
	});
}

function countFish() {
	var amount = $("#fishTank").children().length;
	if (amount === 1) {
		$("#fishAmount").text("There is " + amount + " fish in tank");
	} else {
		$("#fishAmount").text("There are " + amount + " fish in tank");
	}
}
	
$("#fish > div > button").click(function () {
	var color, fish, xp, yp, amount;
	color = $(this).attr("name");
	this.fish =  document.getElementById(color).cloneNode(true);
	
	xp = Math.round(Math.random() * 568);
	yp = Math.round(Math.random() * 268);
	
	this.fish.style.position = "absolute";
	this.fish.style.left = xp + "px";
	this.fish.style.top = yp + "px";
	
	$("#fishTank").append(this.fish);
	countFish();
	move(this.fish);
});

$("#clear").click(function () {
	$("#fishTank").empty();
	$("#fishAmount").text("Aquarium is empty");
});