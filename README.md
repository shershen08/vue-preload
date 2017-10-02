## Install

```
npm install vue-preload
```

## Usage

```
import Preload from 'vue-preload'

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

**Vue.addPreloadLink(link,[ type, callback])**

Preload single resource.


**Vue.preloadGroup(resourseMap)**

Preload group of resources of multiple types.


## See also

 - [smashingmagazine.com Preload: What Is It Good For? By Yoav Weiss](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
 - [current browser support](http://caniuse.com/#search=preload)

## License 

MIT
