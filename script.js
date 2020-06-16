$(document).ready(() => {
    let x, y, operator, equation;

    $('.number').click(function () {
        if (x === undefined) {
            x = $(this).val();
            displayEquation();
            console.log('number click x is:', x);
        } else if (operator === undefined) {
            x += $(this).val();
            displayEquation();
            console.log('number click x+ is:', x);
        } else {
            if (y === undefined) {
                y = $(this).val();
                displayEquation();
            } else {
                y += $(this).val();
                displayEquation();
            }
            console.log('number click y is:', y);
        }
    });

    $('.operator').click(function () {
        if (x !== undefined) {
            operator = $(this).val();
            displayEquation();
            console.log('operator is:', operator);
        }
    });

    $('#equals').click(() => {
        if (x !== undefined && y !== undefined && operator !== undefined) {
            let ans;
            inputX = parseInt(x);
            inputY = parseInt(y);
            console.log('equals click inputX is:', inputX);
            console.log('equals click inputY is:', inputY);
            if (operator === '+') {
                ans = add(inputX, inputY);
            } else if (operator === '-') {
                ans = subtract(inputX, inputY);
            } else if (operator === '*') {
                ans = multiply(inputX, inputY);
            } else if (operator === '/') {
                ans = divide(inputX, inputY);
            }

            displayEquation(ans);
            console.log('equals click eq is:', ans);
            x = y = operator = ans = undefined;
            console.log('reset x, y, op:', [x, y, operator]);
        }
    });

    function displayEquation(ans = undefined) {
        let equation = '';
        if (x !== undefined && operator === undefined && y === undefined) {
            equation = x;
            console.log('if', equation);
        } else if (operator !== undefined && y === undefined) {
            equation = equation.concat(x, operator);
            console.log('else if', equation);
        } else if (ans !== undefined) {
            equation = ans;
        } else {
            equation = equation.concat(x, operator, y);
            console.log('else', equation);
        }
        // equation = equation.concat(x, operator, y);
        // let currentValue = $('#equation').text();
        // let equation = currentValue.concat(attach);
        // console.log('val is', val);
        // console.log('attach', attach);
        // equation = attach + $('#equation').text();
        console.log(x, operator, y);
        console.log('equation', equation);

        $('#equation').text(equation);
    }
});
