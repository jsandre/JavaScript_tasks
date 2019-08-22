let r = Math.round(Math.random() * 10);
console.log(r);

let userNum = document.querySelector('#user-num');

function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);
    if (isNaN(num)){
        alert('Введите корректное число!');
    }
    else{
        if (num == r){
            alert('Вы угадали!');
            location.reload();
        }
        else{
            alert('Попробуйте ещё раз!');
        }
    }
}

document.querySelector('#btn').onclick = checkNum;