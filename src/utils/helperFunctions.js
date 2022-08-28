import DiceImageOne from '../images/one.png';
import DiceImageTwo from '../images/two.png';
import DiceImageThree from '../images/three.png';
import DiceImageFour from '../images/four.png';
import DiceImageFive from '../images/five.png';
import DiceImageSix from '../images/six.png';
// import AvatarImageOne from '../images/avatar1.png';
// import AvatarImageTwo from '../images/avatar2.jpg';
// import AvatarImageThree from '../images/avtar3.png';
import AvatarImageFour from '../images/avatar4.png';

export const getRandomDiceValue = () => {
    return Math.floor((Math.random() * 6) + 1);
}

export const generateRandomValueForAvatar = () => {
    return Math.floor((Math.random() * 4) + 1);
}

export const getDiceImage = (diceValue) => {
    switch(diceValue) {
        case 1: return DiceImageOne;
        case 2: return DiceImageTwo;
        case 3: return DiceImageThree;
        case 4: return DiceImageFour;
        case 5: return DiceImageFive;
        case 6: return DiceImageSix;
        default: return DiceImageOne;
    }
};

export const getAvatarImage = () => {
    // const avatarValue = generateRandomValueForAvatar();
    return AvatarImageFour;
    // switch(avatarValue) {
    //     case 1: return AvatarImageOne;
    //     case 2: return AvatarImageTwo;
    //     case 3: return AvatarImageThree;
    //     case 4: return AvatarImageFour;
    //     default: return AvatarImageOne;
    // }
};

export const findAvatarPosition = (gridValues, position) => {
    console.log(position)
    let column;
    let row;        
    gridValues.forEach((element, index) => {
        element.forEach((cell, col) => {
            if(gridValues[index][col] === position) {
                column = col + 1;
                row = index + 1;
            }
        });
    });
    return {
        row,
        column,
    }
}

export const generateValuesForGrid = (gridSize = 10) => {
    const gridValues = [];
    let counter = 100;
    for (let row = 1; row <= gridSize; row++) {
        const rowArray = [];
        for (let col = 1; col <= gridSize; col++) {
            rowArray.push(counter--);
        }
        if (row % 2 === 0) {
            rowArray.reverse();
        }
        gridValues.push(rowArray);
    }
    console.log(gridValues);
    return gridValues;
}