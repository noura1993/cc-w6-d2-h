const Decorator = function() {
    this.stock = [];
}

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint)
};

Decorator.prototype.calculateLitres = function() {
    return this.stock.reduce((totalLitres, paint) => totalLitres + paint.litres, 0)
};

Decorator.prototype.canPaint = function(room) {
    return this.calculateLitres() >= room.area;

};

Decorator.prototype.paint = function(room) {
   if(this.canPaint(room)) {
    room.paint();
   }
   
};

module.exports = Decorator;