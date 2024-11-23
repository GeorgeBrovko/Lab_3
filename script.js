// Задание 1
function task1() {
    const input = document.getElementById('input1').value;
    const A = Number(input);

    if (isNaN(A) || !Number.isInteger(A)) {
        document.getElementById('output1').textContent = "Ошибка: Введите целое число!";
    } else if (A > 0 && A >= 10 && A <= 99) {
        document.getElementById('output1').textContent = "TRUE";
    } else {
        document.getElementById('output1').textContent = "FALSE";
    }
}

// Задание 2
function task2() {
    const input = document.getElementById('input2').value;
    const num = Number(input);

    if (isNaN(num) || !Number.isInteger(num)) {
        document.getElementById('output2').textContent = "Ошибка: Введите целое число!";
    } else if (num > 0 && num % 2 == 0) {
        document.getElementById('output2').textContent = num + 1;
    } else {
        document.getElementById('output2').textContent = num;
    }
}

// Задание 3
function task3() {
    const x = parseFloat(document.getElementById('input3').value); 
    let y;
    let a = 2.1
    let b = 6.7

    if (x < -2) {
        y = x ** 3 + 2 * a;  
    } else if (x >= -2 && x <= 5) {
        y = Math.log(Math.abs(Math.cos(b * x))); 
    } else if (x > 5) {
        y = x ** 2 * Math.exp(x); 
    }

    document.getElementById('output3').textContent = y.toFixed(6);
}


// Задание 4
function task4() {
    const x = parseInt(document.getElementById('input4').value);
    let y;
    let a = 2.1
    let b = 6.7
    
    switch (x) {
        case -3:
            y = Math.pow(x, 3) + 2 * a;
            break;
        case 4:
            y = Math.log(Math.abs(Math.cos(b * x)));
            break;
        case 6:
            y = Math.pow(x, 2) * Math.exp(x);
            break;
            default:
                y = "Нет подходящей ветви";
    }

    document.getElementById('output4').textContent = `y = ${y}`;
}
