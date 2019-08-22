let showModal = document.querySelector('#modal-show');
let closeModal = document.querySelector('#modal-close');

function getShow() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function getClose() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

showModal.onclick = getShow;
closeModal.onclick = getClose;