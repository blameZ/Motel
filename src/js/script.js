// document.addEventListener('DOMContentLoaded', function () {
// 	const currentYearElement = document.getElementById('current-year')
// 	const currentYear = new Date().getFullYear()
// 	currentYearElement.textContent = currentYear
// })

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else if (window.location.pathname.includes('rental') || window.location.pathname.includes('sales')) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

	addShadow()

	window.addEventListener('scroll', addShadow)
})
