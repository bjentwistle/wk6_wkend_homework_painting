// Set up PaintCan Object
const PaintCan = function(numOfLitres, isFull = false) {
    this.numOfLitres = numOfLitres;
    this.isFull = isFull;
};


PaintCan.prototype.checkIsNotFull = function() {
    if( this.numOfLitres === 0  && this.isFull === true); {
        return this.isFull
    }

};

PaintCan.prototype.removePaint = function (litres) {
    return this.numOfLitres - litres
};

module.exports = PaintCan;