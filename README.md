Tool for [Vue.js SSR apps](https://vuejs.org/v2/guide/ssr.html) that include other resources that may be handy to preload to improve performance.


![dependencies status](https://david-dm.org/shershen08/vue-preload/status.svg)

## Demo

Using [vue-ssr-boilerplate](https://github.com/fenivana/vue-ssr-boilerplate)

## Install

```
npm install vue-link-preload --save
```

## Usage

```
import Preload from 'vue-link-preload'

Vue.use(Preload)

// dynamically add single item
// by default the type 'script' is assigned
Vue.addPreloadLink('https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js')

// add multiple items at once
Vue.preloadGroup({
  script: ['https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'],
  style: ['https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap-reboot.min.css'],
  'image': ['https://www.google.nl/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png']
})
```

## API

**Vue.addPreloadLink(link,[ type])**

Preload single resource. You can provide type and optionaly a callback on when the resource is available.


**Vue.preloadGroup(resourseMap)**

Preload group of resources of multiple types. The map keys are limited to valid preload asset types:
script, style, image, media, document, font. 


## See also

 - [smashingmagazine.com Preload: What Is It Good For? By Yoav Weiss](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
 - [current browser support for <link rel="preload"](http://caniuse.com/#search=preload)

## License 

MIT
