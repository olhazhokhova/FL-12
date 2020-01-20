class Fighter {

	// wins = 0;
	// losess = 0;
	// hpStart = 0;

	constructor(name, damage, hp, strength, agility) {
		this._name = name;
		this._damage = damage;
		this._hp = hp;
		this._hpStart = hp;
		this._strength = strength;
		this._agility = agility;
	}

	getName() {
		return this._name;
	}
	setName(newName){
		this._name = newName;
	}

	getDamage() {
		return this._damage;
	}
	setDamage(newDamage){
		this._damage = newDamage;
	}

	getHealth() {
		return this._hp;
	}
	setHealth(newHp){
		this._hp = newHp;
	}

	getStrength() {
		return this._strength;
	}
	setStrength(newStrength){
		this._strength = newStrength;
	}

	getAgility() {
		return this._agility;
	}
	setAgility(newAgility){
		this._agility = newAgility;
	}

	//delete if not needed
	getWin() {
		return this._wins;
	}
	addWin(){
		this._wins++;
	}

	//delete if not needed
	getLoss() {
		return this._losess;
	}
	addLoss(){
		this._losess++;
	}

	logCombatHistory(){
		console.log('Name: ' + this.getName() + ', Wins: ' + this.getWin() + ', Losses:' + this.getLoss());
	}

	heal(pointHealth){
		let newHp = pointHealth + this.getHealth();
		if(newHp > hpStart){
			newHp = hpStart;
		}
		this.setHealth(newHp);
	}

	dealDamage(pointHealth){
		let newHp = this.getHealth() - pointHealth;
		if(newHp < 0){
			newHp = 0;
		}
		this.setHealth(newHp);
	}

	attack(defender){
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
		console.log(fighter1 + " is dead and can't fight");
	}

	if(fighter2.getHealth() <= 0){
		console.log(fighter2 + " is dead and can't fight");
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

// const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
// const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 30});

const fighter1 = new Fighter('Maximus', 25, 100, 30, 25);
const fighter2 = new Fighter('Commodus', 25, 90, 25, 30);

buttle(fighter1, fighter2);