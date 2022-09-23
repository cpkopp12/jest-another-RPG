const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor((Math.random() * 10) + 95);
    this.strength = Math.floor((Math.random() * 5) + 7);
    this.agility = Math.floor((Math.random() * 5) + 7); 

    this.inventory = [new Potion('health'), new Potion()];


};

//Player class methods
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}`;
};
//health
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
        return true;
};

Player.prototype.reduceHealth = function(healthPar) {
    this.health -= healthPar;

    if (this.health < 0) {
        this.health = 0;
    }
};
//Attack
Player.prototype.getAttackValue = function() {
    const mn = this.strength - 5;
    const mx = this.strength + 5;

    return Math.floor((Math.random() * (mx - mn)) + mn);
};
//Potions
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};






module.exports = Player;