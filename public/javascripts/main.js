//var obj = JSON.parse('{ "customer": {"id": "A29071", "name": "Julia Simpson" }, "energyUse": {"currentYear": 573, "priorYear": 791 }}');
var data = require('../data/data.json');
console.log(data.customer.name);

module.exports = function (n) { return n * 111 };
