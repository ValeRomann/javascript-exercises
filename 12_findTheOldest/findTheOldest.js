const findTheOldest = function(arr) {
    let oldest = {};
    let maxYears = 0;
    for (let i = 0; i < arr.length; i++) {     
        let deathYear = arr[i]['yearOfDeath'] ? arr[i]['yearOfDeath'] : new Date().getFullYear();
        let currentYears = deathYear - arr[i]['yearOfBirth'];
        if (currentYears > maxYears) {
            maxYears = currentYears;
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;