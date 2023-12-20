const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const close_modal = document.querySelector('.js-modal-close')

function showBuyTickets(){
    modal.classList.add('open')
}

function closeBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

close_modal.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)