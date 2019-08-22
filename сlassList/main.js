let block1 = document.querySelector('.block-1');
block1.style.width = '300px';
console.log(block1.style);

// проверка на наличие списка всех классов
console.log(block1.classList);

//проверка на наличие класса у элемента
console.log(block1.classList.contains('block-1'));

block1.classList.add('red');
block1.classList.add('green');

block1.classList.remove('green');

block1.classList.toggle('red');
block1.classList.toggle('red');