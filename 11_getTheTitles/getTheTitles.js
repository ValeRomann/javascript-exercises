const getTheTitles = function(arr) {
    let titlesArr = [];
    for (let i = 0; i < arr.length; i++) {
        titlesArr.push(arr[i]['title']);
    }
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
