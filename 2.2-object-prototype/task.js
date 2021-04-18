//String.prototype.isPalindrome - для задачи №1
'use strict'
function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}


Object.defineProperty(String.prototype, 'isPalindrome', {
    value: function isPalindrome() {
        let str = this;
        str = str.toLowerCase().replace(/\s/g, '');
        for (let i = 0; i <= str.length / 2; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

});