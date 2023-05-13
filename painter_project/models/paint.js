// Set up PaintCan Object
const PaintCan = function(numOfLitres, fullStatus = false) {
    this.numOfLitres = numOfLitres;
    this.fullStatus = fullStatus;
};


// PaintCan.prototype.checkIfEmpty = function() {
//     if (this.fullStatus === false) {
//         return this.fullStatus
//     }

// };

// PaintCan.prototype.removePaint =function (litres) {


// };

module.exports = PaintCan;