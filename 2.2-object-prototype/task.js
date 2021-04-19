//String.prototype.isPalindrome - для задачи №1
'use strict'
function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
    if (marks == '')
        return 0;
    let average = 0, roundedAverage = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] === 0) return 0;
        average += marks[i];
    }
    average = average / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let date = new Date();
    let now = date.getTime();
    birthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / (1000 * 60 * 60 * 24 * 365 + (diff / (1000 * 60 * 60 * 24 * 365)) / 4);
    if (age >= 18)
        return true;

    return false;

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