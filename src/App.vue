<template>
  <section class="section">
    <div class="columns">
      <div id="target" class="column">
        <div class="parent">
          <p>this is parent element</p>
          <hr>
          <div class="child">
            <p>this is child element</p>
            <hr>
            <ul>
              <li>the 1</li>
              <li>the 2</li>
              <li>the 3</li>
              <li>the 4</li>
              <li>the 5</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <HtmlCodeViewer el="#target"></HtmlCodeViewer>
      </div>
    </div>
  </section>
</template>

<script>
import HtmlCodeViewer from './components/html-code-viewer'
export default {
  components:{HtmlCodeViewer}
}
</script>
