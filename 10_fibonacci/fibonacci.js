const fibonacci = function(n) {
    n = Number.parseInt(n);
    if (Number.isNaN(n) || n < 0) {return "OOPS";}
    if (n == 0) {return 0;}
    if (n == 1 || n == 2) {
        return 1;
    }
    let fibnum1 = 1;
    let fibnum2 = 1;
    for (i = 1; i <= (n - 2); i++) {
        [fibnum2, fibnum1] = [fibnum1, fibnum1 + fibnum2];
    }
    return fibnum1;

};

// Do not edit below this line
module.exports = fibonacci;
