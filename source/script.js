
class Chillax {

	handler = event => {
		console.log("scroll event detected")
	}

	constructor({views}) {
		window.addEventListener("scroll", this.handler)
	}

	dispose() {
		window.removeEventListener("scroll", this.handler)
	}
}

const views = document.querySelectorAll(".chillax")
const chillax = new Chillax({views})
