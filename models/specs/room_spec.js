const assert = require('assert');
const Room = require('../../room.js');

describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(12);
  });

  it('should have an area', function () {
    const actual = room.area;
    assert.strictEqual(actual, 12);
  });

  describe('paint', function () {

    it('should not be painted at first', function () {
      const actual = room.painted;
      assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function () {
      room.paint();
      const actual = room.painted;
      assert.strictEqual(actual, true);
    });

  });

});