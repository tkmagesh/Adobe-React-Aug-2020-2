module.exports = function(){
    let result = 0;

    return  {
        add(x){
            result += x;
        },
        subtract(x){
            result -= x;
        },
        multiply(x){
            result *= x;
        },
        divide(x){
            result /= x;
        },
        getResult(){
            return result;
        }
    }
};