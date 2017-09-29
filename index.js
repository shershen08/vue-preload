
const VuePreload = {}

const validateAs = type => ['', 'script', 'style', 'image', 'media', 'document', 'font'].indexOf(type) > -1

VuePreload.install = function(Vue) {
  Vue.addPreloadLink = function(elementHref, elementAs) {
    if (!validateAs(elementAs)) return
    if (elementAs === '') elementAs = 'script'

    const lnk = document.createElement('link')

    const rel = document.createAttribute('rel')
    rel.value = 'preload'
    lnk.setAttributeNode(rel)

    const as = document.createAttribute('as')
    as.value = elementAs
    lnk.setAttributeNode(as)

    const href = document.createAttribute('href')
    href.value = elementHref
    lnk.setAttributeNode(href)

    document.head.appendChild(lnk)

    // todo: implement other things from
    // https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/
    // elementMedia
  }

  Vue.preloadMap = function(resourcesMap) {
    for (const [key, value] of Object.entries(resourcesMap)) {
      Vue.addPreloadLink(value, key)
    }
  }

//   Vue.mixin({
//     addPreload: Vue.addPreloadLink
//   })
}


export default VuePreload