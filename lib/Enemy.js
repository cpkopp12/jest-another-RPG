const Potion = require('./Potion');
const Character = require('./Character')

function Enemy(nameIn, weaponIn) {
    this.name = nameIn;
    this.weapon = weaponIn;
    this.potion = new Potion();

    this . health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
};

//Enemy methods, inherit Character methods
Enemy.prototype = Object.create(Character.prototype);


Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};



module.exports = Enemy;