class View {
	constructor(){
		this.form = document.getElementById('form')
		this.username = document.getElementById('username')
		this.email = document.getElementById('email')
		this.password = document.getElementById('passwod')
		this.secondPassword = document.getElementById('password2')
		
	}

	showError(input, message) {
		const formControl = input.parentElement
		formControl.className = 'form-control error'
		const small = formControl.querySelector('small')
		small.innerText = message
	}

	showSuccess(input) {
		const formControl = input.parentElement
		formControl.className = 'form-control success'
	}

	checkLength(input, min, max) {
		if (input.value.length < min) {
			this.showError(input, `${input.id} must be at least ${min} characters`)
		} else if (input.value.length > max) {
			this.showError(input, `${input.id} must be less than ${max} characters`)
		} else {
			this.showSuccess(input)
		}
	}

	checkEmail(input) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (re.test(input.value.trim())) {
			this.showSuccess(input)
		} else {
			this.showError(input, `Email isn't valid`)
		}		
	}

	bindSubmitForm() {
		this.form.addEventListener('submit', event => {
			event.preventDefault()
			this.checkLength(this.username, 3, 15)
			this.checkEmail(this.email)
		})
	}
}


class Controller {
	constructor(view) {
		this.view = view

		this.view.bindSubmitForm()		
	}

}

const app = new Controller(new View())
