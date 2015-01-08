var tank, rfish, gfish, bfish, yfish, farr, mx, my, amount, zx, zy;
tank = document.getElementById("fishTank");
rfish = document.getElementById("red");
gfish = document.getElementById("green");
bfish = document.getElementById("blue");
yfish = document.getElementById("yellow");
amount = document.getElementById("mainAmount");
farr = [];

function move(i) {
	zx = Math.round(Math.random() * 568);
	zy = Math.round(Math.random() * 268);

	if (farr[i].className === "flipped" && parseInt(farr[i].style.left, 10) < zx) {
		$(farr[i]).removeClass("flipped");
	} else if (farr[i].className === "" && parseInt(farr[i].style.left, 10) > zx) {
		$(farr[i]).addClass("flipped");
	}

	$(farr[i]).animate({left: zx + "px", top: zy + "px"}, 3000, function () {
		if (farr.length > i) {
			move(i);
		}
	});
}

add = function (cid) {
	if (cid === "1") {
		this.nfish = rfish.cloneNode("true");
	} else if (cid === "2") {
		this.nfish = gfish.cloneNode("true");
	} else if (cid === "3") {
		this.nfish = bfish.cloneNode("true");
	} else if (cid === "4") {
		this.nfish = yfish.cloneNode("true");
	}

	mx = Math.round(Math.random() * 568);
	my = Math.round(Math.random() * 268);
	this.nfish.style.position = "absolute";
	this.nfish.style.left = mx + "px";
	this.nfish.style.top = my + "px";
	tank.appendChild(this.nfish);
	farr.push(this.nfish);
	move(farr.length - 1);

	if (farr.length === 1) {
		amount.innerHTML = "There is " + farr.length + " fish in tank";
	} else {
		amount.innerHTML = "There are " + farr.length + " fish in tank";
	}
};

$("#clear").click(function () {
	$("#fishTank").fadeOut(1500, function () {
		$("#fishTank").fadeIn(1500);
	});
	amount.innerHTML = "Aquarium is empty";
	$("#fishTank").empty();
	farr = [];
});