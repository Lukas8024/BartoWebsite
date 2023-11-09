const navMobile = document.querySelector('.nav-mobile__items')
const burgerBtn = document.querySelector('.nav-button')
const iconBtn = document.querySelector('#icon')
const allNavItems = document.querySelectorAll('.nav-mobile__item')
const footerYear = document.querySelector('.footer__year')
const body = document.querySelector('body')

const cardsText = document.querySelectorAll('.offer-card__text')
const cardBtns = document.querySelectorAll('.offer-card__btn')

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile__items--active')

	body.style.overflow = 'hidden'

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile__items--active')
			body.style.overflow = 'auto'
			changeIcon()
		})
	})
	changeIcon()
}

const changeIcon = () => {
	if (navMobile.classList.contains('nav-mobile__items--active')) {
		iconBtn.classList.remove('fa-solid', 'fa-bars')
		burgerBtn.style.transform = 'rotate(180deg)'
		iconBtn.classList.add('fa-solid', 'fa-xmark')
	} else {
		iconBtn.classList.remove('fa-solid', 'fa-xmark')
		burgerBtn.style.transform = 'rotate(-180deg)'
		iconBtn.classList.add('fa-solid', 'fa-bars')
		body.style.overflow = 'auto'
	}
}

const clearText = () => {
	cardsText.forEach(el => {
		if (el.classList.contains('offer-card__text--active')) {
			el.classList.remove('offer-card__text--active')
			cardBtns.forEach(button => {button.textContent = '>>>'})
		}
	})
}

cardBtns.forEach(button => {
	button.addEventListener('click', event => {
		const clickedButton = event.target
		const cardText = clickedButton.previousElementSibling.firstElementChild

		if (cardText.classList.contains('offer-card__text--active')) {
			clearText()
		} else {
			clearText()
			cardText.classList.add('offer-card__text--active')
			button.textContent = '<<<'
		}
	})
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
