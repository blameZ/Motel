function filterMenu(category) {
	const sections = document.querySelectorAll('.menu')

	sections.forEach(section => {
		if (category === 'all' || section.classList.contains(category)) {
			section.style.display = 'block'
		} else {
			section.style.display = 'none'
		}
	})
}

const buttons = document.querySelectorAll('.menu-filters__button')

buttons.forEach(button => {
	button.addEventListener('click', () => {
		buttons.forEach(btn => btn.classList.remove('menu-filters__button--active'))
		button.classList.add('menu-filters__button--active')
		document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
	})
})
