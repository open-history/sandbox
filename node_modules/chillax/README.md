
# ❄ — c h i l l a x — ❄
## vertical parallax engine for beautiful web presentations

### install chillax into your hip new app

1. `npm install chillax`
2. `import Chillax from "chillax"`  
	*(it's a commonjs module)*
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

1. prepare your png image layers, all with the dimensions `1920x2160`

	- your image must be double-height, to give leeway to the parallax effects (otherwise your layers will look cut-off)
	- you should probably use the `psd` template `parallax-template.zip` in the images folder
	- the template shows that the viewport is still a `16:9` window, centered within the `16:18` image
	- the template is at 4k resolution, but you should save-for-web at `1920x2160`

2. set up a chillax view on your html page

	```html
	<div data-chillax="100">
		<img data-chillax-layer="10" src="background" alt=""/>
		<img data-chillax-layer="5" src="midground" alt=""/>
		<img data-chillax-layer="0" src="foreground" alt=""/>
	</div>
	```

	- `[data-chillax]` specifies the `leeway`,  
		which is percentage of parallax sliding action allowable, relative to the height of the view

	- `[data-chillax-layer]` specifies the `depth`,  
		where `0` is flush with the rest of the page,  
		`10` is sunken fully into the background,  
		and anything negative is popping out of the view toward the user

	- note that the chillax css styles define only views with an aspect ratio of `16:9` – if you want a different ratio, you must modify/overwrite these css styles

3. activate chillax on your views

	```html
	<script>
		const views = document.querySelectorAll("[data-chillax]")
		const chillax = new Chillax({views})
	</script>
	```
