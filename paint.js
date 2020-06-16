const Paint = function(litres) {
    this.litres = litres;
}

Paint.prototype.isEmpty = function() {
    return this.litres === 0;
}

Paint.prototype.reduceLitres = function(litres) {
     this.litres -= litres;
}

module.exports = Paint;

