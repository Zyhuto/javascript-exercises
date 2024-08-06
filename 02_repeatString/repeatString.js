const repeatString = function(text , repetitions) {
    if (repetitions < 0){
        return "ERROR"
    }
    let output = "";
    for (i = 0;i < repetitions; i++) {
        output += text
    }
    return output


};

// Do not edit below this line
module.exports = repeatString;
