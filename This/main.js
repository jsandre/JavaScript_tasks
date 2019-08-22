// ЗАМЫКАНИЯ
/*function count(){
    let i = 0;
    return function(){
        i++;
        console.log(i);
    }
}
let j = count();
j();
j();
j(); 
*/

let blocks = document.querySelectorAll('.block');

for(let i = 0; i < blocks.length; i++){
    // blocks[i].onclick = function(){
    //     console.log('Работает');
    // }

    blocks[i].onclick = one;
}
function one(){
    // console.log('Привет!');
    // console.log(this);
    console.log(this.innerHTML);
    this.style.backgroundColor = 'grey';
}

// Тоже самое, но с forEach
// blocks.forEach(function (element){
//     element.onclick = function(){
//         console.log('Нажато');
//     }
// });

