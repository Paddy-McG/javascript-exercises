const repeatString = function(str, num) {
    var i =0;
    var s1 = "";
    if(num < 0) {
        s1 = "ERROR";
    } else {
        while (i < num) {
            s1 += str;
            i++;
        }
    }
    return s1;
};

// Do not edit below this line
module.exports = repeatString;
