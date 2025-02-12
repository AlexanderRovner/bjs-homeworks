'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    // console.log(percent, contribution, amount, date);
    // console.log(typeof(percent),typeof(contribution),typeof(amount),typeof date);
    // console.log(date.getTime());
    let dateToday = new Date();
    let timeDelta = date.getTime() - dateToday.getTime();
    if (isNaN(percent) || percent <= 0) {
        return `Параметр процентная ставка содержит
     неправильное значение ${percent}`;
    }
    if (isNaN(contribution)|| contribution < 0) {
        return `Параметр процентная ставка содержит
        неправильное значение ${contribution}`;
    }
    if ( isNaN(contribution) || amount <= 0) {
        return `Параметр сумму кредита содержит
            неправильное значение ${amount}`;
    }
    if (date === undefined || date <= 0 || timeDelta <= 0) {
        return `Параметр дата окончания кредита содержит
                неправильное значение ${date}`;
    }
    let BLOAN = amount - contribution;
    let months = Math.floor(((timeDelta) / (1000 * 60 * 60 * 24 * 365)) * 12);
    percent = percent / (100 * 12);
    let totalAmount = BLOAN * ((percent) + (percent) / ((Math.pow((1 + (percent)), months)) - 1)) * months;
    console.log(Number(totalAmount.toFixed(2)));
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if (name === undefined || name === "") {
        console.log(`Привет, мир! Меня зовут Аноним`);
        return "Привет, мир! Меня зовут Аноним.";
    }
    else {
        console.log(`Привет, мир! Меня зовут ${name}`);
        return "Привет, мир! Меня зовут " + name + ".";
    }
}