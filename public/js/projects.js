$(document).ready(function () {
  new Vue({
    el: '#projects',
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
    }
  })
})