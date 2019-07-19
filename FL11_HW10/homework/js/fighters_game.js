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
        this.attack = (warior2) => {
            let agilityWarior = warior2.getAgility(this.getAgility()) / NUM_100;
            if (Math.random() > agilityWarior) {
                warior2.dealDamage(this.getDamage());
                console.log(`${this.getName()} make ${this.getDamage()} damage to ${warior2.getName()}`)
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

function battle(warior1, warior2) {
    if (!warior1.getHealth()) {
        console.log(`${warior1.getName()} is dead and can't fight.`);
    } else if (!warior2.getHealth()) {
        console.log(`${warior2.getName()} is dead and can't fight.`);
    } else {
        while (warior1.getHealth() > 0 && warior2.getHealth() > 0) {
            warior1.attack(warior2);
            warior2.attack(warior1);
        }
        console.log(`${warior1.getName()} has ${warior1.getHealth()} health 
${warior2.getName()} has ${warior2.getHealth()} health`);

        if (warior1.getHealth()) {
            warior1.addWin();
            warior2.addloss();
            console.log(`${warior1.getName()} is winner.Congratulations!`);
        } else {
            warior2.addWin();
            warior1.addloss();
            console.log(`${warior2.getName()} is winner.Congratulations!`);
        }
    }
}