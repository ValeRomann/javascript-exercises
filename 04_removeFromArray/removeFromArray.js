const removeFromArray = function(arr, ...index) {
    let tempArr = arr;
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < index.length; j++) {            
            if (tempArr[i] === index[j]) {
                tempArr.splice(i, 1);
                i--;
            }
        }
    }
    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
