'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0)
            this._state = 0;
        if (number >= 100)
            this._state = 100;
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'book';
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'novel';
        this.author = author;
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'fantastic';
        this.author = author;
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = 'detective';
        this.author = author;
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30)
            this.books.push(book);
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value)
                return this.books[i];
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['name'] === bookName) {
                this.books.splice(i, 1);
                return bookName;
            }
        }
        return null;
    }
}
class StudentLog {
    constructor(studentName) {
        this.studentName = studentName;
    }
    getName() {
        return this.studentName;
    }
    addGrade(grade, subject) {
        if (isNaN(grade) || grade > 5 || grade < 1)
            return console.log(`Вы пытались поставить оценку ${grade} по предмету "${subject}. Допускаются только числа от 1 до 5.`);
        if (log.hasOwnProperty(subject))
            this.subject.push(grade);
        else
            this.subject = [];
        this.subject.push(grade);
        return this.subject.length;
    }
    getAverageBySubject(subject) {
        let everageGrade = 0;
        for (let i = 0; i < this.subject.length; i++) {
            everageGrade += this.subject[i];
        }
        return everageGrade / this.subject.length;
    }
}
// const library = new Library("Библиотека имени Ленина");
// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new PrintEditionItem('Типовой школьный журнал', 2019, 102));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

