var methods = module.exports={};
var output;

module.exports.sum=function(a,b) {
    output=a+b;
    console.log(output);
    return a+b;
}

module.exports.mul=function(a,b) {
    output=a*b;
    return output;
}

exports.data=methods;
