import HtmlCodeViewer from './components/html-code-viewer.vue'

HtmlCodeViewer.install = function(Vue) {
  Vue.component(HtmlCodeViewer.name, HtmlCodeViewer)
}

export default HtmlCodeViewer
