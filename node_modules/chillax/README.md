
# ❄ — c h i l l a x — ❄
## vertical parallax engine for beautiful web presentations

### features

- [**view the live chillax demo**](https://chase-moskal.github.io/chillax/)
- parallax animation engine to create beautiful 3d-feeling scenes
- only works vertically by design — no horizontal parallaxing
- goal was to create the look of "3d sunken windows" on the web page
- scrolling activity actuates the parallax effects
- on android the parallax effect works via scrolling
- on ios, gyroscopic activity actuates the parallax effects  
	*(experimental: currently, only works in landscape with home button on the right)*

### install chillax into your hip new app

1. `npm install chillax`
2. `import Chillax from "chillax"` — *(it's a commonjs module)*
3. link in the stylesheet, `node_modules/chillax/dist/chillax-styles.css`
4. proceed to chillax usage instructions below

### install chillax the old fashioned way

1. download the chillax "global bundle" script, and stylesheet *(right-click save-as)*

	- [chillax.global.bundle.js](https://raw.githubusercontent.com/chase-moskal/chillax/gh-pages/dist/chillax.global.bundle.js)
	- [chillax-styles.css](https://raw.githubusercontent.com/chase-moskal/chillax/gh-pages/dist/chillax-styles.css)

2. load the chillax script and stylesheet onto your html page

	```html
	<link rel="stylesheet" href="chillax-styles.css"/>

	<script src="chillax.global.bundle.js"></script>
	```

3. proceed to chillax usage instructions below

### chillax usage instructions

1. prepare your png image layers — use the template or listen carefully

	- by default, chillax assumes your parallax scenes are `16:9` in aspect ratio,  
		you are expected to author all of your layer images at double-height (`16:18`).  
		this extra height provides 100% leeway for the parallax effects (otherwise your layers will look cut-off at some point)
	- you should probably use the `psd` template in the images folder — `parallax-template.zip`
	- the template shows that the viewport is a `16:9` window centered within the `16:18` image
	- the template is at 4k resolution, but you should save-for-web at half size (`1920x2160`)

2. set up a chillax view on your html page

	```html
	<div data-chillax>
		<img data-chillax-layer="10" src="background.png" alt=""/>
		<img data-chillax-layer="5" src="midground.png" alt=""/>
		<img data-chillax-layer="0" src="foreground.png" alt=""/>
	</div>
	```

	- `[data-chillax]` defaults to `100` "leeway",  
		which is percentage of parallax sliding action allowable, relative to the height of the view

	- `[data-chillax-layer]` specifies the `depth`,  
		where `0` is flush with the rest of the page,  
		`10` is sunken "fully" into the background,  
		and anything negative is popping out of the view toward the user

	- note that the chillax css styles define scenes with a display aspect ratio of `16:9` – if you want a different ratio, you must modify/overwrite these css styles

3. activate chillax on your views

	```html
	<script>
		const chillax = new Chillax()
	</script>
	```
