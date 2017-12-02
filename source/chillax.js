
//
// CHILLAX PARALLAX ENGINE
//

{
	function getPageScroll() {
		const doc = document.documentElement
		const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
		return top
	}

	function clamp(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}

	function getViewportHeight() {
		return window.innerHeight
	}

	function getTopOffsetRelativeToPage(element) {
			let top = 0
			do {
					top += element.offsetTop || 0;
					element = element.offsetParent;
			} while (element)
			return top
	}

	function getScrollProgressThroughElement({scroll, viewportHeight, element}) {
		const top = getTopOffsetRelativeToPage(element)
		const height = element.offsetHeight
		const bottom = top + height
		const progressTop = top - viewportHeight
		const progressHeight = height + viewportHeight
		const progress = (scroll - progressTop) / progressHeight
		return clamp(progress, 0, 1)
	}

	class Chillax {

		constructor({views}) {
			views = [...views].map(view => {
				const layers = [...view.querySelectorAll("[data-chillax-layer]")]
				return {view, layers}
			})

			this.applyParallax = event => {
				const scroll = getPageScroll()
				const viewportHeight = getViewportHeight()

				for (const {view, layers} of views) {
					const progress = getScrollProgressThroughElement({scroll, viewportHeight, element: view})
					const centeredProgress = (progress * 2) - 1
					for (const layer of layers) {
						const magnitude = layer.getAttribute("data-chillax-layer")
						const parallax = centeredProgress * magnitude * (view.offsetHeight / 10)
						layer.style.transform = `translate3d(0px, ${parallax}px, 0px)`
					}
				}
			}

			window.addEventListener("scroll", this.applyParallax)
		}

		dispose() {
			window.removeEventListener("scroll", this.applyParallax)
		}
	}

	window.Chillax = Chillax
}
