const assert = require('assert');
const PaintCan = require('../models/paint.js');

describe(`PaintCan`, function () {
    
    beforeEach(function() {
        paintcan1 = new PaintCan(0, true)
        paintcan2 = new PaintCan(15, false)

    }); //end of beforeEach

    it(`should have the ability to check if it is empty`, function(){
        const actual = paintcan1.checkIsNotFull()
        const expected = true
        assert.deepStrictEqual(actual, expected)

    });
    
    it('should be able to empty itself of paint', function() {
        const actual = paintcan2.removePaint(4)
        const expected = 11
        assert.strictEqual(actual, expected)
    });
    
}); //end of describe.