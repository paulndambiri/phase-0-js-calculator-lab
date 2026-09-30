const history_calculations = [];
function storeCalculation(a, b, operation, result) {
    const calculation = {
        "a": a,
        "b": b,
        "operation": operation,
        "result": result
    };
    history_calculations.push(calculation);
}
function calculator(a, b, operation) {
    if(operation === '+') {
        let sum = a + b;
        storeCalculation(a, b, operation, sum);
        return sum;
    } else if(operation === '-') {
        let sub= a - b;
        storeCalculation(a, b, operation, sub);
        return sub;
    }
    else if(operation === '/' && b !== 0) {
        let division = a / b;
        storeCalculation(a, b, operation, division);
        return division;
    } else if(operation === '*' ) {
        let multiply = a * b;
        storeCalculation(a, b, operation, multiply);
        return multiply;
    } else {
        return 'Invalid operation!';
    }
}
calculator(5, 3, '+');
calculator(10, 2, '-');
calculator(8, 4, '/');
calculator(6, 7, '*');
console.log(history_calculations);