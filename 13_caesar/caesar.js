const caesar = function(string, step) {
    if (step > 0 && step > 26) {
        while (step > 26) {
            step -= 26;
        }
    }

    if (step < 0 && step < -26) {
        while (step < -26) {
            step += 26;
        }
    }

    let tempArr = string.split('');
    let cryptedArr = [];
    
    for (let i = 0; i < tempArr.length; i ++) {
        currentChar = tempArr[i];        
        let regexp = /[a-z]/;

        if ( regexp.test( currentChar.toLowerCase() ) ){

                if (currentChar.charCodeAt() <= 90 &&
                    currentChar.charCodeAt() + step > 90
                )  {
                    currentChar = String.fromCharCode(currentChar.charCodeAt(currentChar) + step -26);
                } else {

                    currentChar = String.fromCharCode(currentChar.charCodeAt(currentChar) + step);    
                        
                    if (currentChar.charCodeAt() < 65 ) {
                        currentChar = String.fromCharCode(currentChar.charCodeAt(currentChar) + 26);
                    }
    
                    if (currentChar.charCodeAt() > 90 && currentChar.charCodeAt() < 97) {
                        currentChar = String.fromCharCode(currentChar.charCodeAt(currentChar) - 26);
                    }
                                    
                    if (currentChar.charCodeAt() > 122) {
                        currentChar = String.fromCharCode(currentChar.charCodeAt(currentChar) - 26);
                    }
                }                                     
        }
        cryptedArr.push(currentChar);
    }
      
    return cryptedArr.join('');
};

// Do not edit below this line
module.exports = caesar;
