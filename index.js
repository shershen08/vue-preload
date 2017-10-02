
const VuePreload = {}

const validateAs = type => ['', 'script', 'style', 'image', 'media', 'document', 'font'].indexOf(type) > -1

const domTokenListSupports = function() {
  try {
    return document.createElement('link').relList.supports('preload')
  } catch (e) {
    // not supported
  }
}

VuePreload.install = function(Vue) {
  Vue.addPreloadLink = function(elementHref, elementAs, elementOnload) {
    if (!domTokenListSupports()) return
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

    if (elementOnload) {
      const onload = document.createAttribute('onload')
      onload.value = elementOnload
      lnk.setAttributeNode(onload)
    }

    document.head.appendChild(lnk)
  }

  Vue.preloadGroup = function(resourcesMap) {
    for (const [key, value] of Object.entries(resourcesMap)) {
      if (validateAs(key) && value.length) {
        value.forEach(item => Vue.addPreloadLink(item, key))
      }
    }
  }
}


export default VuePreload