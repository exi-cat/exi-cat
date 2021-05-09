function welcome() {

    alert('Привет! Я умею возводить числа в степень');
    userName = prompt('Меня зовут exi-cat. А тебя?', '');
    if (userName == '') {
        userName = 'Аноним';
    } else {
        return userName;
    }
    alert(`Приятно познакомитсья, ${userName} =)
    А теперь давай возведём какое-нибудь число в степень!`);
    return userName;
}


function askNum() {

    let number = +prompt('Введи любое целое число');
    return number;
}

function askPow(userName) {

    let power = +prompt(`Спасибо, ${userName}! А теперь в какую степень мы его возведём?`,'')
    return power;
}

function checkInputNum(number, userName) {

    while (number != Number(number) || number === 0) {
        number = +prompt(`Нужно число, и чтобы оно было больше нуля.
        Попробуй ещё раз, ${userName} :)`,'');
    } return number;
}

function checkInputPow(power, userName) {

    while ( power != Number(power) 
        || (power < 2) 
        || ((power % 1) != 0) ) {
        power = +prompt(`Нужно целое число, и чтобы оно было 
        больше двойки. Попробуй ещё раз, ${userName} :)`,'');
    } return power;
}

function calculate(number, power) {

    return number ** power;
}

function showResult() {

    let userName = welcome();
    let number = askNum();

    number = checkInputNum(number, userName);
    let power = askPow(userName);
    power = checkInputPow(power, userName);
    
    if (result = calculate(number, power)) {
        alert(`Вуаля, ${userName}! Ответ: ${result}. Жмякни на кнопку ещё раз, чтобы повторить ;)`);

    } else {
        let retry = confirm(`Что-то пошло не так ${userName}. Попробуем ещё раз?`);
        retry = showResult();
    }
}