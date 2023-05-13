// Setup Object Decorator

const Decorator = function(stockList) {
    this.stockList = stockList  //going to have a list of PaintCans
};

Decorator.prototype.addPaintToStockList = function(paintCan) {
    console.log(paintCan)
    const count= this.stockList.push(paintCan)
    console.log(count)
    return this.stockList.paintCan[numOfLitres]
};

// Decorator.prototype.totalPaintInStockList = function() {
//     console.log(this.stockList)
//     const paintCanLitres = this.stockList.map(paintCan=> paintCan.numOfLitres)
//     const totalPaintInStock = this.paintCanLitres.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     return totalPaintInStock
// };

// Decorator.prototype.calculateEnoughPaintForRoom = function(aRoom) {


// };

// Decorator.prototype.paintARoom = function(roomToPaint) {


// };

module.exports = Decorator;