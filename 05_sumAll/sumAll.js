const sumAll = function(n1,n2) {
    endNum = Math.max(n1,n2);
    startNum = Math.min(n1,n2);
    if (Number.isInteger(n1) && Number.isInteger(n2) && n1 >= 0 && n2 >= 0){
    return (endNum * (endNum + 1))/2 - (--startNum * startNum)/2; }
    else {return "ERROR";}
};

// Do not edit below this line
module.exports = sumAll;

