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
