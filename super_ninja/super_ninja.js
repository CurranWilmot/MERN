


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
console.log(ninja1)


class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name, 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("'Wise men do not make demands of kings.'");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
console.log(superSensei.wisdom)
console.log(superSensei)