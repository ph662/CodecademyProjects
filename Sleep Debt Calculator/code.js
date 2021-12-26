const getSleepHours = day => {
    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
        case 'saturday':
        case 'sunday':
            return 8;
    }
}

const getActualSleepHours = () => getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = (amount) => {
    let idealHours = amount;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(9);
    if (actualSleepHours == idealSleepHours) {
        console.log(`the user got the perfect amount of sleep. ${actualSleepHours}`);
    } else if (actualSleepHours >= idealSleepHours) {
        console.log('the user got more sleep than needed.');
    } else if (actualSleepHours <= idealSleepHours) {
        console.log(' the user should get some rest.');
    }
}

calculateSleepDebt();
