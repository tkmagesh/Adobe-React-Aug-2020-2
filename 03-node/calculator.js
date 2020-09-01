const calculator = {
    add(x,y){
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
};

//the default value of module.export is an object ({})
module.exports = calculator;