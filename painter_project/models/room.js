// Set up object Room
const Room = function(area, isPainted = false) {
    this.area = area
    this.isPainted = isPainted
};

Room.prototype.paintTheRoom = function() {
    this.isPainted = true
    return this.isPainted

};

module.exports = Room;