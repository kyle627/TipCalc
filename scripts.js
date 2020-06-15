function randomBill() {
	var randomBill = Math.round(Math.random() * 100);
	if (randomBill < 10) {
		randomBill();
	}
	document.getElementById("billCost").value = randomBill;
}

function tipCalculator(percent) {
	var mealcost = parseFloat(document.getElementById("billCost").value);
	var tipPercent = percent; //parse float not required as values arent custom.
	var tip = (mealcost * tipPercent).toFixed(2); //round to two digits
	document.getElementById("output").innerHTML = "Tip your waitor/waitress: " + tip + " dollars.";
}

function customTipCalculator() {
	var mealcost = parseFloat(document.getElementById("billCost").value);
	var tipPercent = parseFloat(document.getElementById("customTip").value);
	if (tipPercent > 100) {
		tipPercent = 100;
	}
	if (tipPercent <= 0) {
		tipPercent = 0;
	}
	var tip = Math.round((mealcost * tipPercent) / 100);
	document.getElementById("output").innerHTML = "Tip your waitor/waitress: " + tip + " dollars.";
}

function clearBill() {
	document.getElementById("billCost").value = 0;
	document.getElementById("output").innerHTML = "";
}

function accumulateBill(amount) {
	var billTotal = parseInt(document.getElementById("billCost").value);
	billTotal += amount + applyTax(amount);
	document.getElementById("billCost").value = billTotal.toFixed(2);

}

function multipleFryChoices() {
	if (document.getElementById("SmallCurlyFries").style.display = "none") {
		OpenFrySizes();
		document.getElementById("SmallCurlyFries").addEventListener("click", function () {
			clearSubGroups();
		})
	}
	if (document.getElementById("LargeCurlyFries").style.display = "none") {
		OpenFrySizes();
		document.getElementById("LargeCurlyFries").addEventListener("click", function () {
			clearSubGroups();
		})
	}
}

function multipleDrinkChoices() {
	if (document.getElementById("Small").style.display = "none") {
		OpenDrinkSizes();
		document.getElementById("Small").addEventListener("click", function () {
			clearSubGroups();
		})
	}
	if (document.getElementById("Medium").style.display = "none") {
		OpenDrinkSizes();
		document.getElementById("Medium").addEventListener("click", function () {
			clearSubGroups();
		})
	}
	if (document.getElementById("Large").style.display = "none") {
		OpenDrinkSizes();
		document.getElementById("Large").addEventListener("click", function () {
			clearSubGroups();
		})
	}
}

function OpenFrySizes() {
	document.getElementById("SmallCurlyFries").style.display = "inline-block";
	document.getElementById("LargeCurlyFries").style.display = "inline-block";
	document.getElementById("Small").style.display = "none";
	document.getElementById("Medium").style.display = "none";
	document.getElementById("Large").style.display = "none";
}

function OpenDrinkSizes() {
	document.getElementById("Small").style.display = "inline-block";
	document.getElementById("Medium").style.display = "inline-block";
	document.getElementById("Large").style.display = "inline-block";
	document.getElementById("SmallCurlyFries").style.display = "none";
	document.getElementById("LargeCurlyFries").style.display = "none";
}

function OpenBurgerCooks() {
	document.getElementById("SmallCurlyFries").style.display = "inline-block";
	document.getElementById("LargeCurlyFries").style.display = "inline-block";
}

function clearSubGroups() {
	document.getElementById("Small").style.display = "none";
	document.getElementById("Medium").style.display = "none";
	document.getElementById("Large").style.display = "none";
	document.getElementById("SmallCurlyFries").style.display = "none";
	document.getElementById("LargeCurlyFries").style.display = "none";
}

function applyTax(beforeTaxValue) {
	var taxValue = 0.0625;
	var aftertaxVaue = (beforeTaxValue * taxValue);
	return aftertaxVaue;
}