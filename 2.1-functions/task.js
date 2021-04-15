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
function showSolutionsMessage (a, b, c) {
     let result = {};
     result = Object.assign({},getSolutions(a, b,c));
     console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
     console.log(`Значение дискриминанта: ${result.D}`)
     if(result.D < 0)
     return console.log(`Уравнение не имеет вещественных корней`);
     else if(result.D === 0)
     return console.log(`Уравнение имеет один корень ${result.roots[0]}`);
     else
      return console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
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
    
    data.average = average/i; 
        return data;
       
    }

