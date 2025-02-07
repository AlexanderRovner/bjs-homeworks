"use strict"

function parseCount(value) {
    let result = Number.parseInt(value);
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
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        return parseFloat(Math.sqrt(0.5 * this.getPerimeter() * (0.5 * this.getPerimeter() - this.a) * (0.5 * this.getPerimeter() - this.b) * (0.5 * this.getPerimeter() - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (e) {
        return getTriangleObj;
    }
}
const getTriangleObj = {
    getPerimeter() {
        return "Ошибка! Треугольник не существует";
    },
    getArea() {
        return "Ошибка! Треугольник не существует";
    }
}
