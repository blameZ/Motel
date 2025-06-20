document.addEventListener('DOMContentLoaded', () => {
	const navItems = document.getElementsByClassName('nav-link')
	const navIcon = document.getElementById('nav-icon')
	const navbarNav = document.getElementById('navbarNav')

	navIcon.addEventListener('click', () => {
		navIcon.classList.toggle('open')
		navbarNav.classList.toggle('collapse')
	})

	Array.from(navItems).forEach(link => {
		link.addEventListener('click', () => {
			navbarNav.classList.add('collapse')
			navIcon.classList.remove('open')
		})
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const navIcon = document.getElementById('nav-icon')
	const navItems = document.querySelectorAll('.nav-item')
	const navbarNav = document.getElementById('navbarNav')

	function animateNavItems() {
		navItems.forEach((item, index) => {
			if (!item.classList.contains('show')) {
				setTimeout(() => {
					item.classList.add('show')
				}, index * 100)
			} else {
				setTimeout(() => {
					item.classList.remove('show')
				}, (navItems.length - index - 1) * 100)
			}
		})
	}

	function handleResize() {
		if (window.innerWidth >= 992) {
			navbarNav.classList.add('show')
			navItems.forEach(item => item.classList.add('show'))
		} else {
			navbarNav.classList.remove('show')
			navItems.forEach(item => item.classList.remove('show'))
		}
	}

	navIcon.addEventListener('click', () => {
		if (window.innerWidth < 992) {
			animateNavItems()
		}
	})

	window.addEventListener('resize', handleResize)

	handleResize()
})
