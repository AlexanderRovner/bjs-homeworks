//'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type = null;
    }
    fix() {
      this.state = this.state*1.5;  
    }
  
    set state(number) {
        if(number < 0)
        this._state = 0;
        if(number >= 100)
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
        if(book.state > 30) 
            this.books.push(book);  
    }
    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
                if(this.books[i][type] === value)
                return this.books[i];
        }
        return null;
    }
    giveBookByName(bookName) {
        for( let i = 0; i < this.books.length; i++ ) {
            if(this.books[i][name] === bookName){
                this.books.splice(i,1);
                return bookName;
            } 
            
        }
        return null;
    }
}


const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
