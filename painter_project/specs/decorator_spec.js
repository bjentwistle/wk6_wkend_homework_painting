const assert = require('assert');
const PaintCan = require('../models/paint.js');
const Room = require('../models/room.js');

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
    
    beforeEach(function(){
        paintWhite = PaintCan(5)
        paintBlue = PaintCan(10)
        paintYellow = PaintCan(5)
        paintGreen = PaintCan(5)
        paintRed = PaintCan(5)
        paintBlack = PaintCan(20)

        room1 = Room(16)
        room2 = Room(25)
        room3 = Room(20)

        paints = [paintWhite, paintBlue, paintYellow, paintGreen,paintRed, paintBlack]

    });


    it('should be able to add paint to stockList', function(){
        const actual = Decorator.addPaintToList(paintWhite);
        const expected = [paintWhite]
        assert.strictEqual(actual, expected)
    });

    it('should be able to add paint to calculate total amount of paint in stockList', function(){
        const actual = Decorator.totalPaintInStockList(paints);
        const expected = 50
        assert.strictEqual(actual, expected)
    });

    it('should be able to check if it has enough paint for a room', function(){
        const actual = Decorator.enoughToPaintARoom(room1, paints);
        const expected = True
        assert.strictEqual(actual, expected)
    });

    it('should be able to add paint a room if enough paint in stock', function(){
        const actual = Decorator.paintRoom(room2);
        const expected = true //room.paintedStatus will be true
        assert.strictEqual(actual, expected)
    });

});

