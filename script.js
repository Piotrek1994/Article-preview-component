const arrowBtn = document.querySelector('.arrow-btn')
const shareBar = document.querySelector('.share-bar')
const card = document.querySelector('.card')

const showBar = () => {
	shareBar.classList.toggle('active')
}

function closeCard() {
	shareBar.classList.remove('active')
	console.log('ok')
}

const hideBar = e => {
	if (
		e.target.classList.contains('card') ||
		e.target.classList.contains('active') ||
		e.target.classList.contains('icons') ||
		e.target.classList.contains('arrow-btn')
	)
		return //wychodzi z funkcji
	closeCard()
}

arrowBtn.addEventListener('click', showBar)
window.addEventListener('click', hideBar)
