class View {
	constructor(){		
	}
}


class Controller {
	constructor(view) {
		this.view = view
	}

}

const app = new Controller(new View())
