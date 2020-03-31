
document.addEventListener('DOMContentLoaded', e => {

  new Vue({
    el: '#popover',
    data(){
      return {
        popover: {
          direction: 'bottom',
          arrow: false,
          dark: false,
        },
      }
    },
    computed: {
      popoverClass(){
        const {popover} = this
        const result = ['popover']
        result.push(`popover-${popover.direction}`)
        if(popover.arrow === true){
          result.push('popover-arrow')
        }
        if(popover.dark === true){
          result.push('popover-dark')
        }
        return result
      },
    },
    mounted(){
      this.updateCode()
    },
    watch: {
      popover: {
        handler(){
          this.updateCode()
        },
        deep: true,
      },
    },
    methods: {
      updateCode(){
        const {code} = this.$refs
        code.innerText = html_beautify(`
          <details class="${this.popoverClass.join(' ')}">
            <summary>popover</summary>
            <div class="popover-content">...</div>
          </details>
        `)
        hljs.highlightBlock(code)
      },
    }
  })

  new Vue({
    el: '#tooltip',
    data(){
      return {
        tooltip: {
          direction: 'bottom',
          arrow: false,
          dark: false,
          fade: false,
          delay: false,
        },
      }
    },
    computed: {
      tooltipClass(){
        const {tooltip} = this
        const result = ['tooltip']
        result.push(`tooltip-${tooltip.direction}`)
        if(tooltip.arrow === true){
          result.push('tooltip-arrow')
        }
        if(tooltip.dark === true){
          result.push('tooltip-dark')
        }
        if(tooltip.fade === true){
          result.push('tooltip-fade')
        }
        if(tooltip.delay === true){
          result.push('tooltip-delay')
        }
        return result
      },
    },
    mounted(){
      this.updateCode()
    },
    watch: {
      tooltip: {
        handler(){
          this.updateCode()
        },
        deep: true,
      },
    },
    methods: {
      updateCode(){
        const {code} = this.$refs
        code.innerText = html_beautify(`
          <div class="${this.tooltipClass.join(' ')}">
            <div>tooltip</div>
            <div class="tooltip-content">...</div>
          </div>
        `)
        hljs.highlightBlock(code)
      },
    }
  })

})
