module.exports = function toReadable (number) {
  if (number < 100) {
      return twoDigitNumber(number);
  } else {
      return threeDigitNumber(number);
  }
}

const humanNumbers = ['zero', 
                    'one', 
                    'two', 
                    'three', 
                    'four',
                    'five',
                    'six',
                    'seven',
                    'eight',
                    'nine',
                    'ten', 
                    'eleven', 
                    'twelve', 
                    'thirteen', 
                    'fourteen', 
                    'fifteen', 
                    'sixteen', 
                    'seventeen', 
                    'eighteen', 
                    'nineteen'];
const humanDozens = ['zero',   //first two position added to better maintenance
                    'ten',
                    'twenty', 
                    'thirty', 
                    'forty', 
                    'fifty', 
                    'sixty', 
                    'seventy', 
                    'eighty', 
                    'ninety'];

let twoDigitNumber = (number) => {
    if (number < 20) {
        return humanNumbers[number];
    } else if (number % 10 === 0) {
        return humanDozens[number / 10];
    } else {
        return `${humanDozens[Math.trunc(number / 10)]} ${humanNumbers[number % 10]}`;
    }
}

let threeDigitNumber = (number) => {
    const countOfHundreds = Math.trunc(number / 100);

    if (number % 100 === 0) {
        return `${humanNumbers[countOfHundreds]} hundred`;
    } else {
        return `${humanNumbers[countOfHundreds]} hundred ${twoDigitNumber(number % 100)}`;
    }
}
