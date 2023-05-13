const assert = require('assert');
const PaintCan = require('../models/paint.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js')

describe(`Decorator`, function () {
    let paintWhite
    let paintBlue
    let paintYellow
    let paintGreen
    let paintRed
    let paintBlack

    let room1
    let room2
    let room3

    let paints
    
    beforeEach(function() {
        paintWhite = new PaintCan(5,true)
        paintBlue = new PaintCan(10,true)
        paintYellow = new PaintCan(15,true)
        paintRed = new PaintCan(5,true)
        paintBlack = new PaintCan(20,true)
        paintGreen = new PaintCan(0, false)
        paintPink = new PaintCan(0, false)

        room1 = new Room(16)
        room2 = new Room(25)
        room3 = new Room(20)

        paints = [paintWhite, paintBlue, paintYellow, paintGreen, paintPink]
        decorator = new Decorator([])

    });

    it('should be able to add paint to stockList', function() { 
        const actual = decorator.addPaintToStockList(paintWhite);
        const expected = 5 //[paintWhite]
        assert.deepStrictEqual(actual, expected)
    });

    it('should be able to add paint to calculate total amount of paint in stockList', function(){
        decorator.addPaintToStockList(paintBlack);
        decorator.addPaintToStockList(paintWhite);
        decorator.addPaintToStockList(paintRed);
        const actual = decorator.totalPaintInStockList();
        const expected = 30
        assert.strictEqual(actual, expected)
    });

    it('should be able to check if it has enough paint for a room', function(){
        //room1 has 16 square meters of wall to be painted
        decorator.addPaintToStockList(paintBlack);
        const actual = decorator.enoughToPaintARoom(room1);
        const expected = true
        assert.strictEqual(actual, expected)
    });

    it('should be able to add paint a room if enough paint in stock', function(){
        decorator.addPaintToStockList(paintBlue);
        decorator.addPaintToStockList(paintBlue);
        const actual = decorator.paintARoom(room3);
        const expected = true //room.paintedStatus will be true
        assert.strictEqual(actual, expected)
    });
    
    //Extensions

    it('should be able to decrease amount of paint in stock when painting a room', function(){
        const actual = decorator.paintARoomAndReduceStock(room2, paints);
        //console.log (actual)
        const expected = [true, 5]  //room.paintedStatus will be true and remaining stock will be 5
        assert.deepStrictEqual(actual, expected)
    });

    it('should be able to remove empty paint cans from stock', function(){
        const actual = decorator.removeEmptyCansFromStockList(paints)
        const expected = [paintWhite, paintBlue, paintYellow]
        assert.deepStrictEqual(actual, expected)
    })

}); //end of describe.

