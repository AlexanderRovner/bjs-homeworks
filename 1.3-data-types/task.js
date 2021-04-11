'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    if(Number(percent)) {
        percent = Number(percent/100);
        if(Number(contribution)|| contribution == 0) {
            contribution = Number(contribution);
            if(Number(amount)) {
                amount = Number(amount);
                if(Number(date)) {
                    let BLOAN = 0, totalAmount = 0, dateToday = new Date(), months;
                    BLOAN = amount - contribution;
                    months = (date.getFullYear - dateToday.getFullYear)*12;
                    months -= dateToday.getMonth();
                    months += date.getMonth();
                    totalAmount = BLOAN*((percent/12)+(percent/12)/((Math.pow((1+(percent/12)),date)) - 1))*months;  
                    console.log(Number(totalAmount.toFixed(2)));
                    return Number(totalAmount.toFixed(2));        
                }
                else
                console.log(`Параметр дата окончания кредита содержит
                 неправильное значение ${date}`);
            }
            else
            console.log(`Параметр сумму кредита содержит
             неправильное значение ${amount}`);
        }
        else
        console.log(`Параметр сумма первоначального взноса содержит
         неправильное значение ${contribution}`);
    }
    else
    console.log(`Параметр процентная ставка содержит
     неправильное значение ${percent}`);


}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if(name === undefined || name === "") {
        console.log(`Привет, мир! Меня зовут Аноним`);
        return "Привет, мир! Меня зовут Аноним.";
    }
    else {
        console.log(`Привет, мир! Меня зовут ${name}`);
        return "Привет, мир! Меня зовут " + name+ ".";
    }
}