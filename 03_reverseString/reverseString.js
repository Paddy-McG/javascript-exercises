const reverseString = function(str) {
    var len = str.length;
    const ray = str.split("");
    let s1 = "";
    for(var i = 0; i < len; i++) {
        s1 = ray[i] + s1;
    }
    return s1;
};

// Do not edit below this line
module.exports = reverseString;
