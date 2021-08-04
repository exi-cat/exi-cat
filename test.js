//Просто код, который я тренируюсь писать.
/* let str = '123';
alert(typeof str);

let num = Number(str);
alert(typeof num);

let mat = 1+1>0+1;
alert(+mat);

let age = Number('Шиш тебе, а не число');
alert(age);

let x = 1;
x = -x;
alert(x);

let x = 2;
let возведение = x ** x;
let извлечение = (1/2);
let вместе = возведение ** извлечение;
alert(вместе);

alert((2 ** 2) ** (1/2));

let x;
    x = true < false;
alert(+x);

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(c);

let n = 2;
n += 5;
n *= 2;

alert(n);

let counter = 2;
counter++;
counter--;
// let prefix = --counter;
let postfix = counter++;
alert(postfix);

let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(d);

let a = prompt('Input Number', 1);
let b = prompt('input another number', 2);

alert(+a + +b); */


//Тут мы проверяем возраст на 18+. недоделано конечно ещё
/* let startTest1 = confirm('Начать тест № 1?');
if (startTest1 == true) {
    confirm('Тебе есть 18 лет?');

    let currentYear = new Date().getFullYear();
    let year = prompt('Точно? А в каком году ты родился?');
        if(year < (`${currentYear - 18}`)) {
            confirm('Точно не врёшь?');
            confirm('Точно, точно?');
        }
            else {
                alert('Спасибо за честность!');
                alert('Приходи через ' + `${18 - (currentYear - year)}` + ' лет!');
            }
            
    let check = prompt('Ну в каком году началась Вторая мировая?');
        if(check == 1939) {
            alert('Всё, верю! Проходите сударЪ');
        }
}
    else{
        alert('Ну тогда в следующий раз. До встречи!');
    } */
// Похоже на то, что и выше, но только с тренарным оператором "?"
/* let startTest2 = confirm('Начать тест № 2?');
    if (startTest2 == true) {
        alert('Тогда продолжим.');
        let accessAllowed;
        let age;
        age = prompt('Сколько тебе лет?', '');
        accessAllowed = (age > 18) ? true : false;
            if (accessAllowed == true) {
                alert('Тебе можно пиво');

            }
            else {
                alert('Ты ещё маленький. Тебе нельзя пива.');
            }
    }



    else {
        alert('Ну тогда в следующий раз. До встречи!');
    } */
    
// Тут логические операторы ||(или), &&(и), !(не)
// Сначала попробовали &&(и)
/* let text;
text = prompt('Введите число от 0 до 100', '');
if (text < 0 ) {
    less = 'меньше нуля';
}   else if (text > 100) {
    more = 'больше 100';
}   
if (text > 0 && text < 100) {
    alert(`Ты ввёл: ${text}. Это то, что я просил, Спасибо!` );
} else if (text < 0 ) {
    alert(`${text}??? Да тут ${less}!`);
} else if (text > 100) {
    alert(`${text}, приехали... Это же больше 100, ну чего ты? `);
} else {
    alert('Шо ты вводишь?! Это не число.');
    alert('Перезагрузи страницу и попробуй снова.');
} */

// теперь попробуем || (или)
/* let pet;
pet = prompt('Whom you like more, cat or dog?', 'cat');
if (pet == "cat" || pet == "dog") {
    alert('Да, это домашний питомец.');
} else {
    alert ('Принимаются только cat и dog.');
} */

/* // а тут !(не)
let decine;
decline = prompt('2+2=?', '');
if(decline != 4) {
    alert('Неправильно.')
} else {
    alert('Правльно!');
}; */

//проверка логина
/* let login; 
let password;

login = prompt('Login', '');

if (login == 'Админ') {
    password = prompt("Password", '');
    if (password == 'Я главный') {
        alert('Здраствуйте!');
    } else if(password == '' || password == null) {
        alert('Отменено');
    } else if(password != null) {
        alert('Неверный пароль');
    }
} else if(login == null || login == '') {
    alert('Отменено');
} else if(login != 'Админ') {
    alert('Я вас не знаю');
} */

// оператор ??
/* let firstName = null;
let lastName = null;
let nickname = 'Cat';
alert(firstName ?? lastName ?? nickname ?? 'Anonymous'); */

// циклы while и for
/* let starsInGalaxy = 10;
while (starsInGalaxy) {
    alert(starsInGalaxy);
    starsInGalaxy--;
} */

// do..while (сначала выполнит, а потом проверит)
/* let counter = 0;
do {
    alert(counter);
    counter++;
} while (counter < 5); */

// цикл for
/* for (let catLegs = 0; catLegs < 5; catLegs++) {
    alert(catLegs);
} */

