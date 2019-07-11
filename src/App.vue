<template>
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
</template>

<script>
import HtmlCodeViewer from './components/html-code-viewer.vue'
export default {
  components:{HtmlCodeViewer}
}
</script>
