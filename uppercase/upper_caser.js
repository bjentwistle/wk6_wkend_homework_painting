const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    return this.words.map(word => word.toLocaleUpperCase('en-US'))

}

module.exports = UpperCaser;
