var val1 = prompt('Podaj pierwszą liczbę');
var val2 = prompt('Podaj drugą liczbę');
var operation = prompt('Podaj działanie (+ - * /)');

if(operation === '+') {
    console.log(val1 + ' + ' + val2 + ' = ' + (parseInt(val1) + parseInt(val2)))
}

if(operation === '-') {
    console.log(val1 + ' - ' + val2 + ' = ' + (parseInt(val1) - parseInt(val2)))
}

if(operation === '*') {
    console.log(val1 + ' * ' + val2 + ' = ' + (parseInt(val1) * parseInt(val2)))
}

if(operation === '/') {
    console.log(val1 + ' / ' + val2 + ' = ' + (parseInt(val1) / parseInt(val2)))
}
