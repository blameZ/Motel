function toggleDetails(id) {
	const details = document.getElementById(id)
	const isExpanded = details.classList.contains('expanded')
	const button = document.querySelector(`[data-details-toggle="${id}"]`)

	if (isExpanded) {
		details.classList.remove('expanded')
		if (button) button.innerHTML = '<i class="fa-solid fa-plus"></i>'
	} else {
		details.classList.add('expanded')
		if (button) button.innerHTML = '<i class="fa-solid fa-minus"></i>'
	}
}
