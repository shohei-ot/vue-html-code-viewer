vue-html-code-viewer
==========================

Vue component file experiments.

## Usage

```js
import HtmlCodeViewer from 'vue-html-code-viewer'

Vue.use(HtmlCodeViewer)

new Vue({/* ... */})
```

```html
<!-- already included Bulma css -->
<div class="columns">
  <div id="target" class="column">
    <div>
      <span>YO</span>
    </div>
  </div>
  <div class="column">
    <HtmlCodeViewer el="#target"></HtmlCodeViewer>
  </div>
</div>
```

expected result:

![usage](img/usage.png)
