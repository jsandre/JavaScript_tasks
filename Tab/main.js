function init(){
    let tabBody = document.querySelectorAll('.tab-body');
    for(let i = 1; i < tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
}
init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function(elem){
    elem.onclick = showTabs;
});

function showTabs(){
    let data = this.getAttribute('data');
    // console.log(data);
    let tabBody = document.querySelectorAll('.tab-body');
    for(let i = 0; i < tabBody.length; i++){
        tabBody[i].style.display = 'none';
    }
    // init();
    // document.querySelector('.tab-body[data="'+data+'"]').style.display = 'block';
    // ES6
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}