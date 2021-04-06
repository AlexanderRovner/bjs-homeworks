'use strict';
function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    let x = [], D = 0;
    D = (b ** 2) - 4 * a * c;
    if (D < 0) return x;
    if (D === 0) {
        x.push(-b / 2 * a);
        return x;
    }
    x.push((-b + Math.sqrt(D)) / 2 * a);
    x.push((-b - Math.sqrt(D)) / 2 * a);
    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
    let  sumOfMarks = 0;
    if (marks.push() === 0)
        return averageMark;
    if (marks.push() > 5 ) {
         console.log('the number of marks more than 5');
          marks = marks.slice(0,5);
      }
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i];
    }
     
    return sumOfMarks / marks.length;

}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18)
    return 'Не желаете ли олд-фэшн, '+name+'?';
    else
    return 'Сожалею, ' + name +', но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!';
}