// прерывание цикла break
/* let sum = 0;
while (true) {
    let value = +prompt(`Ты уже в сумме ввёл число: ${sum} Введи ещё одно`, '');
    if (!value) break;
    sum += value;  
}
alert('Сумма: ' + sum); */
// перескакивание в цикле через continue;
/* for (let i = 0; i < 10; i++) {
    console.log(i);
     if (i % 2 == 0) continue;
        alert(i);
  } */

// метка (для прерывания)
/* abort: 
for (let x = 0; x < 5 ; x++) {
    for (let y = 0; y < 5 ; y++) {
        let input = prompt(`координаты (${x},${y})`,'');
        if(!input) break abort;
    }
}
 */
// требуем от пользователя ввести нужно нам число
/* let number;
number = +prompt('Введите число больше 100', '');
abort:
do {
    if (number > 99) break abort;
    number = +prompt(`Вы ввели ${number}. А это меньше 100. Попробуй ещё раз`,'');
} while (number < 100);
alert(`${number} подходящее число. Спасибо!`); */

//proverka работает ли iz d0ma

//разбираем дальше дичь с простыми числами
// Я К ТЕБЕ ЕЩЁ ВЕРНУСЬ!!!!!!

/* let n = +prompt('Enter number', '');
if (n == 2) {
    alert ('Good');
} else if (n % 2 != 0) {
    alert('Good');
} else {
    alert('Bad');
    } */


/* // а тут такая-же проверка, только с циклом (найти ВСЕ простые числа в пределах инпута)
let input = +prompt('Enter number', '');
abort:
for (let i = 2; i <= input; i++) { //тут мы накидываем единичку к каждому числу до инпута
    for (let d = 2; d < i; d++) { //тут накидвыаем делитель
        if (i % d == 0) continue abort; // тут проверяем, что в целочисленном остатке (если без остатка, то простое число)
        //console.log(i); тут нельзя выводить, т.к. будет записывать каждую итерацию (будут дубли) и не захватит цифру 2
    }
    console.log(i);
}  */

// Теперь switch/case (выглядит не сложно)

/* let browser = 'Firefox'; //= 'Edge';
if (browser == 'Edge') {
    alert('You\'ve got the Edge!');
} else if (browser == 'Chrome' 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!')
} */

// функции
/* function greeting(text, person) {
    alert(text + ', ' + person + '!');
}

greeting('Hello', 'Gregor'); */

/* function greeting(text = 'Привет', person = 'Аноним') {
    person = '~' + person + '~';
    alert(text + ', ' + person);
}

greeting(); */

// сделаем простенький функционал. Привествуем пользователя, спрашиваем его имя, и в дальнейшем обращаемся по имени, после чего предлагаем ему сложить любые два числа.
// надо приделать проверку на ввод чисел, пока не получается.
/* let user;
let text;
user = prompt('Привет, как я могу к тебе обращаться?');
text = 'Я умею складывать числа';
calc();
function calc() {
    let a = +prompt(`${text}, ${user}, введи первую цифру:`, '');
    let b = +prompt(`А теперь любую другую:`, '');
    alert('Готово! Ответ:' + (a + b));
    let repeat = confirm('Хочешь попробовать снова?');
    if (repeat) {
        calc();
    } else {
        alert(`На нет и суда нет, ${user}. Но ты заходи ;)`)
    }
    
} */

// директива return

/* function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return confirm('Но ты всё равно хочешь продолжить?');
    }
}

let age = prompt('Сколько тебе лет?', 18);

if(checkAge(age)) {
    alert('Проходите пажалуйста');
} else {
    alert('Тогда уходи!!!');
} */

// выдаёт минимальное значение из двух

/* function min(a, b) {
    if(a < b) {
        alert(a);
    } else {
        alert(b);
    }
}
min(9, 4);

 */

// возвращает x в степени y
/* function pow() {
    let number = +prompt('Введи число', '');
    let pow = +prompt(`Выбрано число: ${number}. В какую степень его возвести?`);
    if (!pow) {
        return;
    }
    let exit = false;
    while (!exit) {
        
        if ((pow > 0) && (pow % 1 == 0)) {
            exit = true;    
        } else if (!pow) {
            exit = true;    
        } else {
            alert('Ну и пока, дурень');
            pow = +prompt(` ${pow} не натуральное число. Введи целое число больше нуля!`);
        }
    }

    let result = number ** pow;
    return result;
}

let resultNumber = pow();
if (resultNumber === undefined) {
    alert('nihuja'); 
} else {
    alert(resultNumber);
}

 */

/* let t = +prompt('egse','');
console.log(t);
alert(t); */

/* while (true) {
    pow = +prompt(` ${pow} не натуральное число. Введи целое число больше нуля!`);
    if ((pow == 0) || (pow % 1 != 0)) {
        break;    
    } else {
        alert('Ну и пока, дурень');
    }
} */


let x = 3 ** 1;
alert(x);
