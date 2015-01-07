function setCondition() {
	var i, num1, num2, checkBoxes, operators = [], operator;
	num1 = Math.floor((Math.random() * 100) + 1);
	num2 = Math.floor((Math.random() * 100) + 1);

	checkBoxes = document.getElementsByName("operation");
	for (i = 0; checkBoxes[i]; i += 1) {
		if (checkBoxes[i].checked) {
			operators.push(checkBoxes[i].value);
		}
	}
	operator = operators[Math.floor(Math.random() * operators.length)];

	document.getElementById("num1").value = Math.max(num1, num2);
	document.getElementById("num2").value = Math.min(num1, num2);
	document.getElementById("operator").value = operator;
}

function validate(userAnswer) {
	var patt = new RegExp("^(?:0|[1-9][0-9]*)$");

	if (patt.test(userAnswer)) {
		document.getElementById("validation").style.display = "none";
		return true;
	} else {
		document.getElementById("validation").style.display = "block";
		return false;
	}
}

function calcResult(a, operator, b) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return Math.abs(a - b);
		case "*":
			return a * b;
		case "/":
			return Math.round(Math.max(a, b) / Math.min(a, b));
	}
}

function compareAnswers(answer, userAnswer) {
	var qty;
	if (answer === parseInt(userAnswer, 10)) {
		qty = document.getElementById("correct").value;
		document.getElementById("correct").value = parseInt(qty, 10) + 1;
	} else {
		qty = document.getElementById("wrong").value;
		document.getElementById("wrong").value = parseInt(qty, 10) + 1;
	}
}

function check() {
	var num1, num2, operator, result, userAnswer;
	userAnswer = document.getElementById("answer").value;

	if (validate(userAnswer)) {
		num1 = document.getElementById("num1").value;
		num2 = document.getElementById("num2").value;
		operator = document.getElementById("operator").value;

		result = calcResult(parseInt(num1, 10), operator, parseInt(num2, 10));
		compareAnswers(result, userAnswer);

		document.getElementById("answer").value = "";
		setCondition();
	}
}

window.onload = (function () {
	setCondition();
});