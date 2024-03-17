const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle.addEventListener("change", function () {
	if (this.checked) {
		mobileMenu.classList.add("mobile")
	} else {
		mobileMenu.classList.remove("mobile")
	}
})

const fileInputElement = document.getElementById("file-input")
const fileButton = document.querySelector(".btn-file")

fileButton.addEventListener("click", () => {
	fileInputElement.click()
})

function select() {
	let selectHeader = document.querySelectorAll(".select__header")
	let selectItem = document.querySelectorAll(".select__item")
	let selectIcon = document.querySelectorAll(".select__icon")

	selectHeader.forEach(item => {
		item.addEventListener("click", selectToggle)
	})

	selectItem.forEach(item => {
		item.addEventListener("click", selectChoose)
	})

	function selectToggle() {
		this.parentElement.classList.toggle("is-active")
	}

	function selectChoose() {
		let text = this.innerText,
			select = this.closest(".select"),
			currentText = select.querySelector(".select__current")
		currentText.innerText = text
		select.classList.remove("is-active")
	}
}

select()

const slider = document.getElementById("myRange")
const output = document.getElementById("demo")
output.innerHTML = slider.value

slider.oninput = function () {
	output.innerHTML = this.value
}

const form = document.querySelector(".order__form")

form.addEventListener("submit", function (event) {
	event.preventDefault()

	const select = document.querySelector(".select__current").textContent
	const email = document.querySelector('.order__form-input[type="email"]').value
	const name = document.querySelector('.order__form-input[type="text"]').value
	const rangeValue = document.getElementById("demo").textContent

	const message = `Выбранный тип системы: ${select}\nE-mail: ${email}\nИмя: ${name}\nЗначение ползунка: ${rangeValue}%`
	alert(message)
})
