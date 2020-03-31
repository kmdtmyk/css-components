
document.addEventListener('DOMContentLoaded', e => {

  new Vue({
    el: '#app',
    data(){
      return {
        popover: {
          direction: 'bottom',
          arrow: false,
          dark: false,
        },
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
    }
  })

})
