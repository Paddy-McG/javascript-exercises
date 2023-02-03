const sumAll = function(a, b) {
    if(typeof a === "number" && typeof b === "number" && a > 0 && b > 0) {
        var big =(a > b)? a : b;
        var small = (a < b) ? a : b;
        var total = 0;
        while(small <= big) {
            total += small;
            small++;
        }
        return total;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
