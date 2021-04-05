function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    'use strict';
    let x = [], D = 0;
    D = (b ** 2) - 4 * a * c;
    if (D < 0) return x;
    if (D === 0) {
        x.push(-b / 2 * a);
        return x;
    }
    x.push((-b + D ** (0.5)) / 2 * a);
    x.push((-b - D ** (0.5)) / 2 * a);
    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
    let numOfMarks, sumOfMarks = 0, averageMark = 0;
    numOfMarks = marks.push();
    if (numOfMarks === 0) {
        return averageMark;
    }
       else if (numOfMarks > 5 ) {
         console.log('the number of marks more than 5');
          marks = marks.slice(0,5);
          numOfMarks = marks.push();
      }
    for (let i = 0; i < numOfMarks; i++) {
        sumOfMarks += marks[i];
    }
    averageMark = sumOfMarks / numOfMarks;
    return averageMark;

}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
    let result = 0;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18){
    result = 'Не желаете ли олд-фэшн, '+name+'?';
    }
    else{
    result = 'Сожалею, ' + name +', но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!';
    }
    return result;
}