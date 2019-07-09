const multiplier = 2;
const defaultAttempts = 3;
const stepRange = 4;

let playGame = confirm('Do you want to play a game?');


while (playGame === true) {

    let maxRange = 8;
    let rangeMathRandom = maxRange + 1;
    let defaultPrize = 100;
    let possiblePrize = defaultPrize;
    let totalPrize = 0;
    let rouletteNumber = Math.floor(Math.random() * rangeMathRandom);

    for (let attempts = 3; attempts > 0;) {
            let userNumber = +prompt('Choose  a roulette pocket number from 0 to '+ maxRange 
            + '\nAttempts left: ' + attempts 
            + '\nTotal prize: ' + totalPrize + '$'
            + '\nPossible prize on current attempt: ' + possiblePrize +'$');
            
            if (rouletteNumber === userNumber) {
                totalPrize = totalPrize + possiblePrize;
                let continuePlayGame = confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$'
                 + '\nDo you want to continue?');

                if (continuePlayGame === true) {
                    maxRange = maxRange + stepRange;
                    rangeMathRandom = rangeMathRandom + stepRange;
                    defaultPrize = defaultPrize * multiplier;
                    possiblePrize = defaultPrize;
                    attempts = defaultAttempts;
                    rouletteNumber = Math.floor(Math.random() * rangeMathRandom);

                } else {
                    break;
                }  
            } else {
                possiblePrize = possiblePrize/multiplier;
                attempts--
            }
    }
    alert('Thank you for your participation. Your prize is: ' + totalPrize +'$');

    playGame = confirm('Do you want to play again?');
}

alert('You did not become a billionaire, but can.');
