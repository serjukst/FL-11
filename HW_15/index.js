class Hamburger {
    constructor(type, calories, addSecretIngredient) {
        this.type = type;
        this._calories = calories;
        this.countCheese = 0;
        this.countTomato = 0;
        this.countSecretIngredient = 0;
    }

    getCalories() {
        return this._calories;
    }

    setCalories(val) {
        return this._calories = val;
    }

    addCheese() {
        if (this.countCheese < 1) {
            this._calories += 120;
            this.countCheese += 1;
        } else {
            return `Sorry, you can add cheese only once.`
        }

    }

    addTomato() {
        if (this.countTomato < 2) {
            this._calories += 20;
            this.countTomato += 1;
        } else {
            return `Sorry, you can add tomato only twice.`
        }
    }

    addSecretIngredient() {
        if (this.countCheese === 0 && this.countTomato === 0) {

            if (this.countSecretIngredient < 1) {
                this._calories += 100;
                this.countSecretIngredient += 1;

            } else {
                return `Sorry, you can add secret ingredient only once`;
            }

        } else {
            return `Sorry, you can add secret ingredient only before anotner ingredient`;
        }
    }

}

const myHamburger = new Hamburger('classic', 600, true);
console.log(myHamburger);
