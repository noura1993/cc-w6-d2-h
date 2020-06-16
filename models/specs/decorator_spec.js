const assert = require('assert');
const Decorator = require('../../decorator.js');
const Paint = require('../../paint.js');
const Room = require('../../room.js');

describe('Decorator', function () {

  let decorator;
  let paint;
  let room;

  beforeEach( function () {
    decorator = new Decorator();
    paint = new Paint(15);
    room = new Room(12);
  });

  describe('Decorator', function () {

    it('should be empty paint stock at first', function () {
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 0);
      });

    it('should be able to add a can of paint to paint stock', function () {
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate total litres paint it has in stock', function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.calculateLitres();
        assert.strictEqual(actual, 30);
    });

    it('should be able to calculate whether is has enough paint to paint a room', function () {
        decorator.addPaint(paint);
        const actual = decorator.canPaint(room);
        assert.strictEqual(actual, true);
    });

    it('should be able to paint room if has enough paint in stock', function () {
        decorator.addPaint(paint);
        decorator.paint(room);
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });

  });

});