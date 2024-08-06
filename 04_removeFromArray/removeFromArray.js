const removeFromArray = function(inputArray) {

    let filterSet = new Set(arguments);
    return inputArray.filter(element => !(filterSet.has(element)));

};

// Do not edit below this line
module.exports = removeFromArray;

