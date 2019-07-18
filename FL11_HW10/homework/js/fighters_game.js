class Fighter {
    constructor(prop) {
        this.getName = () => prop.name;
        this.getDamage = () => prop.damage;
        this.getAgility = () => prop.agility;
        this.getHealth = () => prop.hp;
        this.dealDamage = (num) => {
            if(prop.hp - num < 0) {
                prop.hp = 0
            } else {
                prop.hp -= num;
            }
        }
        this.atack = (warior2) => {
            let probability = Math.random();
            let agilityWarior = this.getAgility()/100;
            if (probability > agilityWarior) {
                warior2.dealDamage(this.getDamage());
                console.log(`${this.getName()} make ${this.getDamage()} damage to ${warior2.getName()}`)
            } else {
                console.log(`${this.getName()} attacked missed`);
            }
        }
    }
}