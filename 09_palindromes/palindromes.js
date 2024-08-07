const palindromes = function (string) {
    let filterSet = new Set([" ",",",".",";","!","9"])
    let stringArray = Array.from(string.toLowerCase())
    let filteredArray = stringArray.filter(x => !filterSet.has(x))
    return filteredArray.join("") == filteredArray.reverse().join("");

};

// Do not edit below this line
module.exports = palindromes;
