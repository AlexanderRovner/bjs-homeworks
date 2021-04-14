'use strict';
function getSolutions(a, b, c) {

    let result = {D: 0, roots: []};
    result.D = (b ** 2) - 4 * a * c;
    if (result.D < 0) return result;
    if (result.D === 0) {
        result.roots.push (-b / 2 * a);
        return result;
    }
    result.roots.push ((-b + Math.sqrt(result.D)) / 2 * a);
    result.roots.push ((-b - Math.sqrt(result.D)) / 2 * a);
    return result;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
    let  sumOfMarks = 0;
    if (marks.length === 0)
        return 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i];
    } 
    return sumOfMarks / marks.length;

}
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function getAverageScore(data) {
    let i = 0, average = 0;
    if(isEmpty(data)){
    data.average = 0;
    return{average};
    }
    for(let prop in data) {
        data[prop] = getAverageMark(data[prop]);
        average += data[prop]; 
        i++;   
    }
    data.resultAverage = average/i; 
        return (console.log(data)); 
       
    }
    
