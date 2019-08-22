document.querySelector('p').innerHTML += ' Пример span <b>Hi</b>';
document.querySelector('p').innerText += ' Пример span <b>Hi</b>';

document.querySelector('h1').outerHTML = '<h2>Hello JS</h2>';
document.querySelector('h2').outerText = '<h2>Hello JS</h2>';

// ------------------------------------------------

document.querySelector('div').insertAdjacentHTML('beforebegin', 'привет, мир');
document.querySelector('div').insertAdjacentHTML('afterbegin', 'Привет, мир');
document.querySelector('div').insertAdjacentHTML('afterend', 555);
document.querySelector('div').insertAdjacentHTML('beforeend', 999);

// --------------------------------------------------

document.querySelector('.one span').innerHTML = 999;
document.querySelector('.one p').innerHTML = '<b>Я люблю JavaScript!</b>';

// ----------------------------------------------

console.log(document.querySelector('img').alt);
document.querySelector('img').alt = 'yellow cat';

console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-48.png';
document.querySelector('img').alt = 'star';

document.querySelector('title').innerText = 'superApp';

// ---------------------------------------------------

console.log(document.querySelector('input').value);
document.querySelector('input').value = '30.06.2019';
document.querySelector('input').type = 'range';

// -----------------------------------------------

// ----Меняем цвет body по нажатию---
//ловим кнопки
let liteStyle = document.querySelector('#lite-style'); 
let darkStyle = document.querySelector('#dark-style');


//объявляем две функции, которые отвечают за смену файлов .css
function showDarkStyle(){
    document.querySelector('link').href = 'main.css';
    // dStyle.href = 'main.css';
}

function showLiteStyle(){
    document.querySelector('link').href = 'style.css';
    // lStyle.href = 'style.css';
}

//вешаем собития на две кнопки и присваиваем им соответсвующие функции
liteStyle.onclick = showLiteStyle;
darkStyle.onclick = showDarkStyle;


