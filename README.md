## Usage

import Preload from 'vue-preload'

Vue.use(Preload)

//dynamically add single item
Vue.addPreloadLink('https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js')

// add multiple items at once
Vue.preloadMap({
  script: 'https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js',
  style: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap-reboot.min.css'
})

