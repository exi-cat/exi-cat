/* alert('Привет! Я умею возводить числа в степень');
prompt('Меня зовут exi-cat. А тебя?');
 */
function askNum() {
    let number = +prompt('Введи любое целое число');
    //console.log(number);
    return number;
}

/* function askPow() {
    let power = +prompt('Спасибо! А теперь в какую степень мы его возведём?')
    return power;
} */

function checkInputNum() {
    while (number != Number) {
        if (number === Number) {
            return checknum = number;
        } else {
            return checknum = +prompt('Нужно число, и чтобы оно было больше нуля. Попробуй ещё раз :)');
        }
    }
}

/* function checkInputPow(power) {
    if ( (power > 1) && (power % power == 0) ) {

        return true;
        } else {
        power = +prompt('Нужно целое число, и чтобы оно было больше единицы. Попробуй ещё раз :)');
        return power;
    }
} */

/* function calculate(number, power) {

    return number ** power;
} */

function showResult() {
    askNum();
    console.log(number);

    checkInputNum();
    
   /*  power = askPow();
    checkInputPow(power);
    // confirm('Что-то пошло не так. Попробуем ещё раз?')

    result = calculate(number, power);
    alert(result); */
        
}

showResult();
console.log(checknum);
