function Fighter(arg) {
 
	this._wins = 0;
	this._losess = 0;
	this._hpStart = arg.hp;

	this._name = arg.name;
	this._damage = arg.damage;
	this._hp = arg.hp;
	this._strength = arg.strength;
	this._agility = arg.agility;

	this.getName = function() {
		return this._name;
	}
	this.getDamage = function() {
		return this._damage;
	}
	this.getHealth = function() {
		return this._hp;
	}
	this.setHealth = function(newHp){
		this._hp = newHp;
	}
	this.getStrength = function() {
		return this._strength;
	}
	this.getAgility = function() {
		return this._agility;
	}
	this.getWin = function() {
		return this._wins;
	}
	this.addWin = function(){
		this._wins++;
	}
	this.getLoss = function() {
		return this._losess;
	}
	this.addLoss = function(){
		this._losess++;
	}

	this.logCombatHistory = function(){
		console.log('Name: ' + this.getName() + ', Wins: ' + this.getWin() + ', Losses:' + this.getLoss());
	}

	this.heal = function(pointHealth){
		let newHp = pointHealth + this.getHealth();
		if(newHp > this._hpStart){
			newHp = this._hpStart;
		}
		this.setHealth(newHp);
	}

	this.dealDamage = function(pointHealth){
		let newHp = this.getHealth() - pointHealth;
		if(newHp < 0){
			newHp = 0;
		}
		this.setHealth(newHp);
	}

	this.attack = function(defender){
		let probability = 100 - (defender.getStrength() + defender.getAgility());
		let randomSuccess = Math.floor(Math.random() * 101);
		if(randomSuccess < probability){
			defender.dealDamage(this._damage);
			console.log(this.getName() + ' makes ' + this._damage + ' damage to ' + defender.getName());
		} else {
			console.log(this.getName() + ' attack missed');
		}
	}
}

function buttle(fighter1, fighter2){
	if(fighter1.getHealth() <= 0){
		console.log(fighter1.getName() + " is dead and can't fight");
	}

	if(fighter2.getHealth() <= 0){
		console.log(fighter2.getName() + " is dead and can't fight");
	}

	while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
		fighter1.attack(fighter2);
		if(fighter2.getHealth() <= 0){
			console.log(fighter1.getName() + ' has won!');
			fighter1.addWin();
			fighter2.addLoss();
			break;
		}
		fighter2.attack(fighter1);
		if(fighter1.getHealth() <= 0){
			console.log(fighter2.getName() + ' has won!');
			fighter2.addWin();
			fighter1.addLoss();
			break;
		}
	}
}

const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 30});

buttle(fighter1, fighter2);