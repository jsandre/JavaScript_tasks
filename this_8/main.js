console.log(this);
console.log('-----------------------------');
console.log('Ширина: ' + this.innerWidth);
console.log('Высота: ' + this.innerHeight);
console.log('-----------------------------');
function getAbc(){
    console.log('Внутри функции');
    console.log(this);
    console.log(3 + 5 / 2);
    this.style.background = 'blue';
    this.style.color = '#fff';
}
// getAbc();

// document.querySelector('p').onclick = getAbc;

// let p = document.querySelectorAll('p');
// p.forEach(function(el){
//     el.onclick = getAbc;
// });

// document.querySelector('p').addEventListener('click', getAbc);

let p = document.querySelectorAll('p');
p.forEach(function(el){
    el.addEventListener('click', getAbc);
});
