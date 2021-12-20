const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('ERROR')
        return 'error'
    }
}

const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * 3);
    return getUserChoice(choices[index]);
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'User won'
    }
    if (userChoice === computerChoice) {
        return 'tie'

    } else if (userChoice === 'rock') {

        if (computerChoice === 'paper') {
            return 'Computer won';
        } else {
            return 'User won';
        }

    } else if (userChoice === 'paper') {

        if (computerChoice === 'scissors') {
            return 'Computer won';
        } else {
            return 'User won';
        }

    } else if (userChoice === 'scissors') {

        if (computerChoice === 'rock') {
            return 'Computer won';
        } else {
            return 'User won';
        }
    }
}

const playGame = () => {
    userChoice = getUserChoice('rock')
    computerChoice = getComputerChoice()
    console.log(`User -> ${userChoice} / computer -> ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}


playGame()

