module.exports = function toReadable(number) {
    const humanInts = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

        [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

        [, 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    ];

    strToNum = parseInt(number, 10);

    if (strToNum < 20) {
        return ((!strToNum) ? humanInts[0][0] : humanInts[0][strToNum]);
    }

    if (strToNum < 100) {

        if (strToNum % 10 == 0) { return (humanInts[1][Math.floor(strToNum / 10)]); } else { return (humanInts[1][Math.floor(strToNum / 10)] + ' ' + humanInts[0][strToNum % 10]) };
    }

    if ((strToNum % 100) == 0) { return (humanInts[2][Math.floor(strToNum / 100)]); }

    let overHundred = strToNum - (strToNum - (strToNum % 100));

    if (overHundred < 20) {
        return (humanInts[2][Math.floor(strToNum / 100)] + ' ' + humanInts[0][overHundred]);
    } else {
        if (overHundred % 10 == 0) {
            return (humanInts[2][Math.floor(strToNum / 100)] + ' ' + humanInts[1][Math.floor(overHundred / 10)]);
        } else {
            return (humanInts[2][Math.floor(strToNum / 100)] + ' ' + humanInts[1][Math.floor(overHundred / 10)] + ' ' + humanInts[0][overHundred % 10]);
        }
    }
}