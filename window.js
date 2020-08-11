const name = "Amin"

function add(num1, num2) {
    let result = num1 + num2;
    function double(num) {
        return double * 2;
    }
    var total = double(result);
    return result;
}
const sum = add(13, 21);
console.log(sum);
console.log('Out side:', name);