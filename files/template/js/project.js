

var square = {
    x1 :6,
    y1 :7,
    x2 :5,
    y2 :8,
    area: function() {
        var a =Math.abs(this.x2 - this.x1);
        var b =Math.abs(this.y2 - this.y2);
        return a * b;
    }
};

console.log(square.area());



