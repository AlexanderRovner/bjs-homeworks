"use strict"

function parseCount(value) {
    let result = 0;
    result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");;
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

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (c + b < a))
            throw new Error(`Треугольник с такими сторонами не существует`);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(a, b, c) {
        try {
            this.Perimeter = (a + b + c).toFixed(3);
            return this.Perimeter;
        }
        catch {
            return `Ошибка! Треугольник не существует`;
        }
    }
    getArea(a, b, c) {
        try {
            this.Area = (Math.sqrt(0.5 * getPerimeter(a, b, c) * (0.5 * getPerimeter(a, b, c) - a) * (0.5 * getPerimeter(a, b, c) - b) * (0.5 * getPerimeter(a, b, c) - c))).toFixed(3);
            return this.Area;
        }
        catch {
            return `Ошибка! Треугольник не существует`;
        }
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    }
    catch (e) {
        
        return ;
    }
}
const triangle = new getTriangle(a, b, c);