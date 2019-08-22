// document.querySelector('#test').onkeypress = function(e){
//     // console.log(e);
//     // console.log(e.altKey);
//     // console.log(e.charCode);
//     // console.log(e.code);
//     // console.log(e.ctrlKey);
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.shiftKey);
//     // if(e.keyCode < 1072 || e.keyCode > 1103){
//     //     console.log('Недопустимые символы');
//     // }
//     // else{
//     //     this.value += e.key;
//     // }
//     // e.altKey: false
//     // e.charCode: 49
//     // e.code: "Digit1"
//     // e.ctrlKey: false
//     // e.key: "1"
//     // e.keyCode: 49
//     // e.shiftKey: false
//     // return false;
// }

let left = 0;
document.onkeypress = function(e){
    console.log(e.keyCode);
    let sq =document.querySelector('.sq');
    if(e.keyCode == 100){
        left = left + 10; 
        sq.style.marginLeft = left + 'px';
    }
    if(e.keyCode == 97){
        left = left - 10; 
        sq.style.marginLeft = left + 'px';
    }
}