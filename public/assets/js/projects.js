
$(document).ready(function () {
  new Vue({
    el: '#app',
    data: {
      state: {
        resListCategory: [],
        resListProjectData: []
      },
    },
    methods: {
      getProjectData: async function() {
        const resData = await axios.get('/api/v1/getData')
        this.state.resListCategory = resData.data[0].category
        this.state.resListProjectData = resData.data[0].data
      }
    },
    mounted: async function () {
      await Promise.all([this.getProjectData()])

      let selector_query = window.location.hash.substr(1)
      let filterButtons = $('.button.filter')
      if (selector_query) {
        let element = $(`#filter-${selector_query}`)
        if (element.length) {
          filter(selector_query)
          filterButtons.removeClass('active')
          element.addClass('active')
          element.blur()
        }
      }

      filterButtons.click(function () {
        filter(this.id.replace('filter-', ''))
        filterButtons.removeClass('active')
        $(this).addClass('active')
        $(this).blur()
      })

      function filter(category) {
        let selector = $('#filterable > div, #filterable > a')
        if (category.toLowerCase() == 'all') {
          selector.fadeIn(450)
        } else {
          var $el = $(`.${category}`).fadeIn(450)
          selector.not($el).hide(0, function () {
            selector.not($el).attr('style', 'display: none !important')
          })
        }
      }
    }
  })
})