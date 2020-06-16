const assert = require('assert');
const Paint = require('../../paint.js');

describe('Paint', function () {

  let paint;

  beforeEach( function () {
    paint = new Paint(100);
  });

  it('should have a number of litres of paint', function () {
    const actual = paint.litres;
    assert.strictEqual(actual, 100);
  });

  describe('stock', function () {

    it('should be able to check if it is empty', function () {
      const actual = paint.isEmpty();
      assert.strictEqual(actual, false);
    });

    it('should be reduced by litres', function () {
        paint.reduceLitres(50);
        const actual = paint.litres;
        assert.strictEqual(actual, 50);
    });
  

  });

});