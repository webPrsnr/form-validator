class View {
	constructor(){
		this.form = document.getElementById('form')
		this.username = document.getElementById('username')
		this.email = document.getElementById('email')
		this.password = document.getElementById('passwod')
		this.secondPassword = document.getElementById('password2')
		
	}
	
	bindSubmitForm() {
		this.form.addEventListener('submit', event => {
			event.preventDefault()
			this.checkLength(this.username, 3, 15)
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
