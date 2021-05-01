//`use strict`
// Класс оружия
class Weapons {
    constructor(name = 'weapon', attack = 3, durability = 3, range = 1) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    };

    takeDamage(damage) {
        this.durability -= damage;

        if (this.durability <= 0) {
            this.durability = 0;
        }
    };

    getDamage() {
        if (this.durability <= (this.initDurability / this.durability) * 30) {
            return this.attack / 2;
        } else if (this.durability <= 0) {
            return 0;
        } else {
            return this.attack;
        }
    };

    isBroken() {
        return !(this.durability > 0);
    };
}


// Классы основных оружий

class Bow extends Weapons {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapons {
    constructor() {
        super('Меч', 25, 500, 1);
    }
}

class Knife extends Weapons {
    constructor() {
        super('Нож', 5, 300, 1);
    }
}

class Staff extends Weapons {
    constructor() {
        super('Посох', 8, 300, 2);
    }
}

// Классы улучшенных оружий

class LongBow extends Bow {
    constructor() {
        super();

        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();

        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800
        this.initDurability = 800
    }
}

class StormStaff extends Staff {
    constructor() {
        super();

        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}
const weapons = [new Knife(), new Staff(), new Axe(),
new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    let result = [];

    weapons.forEach(item => { result.push(item.name) })
    return result;
}