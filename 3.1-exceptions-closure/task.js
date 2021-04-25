"use strict"

function parseCount (value) {
    let result = 0;
    result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error ("Невалидное значение");;
    }
    return result;
}
function validateCount(value) {
   try {
       return parseCount(value);
    }
   catch (e) {
        return e;
   }
}