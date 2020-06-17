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

    let remainingAreaToPaint = room.area;

    for (let i = 0; i < this.stock.length; i++) {

        let paintLitres = this.stock[i].litres;
        
        if (paintLitres <= remainingAreaToPaint) {    
            this.stock[i].reduceLitres(paintLitres);
        } else {
            this.stock[i].reduceLitres(remainingAreaToPaint);
        }

        remainingAreaToPaint -= paintLitres;
        if (remainingAreaToPaint <= 0) {
            break;
        }
    }
    this.stock = this.stock.filter(paint => !paint.isEmpty())
   }
};

module.exports = Decorator;