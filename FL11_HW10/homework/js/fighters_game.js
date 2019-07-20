class Fighter {
    constructor(prop) {
        const NUM_100 = 100;
        const maxHeath = prop.hp;
        let countWins = 0;
        let countLosses = 0;
        this.getName = () => prop.name;
        this.getDamage = () => prop.damage;
        this.getAgility = () => prop.agility;
        this.getHealth = () => prop.hp;
        this.attack = (warrior2) => {
            let agilitywarrior = warrior2.getAgility(this.getAgility()) / NUM_100;
            if (Math.random() > agilitywarrior) {
                warrior2.dealDamage(this.getDamage());
                console.log(`${this.getName()} make ${this.getDamage()} damage to ${warrior2.getName()}`)
            } else {
                console.log(`${this.getName()} attacked missed`);
            }
        };
        this.logCombatHistory = () => console.log(`Name: ${prop.name}, Wins: ${countWins}, Losses: ${countLosses}`);
        this.heal = (healthPoint) => {
            prop.hp + healthPoint > maxHeath ? prop.hp = maxHeath : prop.hp += healthPoint;
        };
        this.dealDamage = (damagePoint) => {
            prop.hp - damagePoint < 0 ? prop.hp = 0 : prop.hp -= damagePoint;
        };
        this.addWin = () => countWins++;
        this.addloss = () => countLosses++
    }
}

function battle(warrior1, warrior2) {
    if (!warrior1.getHealth()) {
        console.log(`${warrior1.getName()} is dead and can't fight.`);

    } else if (!warrior2.getHealth()) {
        console.log(`${warrior2.getName()} is dead and can't fight.`);

    } else {
        while (warrior1.getHealth() > 0 && warrior2.getHealth() > 0) {
            warrior1.attack(warrior2);
            warrior2.attack(warrior1);
        }

        console.log(`${warrior1.getName()} has ${warrior1.getHealth()} health 
${warrior2.getName()} has ${warrior2.getHealth()} health`);

        if (warrior1.getHealth()) {
            warrior1.addWin();
            warrior2.addloss();
            console.log(`${warrior1.getName()} is winner.Congratulations!`);
            
        } else {
            warrior2.addWin();
            warrior1.addloss();
            console.log(`${warrior2.getName()} is winner.Congratulations!`);
        }
    }
}