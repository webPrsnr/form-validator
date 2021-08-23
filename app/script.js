class View {
	constructor(){
		this.form = document.getElementById('form')
		this.username = document.getElementById('username')
		this.email = document.getElementById('email')
		this.password = document.getElementById('passwod')
		this.secondPassword = document.getElementById('password2')
		
	}
}


class Controller {
	constructor(view) {
		this.view = view

	}

}

const app = new Controller(new View())
