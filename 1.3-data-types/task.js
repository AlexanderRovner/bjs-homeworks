'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    // console.log(percent, contribution, amount, date);
    // console.log(typeof(percent),typeof(contribution),typeof(amount),typeof date);
    // console.log(date.getTime());
    if(percent === undefined || percent <= 0 ) {
       return console.log(`Параметр процентная ставка содержит
     неправильное значение ${percent}`);
    }
     else if(contribution === undefined || contribution < 0 ) {
        return console.log(`Параметр процентная ставка содержит
        неправильное значение ${contribution}`);
       } 
         else if(amount === undefined || amount <= 0 ) {
            return console.log(`Параметр сумму кредита содержит
            неправильное значение ${amount}`);
         }
            else if(date === undefined || date <= 0) {
                return console.log(`Параметр дата окончания кредита содержит
                неправильное значение ${date}`);
            }
                    let BLOAN = 0, totalAmount = 0, dateToday = new Date(), months = 0;
                    BLOAN = amount - contribution;
                    months = Math.floor(((date.getTime() - dateToday.getTime())/(1000*60*60*24*365))*12);
                    percent = percent/100;
                    totalAmount = BLOAN*((percent/12)+(percent/12)/((Math.pow((1+(percent/12)),months)) - 1))*months;  
                    console.log(Number(totalAmount.toFixed(2)));
                    return Number(totalAmount.toFixed(2)); 
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