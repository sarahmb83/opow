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

	var active = $(this).attr('id');
	var carsInfo1 = '<span class="cars-info-1">take <span class="font-weight-ani">six cars </span> off the road!</span>';
	var carsInfo2 = '<span class="cars-info-2">the energy consumption of six average-sized cars for one month.</span>';
	var treesInfo1 = '<span class="trees-info-1">plant <span class="font-weight-ani">six trees!</span></span>';
	var treesInfo2 = '<span class="trees-info-2"> 24 pounds of carbon emissions for one month.</span>';

	if (active == 'trees') {
		$('body').addClass('trees-active');
		$('body').removeClass('cars-active');
		$('.cars-info-1').replaceWith(treesInfo1);
		$('.cars-info-2').replaceWith(treesInfo2);
	} else {
		$('body').addClass('cars-active');
		$('body').removeClass('trees-active');
		$('.trees-info-1').replaceWith(carsInfo1);
		$('.trees-info-2').replaceWith(carsInfo2);
	}

});

//module.exports = function (n) { return n * 111 };
