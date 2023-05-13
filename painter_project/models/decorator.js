// Setup Object Decorator

const Decorator = function(stockList) {
    this.stockList = stockList  //going to have a list of PaintCans
};

Decorator.prototype.addPaintToStockList = function(paintCan) {
    //console.log(paintCan)
    this.stockList.push(paintCan)
    //console.log(this.stockList)
    return this.stockList[0].numOfLitres
};

Decorator.prototype.totalPaintInStockList = function() {
    let paintCanLitres =[]
    for (paintCan of this.stockList) {
        paintCanLitres = this.stockList.map(paintCan => paintCan.numOfLitres) 
    };
    return paintCanLitres.reduce((total, currentValue) => {return total += currentValue;}, 0)
};

Decorator.prototype.enoughToPaintARoom = function(aRoom) {
    const areaToPaint = aRoom.area
    //console.log(areaToPaint)
    const paintInStock = this.stockList[0].numOfLitres
    //console.log(paintInStock)
    if (paintInStock >= areaToPaint){
        return true
    } else {
        return false
    }

};

Decorator.prototype.paintARoom = function(aRoom) {
    const areaToPaint = aRoom.area
    const paintInStock = this.totalPaintInStockList()
    if (paintInStock >= areaToPaint){
        return aRoom.isPainted = true
    } else {
        return aRoom.isPainted = false
    }
    
};

//Extensions

Decorator.prototype.paintARoomAndReduceStock = function(aRoom, paintList) {
    const areaToPaint = aRoom.area
    for (can of paintList) {
        this.stockList.push(can)
    }

    let paintCanLitres =[]
    for (paintCan of this.stockList) {
        paintCanLitres = this.stockList.map(paintCan => paintCan.numOfLitres) 
    };

    const paintInStock = paintCanLitres.reduce((total, currentValue) => {return total += currentValue;}, 0)

    if (paintInStock >= areaToPaint){
        const paintRemaining = paintInStock - areaToPaint;
        aRoom.isPainted = true
        return (true, paintRemaining)   //expected output

    } else {
        return (false, paintInStock)
    }
};



module.exports = Decorator;