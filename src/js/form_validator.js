const username = document.querySelector('#username')
const email = document.querySelector('#email')
const text = document.querySelector('#text')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
	}
	if (text.value.length < min) {
		showError(text, `Tekst wiadomości powinien zawierać min. ${min} znaków.`)
	}
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Email jest niepoprawny!')
	}
}

const checkErrors = () => {
	const allInput = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInput.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
		setTimeout(() => {
			popup.classList.remove('show-popup')
		}, 2000)
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, email, text])
	checkLength(username, 3)
	// checkLength(email, 8)
	checkLength(text, 15)
	checkMail(email)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[username, email, text].forEach(el => {
		el.value = ''
		clearError(el)
	})
})
