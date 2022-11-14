const palindromes = function (string) {
    newString = string.toLowerCase();
    let stringArr = [];
    let reversedArr = [];
    let pattern = /[a-z]/;

    for (let i = 0; i < newString.length; i++) {
        if (pattern.test(newString[i])) stringArr.push(newString[i]);
    }

    for (let i = stringArr.length - 1; i >= 0; i--) {
        reversedArr.push(stringArr[i]);
    }

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== reversedArr[i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
