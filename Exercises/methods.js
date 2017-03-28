var methods = {};
var output;

methods.updateServer = function() {
	console.log('Important function');
}

methods.eatCookies = function() {
	console.log('Chocolate cookies');
}

methods.js = function() {
	console.log('Node js is awesome');
}

methods.sum=function(a,b) {
	output=a+b;
	console.log(output);
	return a+b;
}



exports.data=methods;
