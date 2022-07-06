


class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Ninja's Name: ${this.name}`);
        console.log(`Ninja's Health: ${this.health}`);
        console.log(`Ninja's Speed: ${this.speed}`);
        console.log(`Ninja's Strength: ${this.strength}`);
    }
    
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
