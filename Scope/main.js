/*
var b = 5;
function foo(a){
    var b = 'shadow';
    function bar(){
        console.log(a + window.b);
    }
    bar();
}
foo(2);
*/

var b = 2;
function foo(str){
    eval(str);
    console.log(b);
}
foo('var b = 3;');