const assert = require('assert');
const Room = require('../models/room.js');

describe(`Room`, function () {
    
    beforeEach(function() {
        room1 = new Room(16, false)

    }); //end of beforeEach

    it('should be able to be painted', function(){
        const actual = room1.paintTheRoom()
        const expected = true
        assert.strictEqual(actual, expected)
    })

}); //end of describe.