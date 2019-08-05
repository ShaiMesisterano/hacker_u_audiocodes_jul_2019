module.exports = {
    sum: (a, b) => a + b,
    multiply: (a, b) => a * b,
    square: (a) => this.multiply(a, a),
    isZero: function(a){
        return a === 0
    },
    divide: function(a,b) {
        if (this.isZero(b)) throw new Error('Cannot divide by zero');
        return a / b;
    }
}