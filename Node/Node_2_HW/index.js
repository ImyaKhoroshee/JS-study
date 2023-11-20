function cardGenerate() {
    let cardNumber = '';
    let valid = '0123456789ABCDEF';
    const range = valid.length - 1;
    for (i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * range);
        cardNumber = cardNumber + valid.substring(index, index + 1);
    }
    return cardNumber;
}
module.exports = { cardGenerate };
