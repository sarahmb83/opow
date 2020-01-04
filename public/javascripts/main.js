var data = require('../data/data.json');
//console.log(data.customer.name);

var firstName = data.customer.name.split(' ').slice(0, -1).join(' ');
$('.customer-name').html(firstName);

//Handle the button active state
$('.btn').click(function(){
	$('.btn').removeClass('btn-active');
	$(this).addClass('btn-active');
});

//module.exports = function (n) { return n * 111 };
