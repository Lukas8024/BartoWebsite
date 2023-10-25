window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 100
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')
		
		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('nav-desktop__item--active')
				document.querySelector('.nav-desktop__items a[href*=' + id + ']').classList.add('nav-desktop__item--active')
			})
		}
	})
}