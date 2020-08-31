var spinner = /*  */;
//up, down

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3

spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


var spinner = (function(){
    var counter = 0;

    function up(){
        return ++counter;
    }
    function down(){
        return --counter;
    }

    return {
        up : up,
        down : down
    };
})();

function spinnerFactory() {
    var counter = 0;

    function up() {
        return ++counter;
    }
    function down() {
        return --counter;
    }

    return {
        up: up,
        down: down
    };
}

var s1 = spinnerFactory();
var s2 = spinnerFactory();

//As a constructor function
function Spinner() {
    var counter = 0;

    this.up = function up() {
        return ++counter;
    }
    this.down = function down() {
        return --counter;
    }
}