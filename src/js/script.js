const navMobile = document.querySelector('.nav-mobile__items')
const burgerBtn = document.querySelector('.nav-button')
const iconBtn = document.querySelector('#icon')
const allNavItems = document.querySelectorAll('.nav-mobile__item')
const footerYear = document.querySelector('.footer__year')
const body = document.querySelector('body')

let section = document.querySelectorAll('.section-scroll')
let navLinks = document.querySelectorAll('.nav-desktop__item')

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
		iconBtn.classList.add('fa-solid', 'fa-xmark')
	} else {
		iconBtn.classList.remove('fa-solid', 'fa-xmark')
		iconBtn.classList.add('fa-solid', 'fa-bars')
		body.style.overflow = 'auto'
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)