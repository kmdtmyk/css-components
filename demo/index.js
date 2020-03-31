
document.addEventListener('DOMContentLoaded', e => {

  new Vue({
    el: '#app',
    data(){
      return {
        popover: {
          direction: 'bottom',
          arrow: false,
        }
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
        return result
      }
    }
  })

})
