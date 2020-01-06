(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
	"customer": {
		"id": "A29071",
		"name": "Julia Simpson"
	},
	"energyUse": {
		"currentYear": 573,
		"priorYear": 791
	}
}
},{}],2:[function(require,module,exports){
var data = require('../data/data.json');
//console.log(data.customer.name);

//Write the first name to the H1
var firstName = data.customer.name.split(' ').slice(0, -1).join(' ');
$('.customer-name').html(firstName);

//Write the data use to the graphs
$('.current-year-num').html(data.energyUse.currentYear + ' kWh ');
$('.prior-year-num').html(data.energyUse.priorYear + ' kWh ');

//Handle the button active state
$('.btn').click(function(){
	$('.btn').removeClass('btn-active');
	$(this).addClass('btn-active');

	var test = $(this).attr('id');

	if (test == 'trees') {
		$('body').addClass('trees-active');
		$('body').removeClass('cars-active');
	} else {
		$('body').addClass('cars-active');
		$('body').removeClass('trees-active');
	}

});

//module.exports = function (n) { return n * 111 };

},{"../data/data.json":1}]},{},[2]);
