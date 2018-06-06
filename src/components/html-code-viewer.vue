<template>
  <pre class="html-code-viewer">
    <code>{{ $props.debug ? "[debug-mode]\n" : '' }}{{ $data.code }}</code>
  </pre>
</template>

<script>
export default {
  name: 'html-code-viewer',
  props: {
    debug: { type: Boolean, default: false },
    el: {
      // element id or refs to HTML element.
      type: [String, HTMLElement],
      required: true
    }
  },
  data() {
    return {
      ref: null,
      code: ''
    }
  },
  watch: {
    '$props.el': {
      handler() {
        this._mountRef()
      },
      deep: true
    },
    ref: {
      handler() {
        this.updatePreCode()
      },
      deep: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._mountRef()
    })
  },
  methods: {
    _mountRef() {
      const _el = this.$props.el
      const el = Object.prototype.toString.call(_el) === '[object String]' ? window.document.querySelector(_el) : _el
      this.$data.ref = el
    },
    updatePreCode() {
      if (!this.$data.ref) return false
      const code = this._parser(this.$data.ref.innerHTML)
      this.$data.code = code
    },
    _parser(htmlStr) {
      // TODO: use node-htmlparser
      return [...htmlStr.replace(/^((\s|\n|\r|\n\r|\t))+/g, '')].reduce((accum, s) => {
        if(s === '<'){
          s = "\n"+s
        }else if(s==='>'){
          s = s+"\n"
        }
        accum.push(s)
        return accum
      }, []).join('').replace(/(\n|\r|\r\n){1,}/gm, "\n")
    }
  }
}
</script>
