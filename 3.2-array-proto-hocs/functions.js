`use strict`

const weapons = [new Knife(), new Staff(), new Axe(),
new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(item => item.name);
}
function getCountReliableWeapons(durability) {
    return weapons.filter(item => item.durability > durability).length;
}
function hasReliableWeapons(durability) {
    return weapons.some(item => item.durability > durability);
}
function getReliableWeaponsNames(durability) {
    return weapons.filter(item => item.durability > durability).map(item => item.name);
}
function getTotalDamage() {
    return weapons.reduce((acc, item, index) => {
        return acc + item.attack;
    }, 0);
}

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

