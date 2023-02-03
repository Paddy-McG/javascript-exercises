const removeFromArray = function(a, b, c, d, e) {
    var ray = a;
    var i = 0;
    while(i < ray.length) {
        if(ray[i] === b | ray[i] === c | ray[i] === d | ray[i] === e) {
            ray.splice(i, 1);
        } else {
            ++i;
        }
    }
    return ray;
};

// Do not edit below this line
module.exports = removeFromArray;
