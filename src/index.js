module.exports = function reverse (n) {
    const re = /[^0-9]/g;
    const digitReverse = n.toString().replace(re,'').split('').reverse().join('');
    return digitReverse;
}
