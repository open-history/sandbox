
class Chillax {

	constructor({views}) {

		this.handler = event => {
			console.log("scroll event detected")
		}

		window.addEventListener("scroll", this.handler)
	}

	dispose() {
		window.removeEventListener("scroll", this.handler)
	}
}

const views = document.querySelectorAll(".chillax")
const chillax = new Chillax({views})
