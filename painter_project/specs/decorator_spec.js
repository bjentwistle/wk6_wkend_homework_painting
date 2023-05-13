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
        paintYellow = new PaintCan(5,true)
        paintGreen = new PaintCan(5,true)
        paintRed = new PaintCan(5,true)
        paintBlack = new PaintCan(20,true)

        room1 = new Room(16)
        room2 = new Room(25)
        room3 = new Room(20)

        paints = [paintWhite, paintBlue, paintYellow, paintGreen,paintRed, paintBlack]
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

}); //end of describe.

